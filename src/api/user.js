import req from '@/utils/req'
// 我的收货地址
export function queryList (par) {
  return req({
    url: '/api/v1/address/queryList',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 用户信息
export function getUsersInfo (par) {
  return req({
    url: '/api/v1/user/getUsersInfo',
    method: 'GET',
    params: par
  })
}

// 个人信息修改
export function modifyInfo (par) {
  return req({
    url: '/api/v1/user/modifyInfo',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 当前手机号
export function showPhone (par) {
  return req({
    url: '/api/v1/user/showPhone',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 修改手机号
export function replacePhone (par) {
  return req({
    url: '/api/v1/user/replacePhone',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
