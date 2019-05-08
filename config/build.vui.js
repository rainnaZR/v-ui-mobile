var ora = require('ora');
var chalk = require('chalk');
var webpack = require('webpack');
var webpackConfig = require('./webpack.conf.vui.js');

var spinner = ora('building vui for production...');
spinner.start();

webpack(webpackConfig, function(err, stats){
  spinner.stop();
  if (err) throw err;

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');

  console.log(chalk.cyan('Build vui complete.\n'));
});
