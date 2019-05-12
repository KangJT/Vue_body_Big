let state = {
  nowCheck: 0
}
let mutations = {
  changeNowCheck (state, origin) {
    state.nowCheck = origin
  }
}
let actions = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
