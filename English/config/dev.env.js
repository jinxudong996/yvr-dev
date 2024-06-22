'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    //BASE_API: '" http://localhost:8900/mock/5b50838a7f37d531b025661c/suprecls"', //easy-mock
    //BASE_API: '" http://58.33.165.250:9504/ZJXJ.API/V1.0.0/api/"',
    BASE_API: '"http://localhost:1442/api"', //本机环境
    //BASE_API: '" https://schlti-survey.ipmch.com.cn/ZJXJ.API/V1.0.0/api/"', //线上
    FILE_UPLOAD_URL: '"development"', //文件地址
    VIDEO_FILE_UPLOAD_URL: '""' //视频地址
})
