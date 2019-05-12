<template>
  <div class="listx">
    <dl v-for="item in listdata" :key="item.id" :class="isShows?'eveList borders':'eveList'">
      <div v-if="isShows" class="checkBox" @click="nowCheck(item)">
        <i v-if="item.type" class="iconfont">&#xe63c;</i>
        <i v-if="!item.type" class="iconfont checkd">&#xe606;</i>
      </div>
      <dt>
        <img :src="item.url" alt="">
      </dt>
      <dd>
        <div class="titleBox">
          <p class="listTitle">{{item.title}}</p>
          <div class="topRight">
            <slot name="topRight"></slot>
          </div>
        </div>
        <p class="weight">{{item.name}}</p>
        <div class="prices">
          <span class="priceNum">￥{{item.price}}</span>
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
    },
    isShows: {
      type: Boolean,
      default: false
    },
    getCheckData: {
      type: Function
    }
  },
  created () {
    window.localStorage.clear('checkShop')
  },
  methods: {
    nowCheck (checkData) {
      checkData.type = !checkData.type
      this.getCheckData(checkData)
    }
  }
}
</script>
<style scoped lang='scss'>
.listx {
  width: 100%;
  @include flex(column, inherit, inherit);
  margin-bottom: 120px;
}
.eveList {
  @include flex(row, inherit, inherit);
  padding: 10px 0;
}
.eveList dt {
  margin: 0 30px;
}
.eveList dt img {
  @include wh(200px, 200px);
  display: block;
  border: 1px solid $color-border-default;
}
.eveList dd {
  flex: 1;
  margin-top: 10px;
  margin-right: 30px;
  position: relative;
}
.titleBox {
  @include flex(row, center, flex-start);
  flex-shrink: 0;
}
.listTitle {
  flex: 1;
  font-size: $text-size-lx;
  color: $color-text-default;
  @include twoD();
  line-height: 40px;
  font-weight: 500;
}
.weight {
  font-size: $text-size-l;
  color: $color-text-little-special;
  line-height: $text-size-l;
  margin-top: 20px;
}
.prices {
  @include wh(100%, 50px);
  margin-top: 16px;
  @include flex(row, space-between , inherit)
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
.topRight {
  margin-left: 20px;
}
.checkd {
  font-size: 32px;
}
.checkBox {
  margin-top: -20px;
  margin-left: 10px;
  margin-right: -20px;
  display: flex;
  align-items: center;
}
.borders {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}
</style>
