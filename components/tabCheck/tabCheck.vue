<template>
  <div class="tabCk">
    <ul class="tabTit">
      <li
       class="tabEvery"
       v-for="item in tabTitle"
       :key="item.id"
       @click="tabClick(item)"
      >
        <span :class="clickId === item.id ? 'actives': ''">{{item.name}}</span>
      </li>
    </ul>
    <div class="tabInner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      clickId: 'hotShop'
    }
  },
  props: {
    tabTitle: {
      type: Array,
      required: true
    },
    clickCheck: {
      type: Function,
      required: true
    }
  },
  methods: {
    tabClick (item) {
      this.clickId = item.id
      this.clickCheck(item)
      if (item.url) {
        this.$router.push({path: item.url})
      }
    }
  }
}
</script>
<style scoped lang="scss">
.tabCk {
  width: 100%;
}
.tabTit {
  @include wh(100%, 100px);
  @include flex(row, inherit, inherit)
}
.tabEvery {
  @include flexOne();
  text-align: center;
  line-height: 100px;
  box-shadow: inset 0 -2px 0 0 $color-box-shadow;
}
.tabEvery span {
  display: inline-block;
  padding: 0 38px;
  height: 98px;
}
.tabEvery span.actives {
  border-bottom: 2px solid $color-text-checked;
}
</style>
