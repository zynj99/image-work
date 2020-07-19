/*
 * @Author: troubledot
 * @Date:   2019-08-29 19:28:16
 * @Last Modified by:   troubledot
 */
import request from 'utils/request'

export function fetchGetEarlyList(header,data) {
    return request({
        url: '/tnb/sfjl/list',
        method: 'post',
        headers: header,
        data: data
    })
}
export function fetchGetEarlyInfo(header,data) {
    return request({
        url: '/tnb/sfjl/detail',
        method: 'post',
        headers: header,
        data: data
    })
}
export function TqqApiadd(header,data) {
    return request({
        url: '/tnb/sfjl/save',
        method: 'post',
        headers: header,
        data: data
    })
}


