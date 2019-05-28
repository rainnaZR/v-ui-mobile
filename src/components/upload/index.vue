<template>
    <div vu-upload class="vu-upload">
        <button class="button" @click="btnClick">+</button>
        <input type="file" ref="file" class="input" @change="change"/>

        <div class="preview" v-if="imgUrl">
            <a :href="imgUrl" target="_blank">
                <img :src="imgUrl" />
                <span class="del" @click="deleteImg">x</span>
            </a>
        </div>
    </div>
</template>

<script>
// import OSS from 'ali-oss';

/* 配置链接参考：
https://help.aliyun.com/document_detail/32069.html#h2-url-2
https://help.aliyun.com/document_detail/64041.html
*/
const OSS_CONFIG = {
    region: 'oss-cn-hangzhou',
    accessKeyId: 'xxx',
    accessKeySecret: 'xxx',
    stsToken: '',
    bucket: 'image-xxx'
};
const IMAGE_DOMAIN = 'https://image.xxx.com';
const SIZE_UNITS = {
    'KB': 1000,
    'MB': 1000*1000,
    'GB': 1000*1000*1000
};

export default {
    props: {
        value: [String],
        width: [String],
        height: [String],
        extensions: {
            type: String,
            default: 'png,jpg,jpeg,bmp'
        },
        maxSize: [String],
        rootDirectory: {  //文件存储的根目录，用应用名称区分，比如web, app
            type: String,
            default: 'web/'
        },
        directory: { //用项目名称区分，比如h5, ms, activity等
            type: String,
            default: 'vui/'
        }
    },

    data(){
        return {
            sending: false,
            imgUrl: this.value
        }
    },

    watch: {
        imgUrl(newValue){
            console.log(`上传图片路径为：${newValue}`);
            this.$emit('input', newValue);
        },
        value(newValue){
            this.imgUrl = newValue;
        }
    },

    mounted(){
        // this.ossClient = new OSS(OSS_CONFIG);
        this.ossClient = {};
    },

    methods: {
        btnClick(){
            this.$refs.file.click();
        },

        change(){
            let file = this.$refs.file.files ? this.$refs.file.files[0] : {
                name: this.$refs.file.value,
                size: 0
            };
            let extensions = this.extensions,
                maxSize = this.maxSize,
                width = this.width,
                height = this.height;
            let that = this;

            //校验图片是否有名字
            if(!file || !file.name){
                return;
            }

            //使用promis链式调用，对图片做校验
            this.checkExtensions(file, extensions)
                .then(() => this.checkSize(file, maxSize))
                .then(() => this.checkDimension(file, width, height))
                .then(res => this.onUpload(file, res))
                .then(res => this.cbUpload(res))
                .catch(err => {
                    console.error(err)
                    that.sending = false;
                    that.$emit('error', err);
                })
        },

        //检查文件后缀名
        checkExtensions(file, extensions){
            return new Promise((resolve, reject) => {
                if(!extensions){
                    return resolve()
                }

                let fileName = file.name;
                let ext = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();
                if(typeof extensions === 'string'){
                    extensions = extensions.split(',');
                }
                if(extensions.indexOf(ext) >= 0){
                    return resolve()
                }
                return reject({
                    name: 'ExtensionError',
                    message: '只能上传' + extensions.join(', ')　+ '类型的文件！',
                    data: {
                        extensions
                    }
                })
            })
        },

        //检查文件大小
        checkSize(file, maxSize){
            return new Promise((resolve, reject) => {
                if(!maxSize){
                    return resolve();
                }

                if(!isNaN(maxSize)){
                    maxSize = +maxSize;
                }else{
                    //按照单位换算
                    let unit = maxSize.slice(-2);
                    if(!SIZE_UNITS[unit]){
                        return reject({
                            name: 'SizeUnitError',
                            message: '尺寸单位不支持！',
                            data: {
                                unknownUnit: unit,
                                units: Object.keys(SIZE_UNITS)
                            }
                        });
                    }
                    maxSize = maxSize.slice(0, -2)*SIZE_UNITS[unit];
                }
                if(file.size <= maxSize){
                    return resolve();
                }

                return reject({
                    name: 'SizeError',
                    message: '文件大小超出限制！',
                    data: {
                        maxSize: maxSize,
                        size: file.size
                    }
                });
            })
        },

        //检查文件的尺寸
        checkDimension(file, width, height){
            return new Promise((resolve, reject) => {
                //读取图片数据
                let reader = new FileReader();
                reader.onload = (e) => {
                    let data = e.target.result;
                    //加载图片获取图片真实宽度和高度
                    let image = new Image();
                    image.onload = () => {
                        let imgWidth = image.width,
                            imgHeight = image.height,
                            options = {
                                width,
                                height,
                                imgWidth,
                                imgHeight
                            };

                        if(!width && !height){
                            //如果没设置宽高
                            return resolve(options)
                        }else if(width && height){
                            //如果设置了宽高
                            if((width && width == imgWidth) && (height && height == imgHeight)){
                                return resolve(options)
                            }else{
                                return reject({
                                    name: 'DimensionError',
                                    message: '图片没有按照指定宽度和高度上传！',
                                    data: {
                                        ...options
                                    }
                                })
                            }
                        }else if(width){
                            //如果设置了图片宽度，且上传图片的宽度等于设置宽度时
                            if(width && width == imgWidth){
                                return resolve(options)
                            }else{
                                return reject({
                                    name: 'DimensionWidthError',
                                    message: '图片没有按照指定宽度上传！',
                                    data: {
                                        ...options
                                    }
                                })
                            }
                        }else if(height){
                            //如果设置了图片高度，且上传图片的高度等于设置高度时
                            if(height && height == imgHeight){
                                return resolve(options)
                            }else{
                                return reject({
                                    name: 'DimensionHeightError',
                                    message: '图片没有按照指定高度上传！',
                                    data: {
                                        ...options
                                    }
                                })
                            }
                        }
                    }
                    image.src = data;
                }
                reader.readAsDataURL(file);
            })
        },

        //开始上传Blob数据，适用于小文件上传
        onUpload(file, options = {}){
            let that = this;

            //先将图片尺寸信息保存下来
            this.imgOptions = options;

            return new Promise((resolve, reject) => {
                //生成带hash码的文件名，避免重名文件
                let fileName = that.hashFileName(file.name),
                    rootDirectory = that.modifyName(that.rootDirectory),
                    directory = that.modifyName(that.directory);

                that.ossClient
                    .put(`${rootDirectory}${directory}${fileName}`, file)
                    .then(res => {

                        console.log('oss上传文件成功:', res);
                        resolve(res);
                    })
                    .catch(err => {
                        reject({
                            name: 'UploadError',
                            message: 'oss文件上传失败!',
                            data: {
                                err
                            }
                        })
                    })
            })
        },

        //生成带hash码的文件名
        hashFileName(name){
            let res = name.match(/(\w*)(\.\w+)/),
                hash = Math.random().toString(32).substring(2);

            return `${res[1]}${hash}${res[2]}`;
        },

        //对缺少/的路径名进行处理
        modifyName(name){
            if(!name){
                return ''
            }
            if(name.indexOf('/') == -1){
                return `${name}/`
            }
            return name.replace(/^\//, '');
        },

        //文件上传成功回调
        cbUpload(res){
            this.sending = false;

            if(res && res.name){
                let imgUrl = `${IMAGE_DOMAIN}/${res.name}`;
                this.imgUrl = imgUrl;
                this.$emit('success', {
                    imgUrl,
                    ...this.imgOptions
                })
            }else{
                this.$emit('error', {
                    name: 'UploadError',
                    message: 'oss文件上传失败!'
                })
            }
        },

        deleteImg(e){
            e.preventDefault();
            this.imgUrl = '';
        }
    }
}
</script>
