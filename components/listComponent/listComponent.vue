<template>
  <div class="lists">
    <ListX
     v-if="listType"
     :listdata="listdata"
     :isShows="isCheckd"
     :getCheckData="getCheckData"
    >
      <slot name="XrightDown"></slot>
      <slot name="XrightTop" slot="topRight"></slot>
    </ListX>
    <ListY v-if="!listType" :listdata="listdata">
      <slot name="YrightDown"></slot>
    </ListY>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    listType: {
      type: Boolean,
      default: true
    },
    listdata: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    isCheckd: {
      type: Boolean,
      default: false
    },
    getCheckData: {
      type: Function
    }
  }
}
</script>
<style scoped>

</style>
