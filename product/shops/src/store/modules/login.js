import api from '@/api/index'
let state = {

}
let mutations = {

}
let actions = {
  loginIn ({commit, state}, products) {
    return new Promise((resolve, reject) => {
      api.userLogin(products)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
