import req from '@/utils/req'

// 秒杀商品
export function commoditycSpike (par) {
  return req({
    url: '/api/v1/goods/commoditycSpike',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 明日预热
export function armwUpTomorrow (par) {
  return req({
    url: '/api/v1/goods/armwUpTomorrow',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 品牌专区
export function brandZone (par) {
  return req({
    url: '/api/v1/goods/brandZone',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 猜你喜欢
export function youMayAlsoLike (par) {
  return req({
    url: '/api/v1/goods/youMayAlsoLike',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 商品详情
export function findDeatail (par) {
  return req({
    url: '/api/v1/goods/findDeatail',
    method: 'GET',
    params: par
  })
}

// 商品全部评价
export function queryGoods (par) {
  return req({
    url: '/api/v1/goodsComment/queryGoods',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 个人评价列表
export function queryPersone (par) {
  return req({
    url: '/api/v1/goodsComment/queryPersone',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
