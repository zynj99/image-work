'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
 // BASE_API: '"http://10.18.34.26:9099/cdmis-app/api/"'  //  测试
    BASE_API: '"http://10.18.33.174:8089/image-share/"'  //  老马
})
