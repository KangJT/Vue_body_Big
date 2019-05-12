<template>
  <div>
    <router-view />
    <Footer :footerData="footerData" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      footerData: [
        {
          id: 'index',
          url: '/',
          name: '首页',
          icon: '\ue615'
        },
        {
          id: 'shopping',
          url: '/shoppingCar',
          name: '购物车',
          icon: '\ue690'
        },
        {
          id: 'self',
          url: '/mySelf',
          name: '我的',
          icon: '\ue623'
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
