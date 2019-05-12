<template>
  <div>
    <TopAddress />
    <StoreTitle />
    <Banner
     :loop=true
     :autoplay=true
     :pagination="this.pagination"
    >
      <SwiperIn
       :imgData="imgData"
      />
    </Banner>
    <Button
     :btnType="btnType"
     :btnClick="btnClick"
    >
      <i class="iconfont btnIcon">&#xe673;</i>
      <p class="iconText">扫一扫</p>
    </Button>
    <Alerts
     :isShowAlert.sync="isShowAlert"
     :iconType="iconType"
     :titles="titles"
     :textCen="textCen"
     :buttonType="buttonType"
     :oneBtnText="oneBtnText"
     :buttonClick="buttonClick"
    >
    <!-- <div class="iptbox">
      <div class="prices">￥</div>
      <input type="text" placeholder="请输入退款金额" class="moneyIpt">
    </div> -->
    <!-- <div class="RQcodeBox">
      <img src="@/assets/img/RQcode.png" alt="">
    </div> -->
    </Alerts>
    <TabCheck
     :tabTitle="tabTitle"
     :clickCheck="clickCheck"
    >
      <!-- <router-view></router-view> -->
      <Lists
       :listType="listType"
       :listdata="listdata"
       :isCheckd="isCheckd"
       :getCheckData="getCheckData"
      >
        <span class="addCar" slot="XrightDown">+</span>
        <!-- <span class="addCar" slot="XrightTop">+</span> -->
        <span class="addCar" slot="YrightDown">+</span>
      </Lists>
    </TabCheck>
  </div>
</template>

<script>
import TopAddress from './components/address'
import StoreTitle from './components/storeTitle'
export default {
  name: 'HelloWorld',
  components: {
    TopAddress,
    StoreTitle
  },
  data () {
    return {
      isShowAlert: false,
      listType: true,
      btnType: 'bnobg',
      iconType: 'success',
      textCen: '付款成功,欢迎下次光临！',
      oneBtnText: '回到首页',
      isCheckd: false,
      buttonType: 'oneBtn',
      titles: '支付成功',
      imgData: [
        'http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png',
        'http://www.ysc66.com/Public/Home/images/infomation/banner.png',
        'http://www.ysc66.com/Uploads//banner/2017-11-10/5a054c1c9376b_1920x500.png',
        'http://www.ysc66.com/Uploads//banner/2017-12-25/5a40b29eae795_1920x500.png'
      ],
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      tabTitle: [
        {
          id: 'hotShop',
          url: 'hotShop',
          name: '热卖商品'
        },
        {
          id: 'storeRecommend',
          url: 'storeRecommend',
          name: '店家推荐'
        },
        {
          id: 'promotion',
          url: 'promotion',
          name: '跳楼促销'
        }
      ],
      listdata: [
        {
          id: 'sdhfg',
          name: '123',
          title: '猫掌柜梅花软糖包邮糖果混合口味喜糖批发零食果汁qq糖1000g',
          price: 789,
          type: false,
          url: 'sdf/sdfsd/sdf'
        },
        {
          id: 'sdgs',
          name: '123',
          title: '456',
          price: 789,
          type: false,
          url: 'sdf/sdfsd/sdf'
        },
        {
          id: 'sdgsfdgs',
          name: '123',
          title: '456',
          price: 789,
          type: false,
          url: 'sdf/sdfsd/sdf'
        },
        {
          id: 'gfhfg',
          name: '123',
          title: '456',
          price: 789,
          type: false,
          url: 'sdf/sdfsd/sdf'
        },
        {
          id: 'dfhfg',
          name: '123',
          title: '456',
          price: 789,
          type: false,
          url: 'sdf/sdfsd/sdf'
        }
      ]
    }
  },
  methods: {
    getCheckData (checkData) {
      console.log(checkData)
    },
    clickCheck (tabData) {
      console.log(tabData)
    },
    buttonClick (btnData) {
      console.log(btnData)
    },
    btnClick (btnData) {
      this.listType = !this.listType
    }
  }
}
</script>

<style scoped lang="scss">
.iptbox {
  @include wh(480px, 80px);
  @include flex(row, flex-start, center);
  background: $color-box-shadow;
  border-radius: 4px;
  margin-bottom: 40px;
}
.prices {
  width: 60px;
  font-size: $text-size-lxx;
  color: $color-text-default;
  text-align: center;
  line-height: 80px;
}
.moneyIpt {
  @include wh(224px, 44px);
  background: transparent;
}
.RQcodeBox img{
  @include wh(380px, 380px);
  margin-top: 20px;
}
.btnIcon {
  font-size: 100px;
  color: #fff;
}
.iconText {
  margin-top: 20px;
  font-size: 32px;
  color: #fff;
}
</style>
