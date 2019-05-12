<template>
  <div>
    <button class="alertBtn" @click="openAlert">点击弹窗</button>
    <div v-if="isShowAlert">
      <div class="bg" @click="clickBtn('bg')" @touchmove.prevent></div>
      <div :class="buttonType === 'twoBtn' ? 'alertBox paddef' : 'alertBox'">
        <div v-if="iconType" class="iconBox">
          <i v-if="iconType === 'success'" class="iconfont successIcons">&#xe63c;</i>
          <i v-if="iconType === 'error'" class="iconfont errorIcons">&#xe657;</i>
        </div>
        <h3 v-if="titles" :class="buttonType === 'twoBtn' ? 'twoTitles' : 'titles'">{{titles}}</h3>
        <div v-if="isClose" class="closeAlert">
          <i @click="clickBtn('close')" class="iconfont offbtn">&#xe628;</i>
        </div>
        <div class="slotPlan">
          <slot></slot>
        </div>
        <p v-if="textCen" class="textCen">{{textCen}}</p>
        <div v-if="buttonType">
          <div v-if="buttonType === 'oneBtn'" class="oneBtn">
            <button class="oneButton" @click="clickBtn('returns')">{{oneBtnText}}</button>
          </div>
          <div v-if="buttonType === 'twoBtn'" class="twoBtn">
            <button @click="clickBtn(false)">{{twoBtnText.ones}}</button>
            <button @click="clickBtn(true)">{{twoBtnText.twos}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    iconType: {
      type: String
    },
    buttonType: {
      type: String
    },
    titles: {
      type: String
    },
    textCen: {
      type: String
    },
    buttonClick: {
      type: Function,
      default: () => {}
    },
    oneBtnText: {
      type: String
    },
    twoBtnText: {
      type: Object
    },
    isClose: {
      type: Boolean,
      default: false
    },
    isShowAlert: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    clickBtn (btnType) {
      this.$emit('update:isShowAlert', false)
      this.buttonClick(btnType)
    },
    openAlert () {
      this.$emit('update:isShowAlert', true)
    }
  }
}
</script>
<style scoped lang='scss'>
.bg {
  @include wh(100%, 100%);
  background: rgba(0,0,0,.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
.alertBox {
  width: 540px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: $color-background-default;
  border-radius: 12px;
  padding: 20px 0;
  z-index: 1001;
}
.iconBox {
  width: 100%;
  margin-top: 20px;
  @include flex(row, center, center)
}
.successIcons, .errorIcons {
  font-size: $icon-size-max;
}
.successIcons {
  color: $color-button-default;
}
.errorIcons {
  color: $color-icon-error;
}
.titles {
  font-size: $text-size-lxx;
  color: $color-text-default;
  text-align: center;
  line-height: 50px;
}
.paddef {
  padding: 0;
}
.twoTitles {
  @include wh(100%, 140px);
  font-size: $text-size-lxx;
  color: $color-text-default;
  text-align: center;
  line-height: 140px;
}
.textCen {
  font-size: $text-size-lx;
  color: $color-text-little-special;
  text-align: center;
  line-height: 50px;
}
.oneBtn {
  @include wh(100%, 100px);
  @include flex(row, center, center);
}
.oneButton {
  @include wh(200px, 60px);
  border: 1px solid $color-text-checked;
  color: $color-text-checked;
  text-align: center;
  border-radius:7px;
  line-height: 60px;
  background: $color-background-default;
}
.twoBtn {
  @include wh(100%, 90px);
  border-top: 1px solid $color-box-shadow;
  @include flex();
  border-radius: 6px;
  overflow: hidden;
}
.twoBtn button {
  flex: 1;
  height: 100%;
  border: 0;
  background: $color-background-default;
  font-size: $text-size-lxx;
  letter-spacing: -1.41px;
  line-height: $text-size-lxx;
}
.twoBtn button:first-child {
  border-right: 1px solid $color-box-shadow;
  color: $color-text-little-special;
}
.twoBtn button:nth-child(2) {
  color: $color-text-checked;
}
.slotPlan {
  @include flex(row, center, center)
}
.closeAlert {
  position: absolute;
  right: 20px;
  top: -100px;
}
.offbtn {
  font-size: 40px;
  color: $color-background-default;
  position: relative;
}
.offbtn:after {
  content: '';
  display: block;
  position: absolute;
  right: 20px;
  top: 40px;
  width: 1px;
  height: 64px;
  background: $color-background-default;
}
.alertBtn {
  width: 160px;
  height: 50px;
  border: 1px solid #000;
  background: transparent;
  font-size: 24px;
}
</style>
