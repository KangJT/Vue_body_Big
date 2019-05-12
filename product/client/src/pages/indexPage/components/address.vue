<template>
  <div class="topAddress">
    <i class="iconfont addressIcon">&#xe62e;</i>
    <p class="addressText">请选择配送地址</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.topAddress {
  @include wh(100%, 80px);
  color: $color-background-default;
  background: $color-text-default;
  @include flex(row, inherit, center);
}
.addressIcon {
  font-size: $icon-size-m;
  margin-left: 30px;
}
.addressText {
  font-size: $text-size-lx;
  margin-left: 10px;
}
</style>
