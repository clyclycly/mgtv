import axios from 'axios'

export function getMsg(x) {
  const url = '/api/playList'

  const data = Object.assign({
    _support: 10000000,
    abroad: 0,
    partId: x,
    pageNum: 1,
    pageSize: 20,
    needLocate: 1
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
