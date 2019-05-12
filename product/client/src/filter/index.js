export default {
  install (Vue) {
    Vue.filter('parseNum', (num) => { // 给数字分割为3位一组
      let newNum = num.toString()
      let reg = /(\d{1,})(\d{3})/
      while (reg.test(newNum)) {
        newNum = newNum.replace(reg, '$1,$2')
      }
      return newNum
    })
    Vue.filter('addZeroEnd', (num) => {
      let newNum = num.toString()
      let id = newNum.indexOf('.')
      if (id >= 0) {
        let Zeros = newNum.slice(id + 1, newNum.length)
        if (Zeros.length === 1) {
          newNum += '0'
        } else {
          newNum += '00'
        }
      } else {
        newNum += '.00'
      }
      return newNum
    })
    Vue.filter('addZeroStart', (num) => {
      return (Array(num.len).join('0') + num.num).slice(-num.len)
    })
  }
}
