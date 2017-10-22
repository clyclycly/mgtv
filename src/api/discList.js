import {commonParams} from './config'
import axios from 'axios'

export function getMsg(x) {
  const url = '/api/DiscList'

  const data = Object.assign({}, commonParams, {
    vclassId: x
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
