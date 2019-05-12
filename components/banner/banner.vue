<template>
  <div
   class="carousel"
   @touchstart = "starts"
   @touchmove = "moved"
   @touchend = "ends"
  >
    <transition-group tag='ul' class="slide" name='image'>
      <li v-for='(image,index) in imgData' :key="image" v-show='index===mark'>
        <a><img :src="image"></a>
      </li>
    </transition-group>
    <div class="bullet">
      <span>{{mark+1}}</span>
      <span>/{{imgData.length}}</span>
        <!-- <span
         v-for='(item,index) in imgData.length'
         :key="index"
         :class="{'active':index===mark}"
         @click='change(index)'
        ></span> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      mark: 0,
      timer: null,
      startX: 0,
      movedX: 0,
      setTime: null
    }
  },
  created () {
    this.play()
  },
  methods: {
    change (i) {
      this.mark = i
    },
    autoPlay () {
      this.mark++
      if (this.mark === 4) {
        this.mark = 0
      }
    },
    nextImg () {
      this.mark--
      if (this.mark < 0) {
        this.mark = 3
      }
    },
    play () {
      this.setTime = setInterval(this.autoPlay, 3000)
    },
    starts (e) {
      this.startX = e.targetTouches[0].clientX
      clearInterval(this.setTime)
    },
    moved (e) {
      this.movedX = e.targetTouches[0].clientX
    },
    ends () {
      let newX = this.startX - this.movedX
      if (newX > 20) {
        this.autoPlay()
      } else if (newX < -20) {
        this.nextImg()
      }
      this.play()
    }
  }
}
</script>
<style scoped lang="scss">
.carousel {
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 100%;
  height: 300px;
}

li {
  position: absolute
}

img {
  height: 300px;
}

.bullet {
  width: 60px;
  height: 30px;
  opacity: 0.5;
  background: #000000;
  border-radius: 200px;
  @include flex();
  position: absolute;
  z-index: 99;
  right: 20px;
  bottom: 20px;
}
.bullet span {
  display: inline-block;
  font-size: $text-size-m;
  line-height: $text-size-m;
  color: $color-background-default;
}
/* .bullet {
  width: 100%;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
} */

/* span {
  width: 0.3rem;
  height:0.3rem;
  background: white;
  display: inline-block;
  margin-right: 0.2rem;
  border-radius:50%;
} */

/* .active {
  background: #900000;
} */

.image-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}

.image-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}

.image-enter {
  transform: translateX(100%)
}

.image-leave {
  transform: translateX(0)
}
</style>
