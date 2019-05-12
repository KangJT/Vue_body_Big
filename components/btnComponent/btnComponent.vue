<template>
  <div>
    <button
    @click="btnClicks('btnData')"
     v-if="btnType==='bnobg'" class="bnobg"
     :style="`
      color:${btnTextCol};
      width:${btnWidth}px;
      height: ${btnHeight}px;
      border:${btnBorder}px solid ${btnBorderCol};
     `"
    >{{cenText}}</button>
    <button
    @click="btnClicks('btnData')"
     v-else-if="btnType==='bnobo'" class="bnobo"
     :style="`
      color:${btnTextCol};
      background: ${btnBack};
      width:${btnWidth}px;
      height: ${btnHeight}px;
     `"
    >{{cenText}}</button>
    <div
    @click="btnClicks('btnData')"
     v-else-if="btnType==='iconBtn'"
     class="iconBtn"
     :style="`
      color:${btnTextCol};
      background: ${btnBack};
     `"
    >
      <slot></slot>
    </div>
    <button
    @click="btnClicks('btnData')"
     v-else-if="true"
     :style="`
      color:${btnTextCol};
      background: ${btnBack};
      width:${btnWidth}px;
      height: ${btnHeight}px;
      borderRadius: ${btnRadius}px;
      border:${btnBorder}px solid ${btnBorderCol};
     `"
    >{{cenText}}</button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    cenText: {
      type: String,
      default: '默认按钮'
    },
    btnBack: {
      type: String,
      default: '#0ff'
    },
    btnTextCol: {
      type: String,
      default: '#0ff'
    },
    btnWidth: {
      type: Number,
      default: 70
    },
    btnHeight: {
      type: Number,
      default: 30
    },
    btnRadius: {
      type: Number,
      default: 5
    },
    btnBorder: {
      type: Number,
      default: 1
    },
    btnBorderCol: {
      type: String,
      default: '#ccc'
    },
    btnType: {
      type: String
    },
    btnClick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    btnClicks (btnData) {
      this.btnClick(btnData)
    }
  }
}
</script>
<style scoped lang="scss">
/* button {
  border: 0;
} */
.bnobg {
  width: 140px;
  height: 60px;
  border: 1px solid #F2922F;
  color: #F2922F;
  background: #fff;
  border-radius: 10px;
}
.bnobo {
  width: 140px;
  height: 60px;
  border: 0;
  color: #fff;
  background: #F2922F;
}
.iconBtn {
  @include wh(302px, 302px);
  border-radius: 50%;
  background: #F2922F;
  @include flex(column, center, center);
}
</style>
