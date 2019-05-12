<template>
  <div class="swiper-container">
    <slot></slot>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  data () {
    return {

    }
  },
  props: {
    loop: {
      type: Boolean
    },
    autoplay: {
      type: Boolean
    },
    pagination: {
      type: Object,
      default: null
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      loop: this.loop,
      autoplay: this.autoplay,
      // 如果需要分页器
      pagination: this.pagination
    })
  }
}
</script>
<style scoped lang='scss'>
.swiper-pagination-fraction {
  @include wh(75px, 35px);
  background: rgba(0, 0, 0, .5);
  border-radius: 400px;
  color: $color-background-default;
  font-size: $text-size-m;
  line-height: 35px;
  right: 40px;
  left: auto;
}
</style>
<style lang="scss">
.swiper-pagination-fraction span {
  display:inline-block;
  font-size: $text-size-m;
}
</style>
