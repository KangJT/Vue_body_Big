<template>
  <div class="storeTitle">
    <dl>
      <dt class="storeLogo">
        <div class="LogoImg">
          <img src="@/assets/img/logo.png" alt="">
        </div>
      </dt>
      <dd class="storeText">
        <div class="storeName">
          <span class="storeNameText">喵掌柜杂货店</span>
          <span class="storeType">(已打烊)</span>
        </div>
        <div class="expressage">
          <span class="expressageType">包邮</span>
          <span class="expressageIf">满49包邮</span>
        </div>
      </dd>
    </dl>
    <div class="attention" @click="checks">
      <i v-if="!attention" class="iconfont heart">&#xe619;</i>
      <i v-if="attention" class="iconfont heart redheart">&#xe63a;</i>
      <span  v-if="!attention" class="heartText">点击关注</span>
      <span v-if="attention" class="heartText" >已关注</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      attention: false
    }
  },
  methods: {
    checks () {
      this.attention = !this.attention
    }
  }
}
</script>
<style scoped lang='scss'>
.storeTitle {
  @include wh(100%, 160px);
  background: $color-background-default;
  box-shadow: inset 0 -2px 0 0 $color-box-shadow;
  @include flex(row, inherit, inherit);
}
.storeTitle dl {
  @include flexOne();
  @include flex(row, inherit, center);
  margin-left: 30px;
}
.LogoImg {
  @include wh(100px, 100px);
  background: $color-type-style;
  border-radius: 10px;
}
.LogoImg img {
  @include wh(100%, 100%);
}
.storeText {
  margin-left: 20px;
}
.storeNameText {
  font-size: $text-size-lxx;
  color: $color-text-default;
  line-height: $text-size-lxx;
}
.storeType {
  font-size: $text-size-lxx;
  color: $color-text-checked;
  line-height: $text-size-lxx;
}
.expressageType {
  @include wh(60px, 30px);
  text-align: center;
  display: inline-block;
  background: rgba(90,218,208,0.06);
  border: 1px solid $color-button-default;
  border-radius: 4px;
  font-size: $text-size-mn;
  color: $color-button-default;
  line-height: $text-size-mn;
}
.expressageIf {
  font-size: $text-size-l;
  color: $color-text-little-special;
  line-height: $text-size-l;
}

.attention {
  width: 140px;
  @include flex(column);
}
.heart {
  font-size: $icon-size-l;
}
.heartText {
  font-size: $text-size-m;
  color: $color-text-little-special;
  line-height: 44px;
}
.redheart {
  color: $color-text-checked;
}
</style>
