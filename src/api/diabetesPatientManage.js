
import request from 'utils/request'

// 查询糖尿病患者随访列表
export function getPatientList (headerData,data) {
    return request({
        url: '/tnb/hzsf/list',
        // url: 'http://10.18.34.26:9099/cdmis-app/api/tnb/hzsf/list',
        // url: 'http://10.18.130.235:9099/cdmis-app/api/tnb/hzsf/list',
        method: 'post',
        headers: headerData,
        // data: data
        data: data
    })
}

// 查询糖尿病患者随访详情
export function getDiabetesPatientInfo (headerdata,requestBody) {
    return request({
        url: '/tnb/hzsf/detail',
        // url: 'http://10.18.130.235:9099/cdmis-app/api/tnb/hzsf/detail',
        method: 'post',
        headers: headerdata,
        data: requestBody
    })
}


// 新增糖尿病患者随访信息
export function saveDiabetesPatient (headerdata,requestBody) {
    return request({
        url: '/tnb/hzsf/save',
        // url: 'http://10.18.130.235:9099/cdmis-app/api/tnb/hzsf/save',
        method: 'post',
        headers: headerdata,
        data: requestBody
    })
}
  