'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_BASEURL: 'http://39.108.217.205:8082'  // 需要自己添加的代码
})
