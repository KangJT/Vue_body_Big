<template>
  <div class="loginBox">
    <div class="appLogo">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="">
      </div>
    </div>
    <div class="appLogin">
      <div class="iptBox userName">
        <i class="iconfont">&#xe611;</i>
        <input
         v-model="phoneNum"
         type="text"
         placeholder="请输入手机号"
         @change="changePhone"
        >
      </div>
      <div class="iptBox password">
        <i class="iconfont">&#xe672;</i>
        <input
         v-model="passwordNum"
         type="password"
         placeholder="请输入登录密码"
         @change="changePassWord"
        >
      </div>
      <p>忘记密码？</p>
      <button class="loginIn" @click="clickLogin">登录</button>
      <button class="newUser">注册</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      phoneNum: null,
      passwordNum: null
    }
  },
  methods: {
    changePhone (e) {
      this.phoneNum = e.target.value
    },
    changePassWord (e) {
      this.passwordNum = e.target.value
    },
    clickLogin () {
      this.loginIn({username: this.phoneNum, password: this.passwordNum})
    },
    ...mapActions({
      loginIn: 'login/loginIn'
    })
  }
}
</script>
<style scoped lang='scss'>
.loginBox {
  @include wh(100%, 100%);
  background: #FCFAFA;
  @include flex(column, inherit, inherit)
}
.appLogo {
  flex: 3;
  @include flex(row, center, flex-end)
}
.logo {
  @include wh(160px, 160px);
  background: $color-type-style;
  border-radius: 10px;
}
img {
  @include wh(100%, 100%);
}

.appLogin {
  flex: 7;
  @include flex(column, inherit, center);
  margin-top: 40px;
}
.iptBox {
  @include wh(90%, 100px);
  margin-top: 30px;
  border-bottom: 2px solid #eee;
  @include flex(row, inherit, center);
}
.iptBox i {
  font-size: $icon-size-m;
  margin: 0 14px;
  color: $color-type-style;
}
.iptBox input {
  background: transparent;
  color: $color-type-style;
  margin-left: 6px;
  text-shadow: 0px 0px 1px $color-type-style;
  line-height: 40px;
}
.appLogin p {
  font-size: $text-size-lx;
  width: 90%;
  text-align: right;
  color: $color-type-style;
  text-shadow: 0px 0px 1px $color-type-style;
  margin-top: 26px;
}
.appLogin button {
  @include wh(90%, 90px);
  line-height: 90px;
  border-radius: 10px;
  margin-top: 26px;
  border: 1px solid $color-type-style;
  font-size: $text-size-lxx;
}
.loginIn {
  background: $color-type-style;
  color: $color-background-default;
}
.newUser {
  background: transparent;
  color: $color-type-style
}
</style>
