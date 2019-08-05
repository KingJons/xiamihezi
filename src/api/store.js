import req from '@/utils/req'
// 店铺收益
export function findDetail (par) {
  return req({
    url: '/api/v1/orderSettlementLog/findDetai',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
