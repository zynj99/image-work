/*
 * @Author: troubledot
 * @Date:   2019-04-22 19:28:16
 * @Last Modified by:   troubledot
 * @Last Modified time: 2019-05-15 15:58:58
 */
import request from 'utils/request'
// 查询应用列表信息
export function testApi1(data) {
    return request({
        url: '/gxy/gwsc/list',
        method: 'post',
        param: data
    })
}
export function testApi2(data1, data2) {
    return request({
        url: '/gxy/gwglk/list',
        method: 'post',
        headers: data2,
        params: data1
    })
}

export function testApi3(headerdata, paramdata) {
    return request({
        url: 'gxy/gwsf/save',
        // url: 'http://10.18.34.26:9099/cdmis-app/api/gxy/gwsf/save',
        method: 'post',
        headers: headerdata,
        data: paramdata
    })
}

