<template>
  <div class="listy">
    <dl v-for="item in listdata" :key="item.id" class="eveList">
      <dt>
        <img :src="item.url" alt="">
      </dt>
      <dd>
        <p class="listTitle">{{item.title}}</p>
        <p class="weight">{{item.name}}</p>
        <div class="prices">
          <span class="priceNum">￥{{item.price}}</span>
          <!-- <span class="addCar">+</span> -->
          <slot></slot>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    listdata: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  }
}
</script>
<style scoped lang='scss'>
.listy {
  width: 100%;
  @include flex(row, inherit, inherit);
  flex-wrap: wrap;
  margin-bottom: 110px;
}
.eveList {
  width: 49.5%;
  border-bottom: 1px solid $color-box-shadow;
  padding: 20px 38px
}
.eveList:nth-child(odd) {
  border-right: 1px solid $color-box-shadow;
}
.eveList dt {
  @include wh(300px, 300px);
  border: 1px solid $color-border-default;
  margin-bottom: 20px;
}
.eveList dt img {
  width: 100%;
  display: block;
}
.listTitle {
  font-size: $text-size-lx;
  color: $color-text-default;
  @include twoD();
  letter-spacing: 0;
  line-height: 40px;
}
.weight {
  font-size: $text-size-l;
  color: $color-text-little-special;
  line-height: 40px;
}
.prices {
  width: 100%;
  height: 50px;
  margin-top: 16px;
  @include flex(row, space-between, inherit);
}
.priceNum {
  font-size: $text-size-lxx;
  color: $color-text-default;
  line-height: $text-size-lxx;
  font-weight: 500;
}
.addCar {
  @include wh(50px, 50px);
  text-align: center;
  line-height: 50px;
  background: $color-button-default;
  border-radius: 12px;
  color: $color-background-default;
}
</style>
