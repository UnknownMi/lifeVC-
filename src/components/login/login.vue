<template>
  <div class="register-wrap">
    <div class="register-header">
      <div class="acct-top-back" @click="jumpback"></div>
      <img
        src="data:image/png;base64,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"
        alt="" class="acc-top-show">
    </div>
    <div class="bg-wrap">
      <div class="login-content">
        <h1>老用户登录</h1>
        <div id="wrap">
          <form id="tellogin-form">
            <ul class="fm_list">
              <li>
                <input id="txtMobile" type="tel" maxlength="11" v-model="phone"
                       placeholder="请输入手机号" required="required" class="field_ipt">
                <a class="fidld_skip" @click="reqCord">获取验证码</a>
              </li>
              <li>
                <input type="text" placeholder="请输入手机验证码" v-model="smscode"
                       maxlength="10" id="regSmsCaptcha" required="required"
                       class="field_ipt">
              </li>
            </ul>
            <div class="set_link">
              <p>
                遇到问题？请<a href="javascript:;">联系客服</a>
              </p>
              <a>
                <b></b>
                <span>账号密码登陆</span>
              </a>
            </div>
            <input type="button" value="登录" class="btn_login" @click="login">
            <input type="button" value="注册" class="btn_regisiter" @click="routeChange('register')">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        phone: '',
        smscode: '',
        lastCode: ''
      }
    },
    methods: {
      jumpback () {
        history.back(-1)
      },
      routeChange (hash) {
        this.$router.push('/' + hash)
      },
      reqCord () {
        var phone = this.phone
        this.$ajax({
          method: 'get',
          url: 'http://192.168.21.66:3000/smscheck',
          params: {
            phone: phone
          }
        })
          .then((response) => {
            this.lastCode = response.data
            console.log(response.data)
          }, (response) => {
            console.log('errorE')
          })
      },
      login () {
        var phone = this.phone
        var smscode = this.smscode
        console.log(smscode, this.lastCode)
        if (+smscode === this.lastCode) {
          this.$ajax({
            method: 'get',
            url: 'http://192.168.21.66:3000/login',
            params: {
              phone
            }
          })
            .then((response) => {
              console.log(response.data)
            }, (response) => {
              console.log('errorE')
            })
        } else {
          console.log('验证码错误')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%

  .register-wrap
    width 100%
    height 100%
    overflow hidden
    display flex
    flex-direction column
    input
      outline none
      border 0
      font-family Microsoft YaHei,sans-serif

  .register-header
    width 100%
    height 11.8rem
    background: #fff;
    position relative
    flex-grow 0
    .acct-top-back
      width 26px
      height 26px
      display block
      border-radius 50%
      position absolute
      left 1.25rem
      top 46px
      border 1px solid #3aad36
      &:after
        content ""
        width: 14px
        height: 14px
        display block
        border-left 1px solid #3aad36
        border-top 1px solid #3aad36
        position absolute
        left 10px
        top 5px
        -webk-o-transform: rotate(-45deg)
        -m-o-transform: rotate(-45deg)
        --o-transform: rotate(-45deg)
        -o-transform: rotate(-45deg)
        transform: rotate(-45deg)
    .acc-top-show
      width: 10rem
      overflow: hidden
      display: block
      position: absolute
      top: 30%
      left: 50%
      margin-left: -5rem

  .bg-wrap
    flex-grow 2
    background: url("./image/login-big-bg.jpg") no-repeat;
    background-size: 100%;
    background-position: bottom;
    .login-content
      width 100%
      height 27rem
      box-sizing border-box
      h1
        font-size 20px
        width 100%
        text-align center
        color #037049
        line-height 5.8rem
        box-sizing border-box
        height 7rem

  .fm_list
    li
      width: 90%
      margin: 0 auto
      height: 4.16rem
      border-bottom: 1px solid #dbdbdb
      position: relative

  .field_ipt
    font-size: 16px
    width: 100%
    background: transparent
    position: absolute
    left: 0
    top: 0
    height: 4.2rem
    box-sizing: border-box

  #tellogin-form
    .set_link
      padding: .75rem 0 1.66rem;
      text-align: right;
      height: 4.16rem;
      width: 90%;
      margin: 0 auto;
      font-size: 16px;
      box-sizing: border-box;
      position: relative;
      p
        float: left;
        color: #666;
        font-size: 15px;
        line-height: 1.66rem;
        a
          color: #3ea438;
          text-decoration: underline;
          line-height: 1.66rem;
          letter-spacing: 1px;
          font-size: 15px;
          margin: 0 0 3.33rem;
      a
        color: #3aad36;
        letter-spacing: 1px;
        font-size: 15px;
        margin: 0 0 3.33rem;
        b
          width: 8px;
          height: 8px;
          display: block;
          position: absolute;
          right: 0;
          top: 1.16rem;
          border-top: 1px solid;
          border-right: 1px solid;
          transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -o-transform: rotate(45deg);
        span
          float: right;
          line-height: 1.66rem;
          margin-right: .58rem;

  .fidld_skip
    display: inline-block
    font-size: 16px
    color: #3aad36
    text-decoration: none
    border: 1px solid #3aad36
    border-radius: 4px
    padding: .33rem 1.25rem
    text-align: center
    position: absolute
    right: 0
    top: .83rem
    line-height normal

  #tellogin-form
    .btn_login,.btn_regisiter
      width: 80%;
      overflow: hidden;
      display: block;
      outline: none;
      text-align: center;
      font-size: 19px;
      color: #fff;
      line-height: 3rem;
      letter-spacing: 20px;
      text-indent: 20px;
      box-sizing: border-box;
      padding 0
    .btn_regisiter
      margin: 10px auto 0;
      background-color: #8a8a8a;
      border: 1px solid #8a8a8a;
      border-radius: 5px;
      opacity: .5;
    .btn_login
      margin: 0 auto 1.25rem;
      background-color: #3aad36;
      border: 1px solid #3aad36;
      border-radius: 5px
</style>
