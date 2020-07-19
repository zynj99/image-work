/*
* @Author: troubledot
* @Date:   2019-04-22 19:28:16
* @Last Modified by:   troubledot
* @Last Modified time: 2019-05-15 15:58:58
*/
import request from 'utils/request'

//高血压高危筛查保存
export function fetchHyperHighRiskSrcSave(headerdata, data) {
    return request({
        url: '/gxy/gwsc/save',
        method: 'post',
        headers: headerdata,
        data: data
    })
}

//糖尿病高危筛查保存
export function fetchDiabetesHighRiskSrcSave(headerdata, data) {
    return request({
        url: '/tnb/gwsc/save',
        method: 'post',
        headers: headerdata,
        data: data
    })
}

//糖尿病高危筛查保存
export function tnbSubmit(headerdata, data) {
    return request({
        url: '/tnb/gwsc/save',
        method: 'post',
        headers: headerdata,
        data: data
    })
}