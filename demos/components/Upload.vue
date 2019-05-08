<template>
    <div class="m-content">
        <vu-upload
            @success="success"
            @error="error">
        </vu-upload>

        <vu-upload
            width="300"
            height="300"
            maxSize="100MB"
            extensions="jpg,png"
            rootDirectory="web/"
            directory="vui/"
            @success="success"
            @error="error">
        </vu-upload>

        <div v-if="imgInfo && imgInfo.imgUrl">
            <p>图片路径为：<br /><a :href="imgInfo.imgUrl" target="_blank">{{imgInfo.imgUrl}}</a></p>
            <p>图片宽度为：{{imgInfo.imgWidth}}px</p>
            <p>图片高度为：{{imgInfo.imgHeight}}px</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            imgInfo: {}
        }
    },

    methods: {
        success(res){
            this.imgInfo = res;
            console.log(res);
        },

        error(err){
            alert(err.message);
        }
    }
}
</script>

