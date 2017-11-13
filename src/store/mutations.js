import * as types from './mutation-types'
// import 引入 * 所有export属性 as 到 types types变量 from 从

// 第一个参数必须是state
const mutations = {
  [types.PLAY_IMG](state, playImg) {
    state.playImg = playImg
  }
}

// 导出这坨
export default mutations
