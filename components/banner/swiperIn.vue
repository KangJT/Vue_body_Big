<template>
  <div class="swiper-wrapper">
      <div v-for="item in imgData" :key="item" class="swiper-slide"> <!--  :style='`height:${imgheight}px`' -->
        <img :src="item">
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    imgData: {
      type: Array,
      required: true
    },
    imgheight: {
      type: Number,
      default: 200
    }
  }
}
</script>
<style scoped>
.swiper-slide {
  width: 100%;
}
.swiper-container {
  overflow: hidden;
}
.swiper-slide img{
  height: 300px;
}
</style>
