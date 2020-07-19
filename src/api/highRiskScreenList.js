/*
* @Author: troubledot
* @Date:   2019-04-22 19:28:16
* @Last Modified by:   troubledot
* @Last Modified time: 2019-05-15 15:58:58
*/
import request from 'utils/request'
//高血压高危筛查列表
export function fetchHyperHighRiskSrcList(data, dataHeaders) {
  return request({
      url: '/gxy/gwsc/list',
      method: 'post',
      headers: dataHeaders,
      data: data
  })
}

//糖尿病高危筛查列表
export function fetchDiabetesHighRiskSrcList(data, dataHeaders) {
  return request({
      url: '/tnb/gwsc/list',
      method: 'post',
      headers: dataHeaders,
      data: data
  })
}