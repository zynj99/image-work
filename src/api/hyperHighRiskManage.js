/*
* @Author: xiongfm
* @Date:   2019-04-22 19:28:16
* @Last Modified by:   troubledot
* @Last Modified time: 2019-05-15 15:58:58
*/
import request from 'utils/request'

// 查询高血压高危随访记录list
export function getFetchVisitManageList (header, data) {
  return request({
    url: '/gxy/gwsf/list',
    method: 'post',
    headers: header,
    data: data
  })
}
// 查询高血压高危随访记录list
export function getFetchVisitManageDetail (header, data) {
  return request({
    url: '/gxy/gwsf/detail',
    method: 'post',
    headers: header,
    data: data
  })
}

// 高血压高危随访记录保存
export function getFetchVisitManageSave (header, data) {
  return request({
    url: '/gxy/gwsf/save',
    method: 'post',
    headers: header,
    data: data
  })
}
