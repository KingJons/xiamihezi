'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://192.168.1.123:8080"'
  // BASE_API: '"http://192.168.1.143:8081"'
  BASE_API: '"https://testjavaapi.gongxiangyoupin.com"'
  // BASE_API: '"http://47.112.201.191:8080"'
})
