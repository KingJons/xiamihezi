import req from '@/utils/req'

// 立即购买
export function buyNow (par) {
  return req({
    url: '/api/v1/order/buyNow',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
