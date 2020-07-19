
import request from 'utils/request'

// 查询糖尿病高危随访list
export function getList (header,data) {
  return request({
    url: '/tnb/gwsf/list',
      method: 'post',
      headers: header,
      data: data
  })
}

// 查询糖尿病高危随访详情
export function getInfo (header,data) {
    return request({
      url: '/tnb/gwsf/detail',
        method: 'post',
        headers: header,
        data: data
    })
  }


  // 编辑糖尿病高危患者随访信息
export function save (header,data) {
    return request({
      url: '/tnb/gwsf/save',
        method: 'post',
        headers: header,
        data: data
    })
  }
  