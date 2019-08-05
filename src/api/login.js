import req from '@/utils/req'

// 获取手机验证码
export function getCode (par) {
  return req({
    url: '/permit/sms/code',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 获取token
export function getToken (par) {
  return req({
    url: '/auth/token',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
