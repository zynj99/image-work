import request from 'utils/request'

// 高血压患者随访记录list
export function hyperPatientList (headerData, data) {
    return request({
        url: '/gxy/hzsf/list',
        method: 'post',
        headers: headerData,
        data: data
    })
}
// 高血压患者随访记录详情
export function hyperPatientInfo (headerData, data) {
    return request({
        url: '/gxy/hzsf/detail',
        method: 'post',
        headers: headerData,
        data: data
    })
}
// 高血压患者随访记录保存
export function hyperPatientAdd(headerData, data) {
    return request({
        url: '/gxy/hzsf/save',
        method: 'post',
        headers: headerData,
        data: data
    })
}

