<template>
    <div>
      <header>
        <div class="header-content">
          <p class="header-title">账户中心</p>
          <a href="javascript:;" class="editcart">设置</a>
        </div>
      </header>

      <div class="uscenter_scroll">
        <scroller :on-refresh="refresh">
          <div class="uscenter-cont">
            <div class="page-loadmore-wrap">
              <div class="page-loadmore">
                <div class="acct-user-wrap">
                  <div class="acct-nolog">
                    <span class="state">您还未登录</span>
                    <div class="btn-entry">
                      <a href="#/login">登录</a>
                      <span class="split"></span>
                      <a href="#/register">注册</a>
                    </div>
                  </div>
                </div>
                <div class="dashboard-order life-dashboard-order">
                  <ul>
                    <li>
                      <!--<a href="#/usercenter/userorder/waittoypay">-->
                      <a href="javascript:;">
                                  <span class="item-ico">
                                       <span id="ico1"></span>
                                  </span>
                        <span class="item-title">待支付</span>
                      </a>
                    </li>
                    <li>
                      <!--<a href="#/usercenter/userorder/packing">-->
                      <a href="javascript:;">
                                  <span class="item-ico">
                                       <span id="ico2"></span>
                                  </span>
                        <span class="item-title">待发货</span>
                      </a>
                    </li>
                    <li>
                      <!--<a href="#/usercenter/userorder/shipped">-->
                      <a href="javascript:;">
                                  <span class="item-ico">
                                       <span id="ico3"></span>
                                  </span>
                        <span class="item-title">待收货</span>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <!--<a href="#/usercenter/userorder/waittocomment">-->
                      <a href="javascript:;">
                                  <span class="item-ico">
                                       <span id="ico4"></span>
                                  </span>
                        <span class="item-title">待评论</span>
                      </a>
                    </li>
                    <li>
                      <!--<a href="#/usercenter/userorder/reply">-->
                      <a href="javascript:;">
                                  <span class="item-ico">
                                       <span id="ico5"></span>
                                  </span>
                        <span class="item-title">回复</span>
                      </a>
                    </li>
                    <li>
                      <!--<a href="#/usercenter/returnorder">-->
                      <a href="javascript:;">
                                  <span class="item-ico">
                                      <span id="ico6"></span>
                                  </span>
                        <span class="item-title">退换货</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dashboard">
                  <ul>
                    <li>
                      <a>
                        <img src="./image/ic_list_cm.png" class="item-i">
                        <span class="item-title">我的订单</span>
                        <span class="arr-r"></span>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a>
                        <img src="./image/ic_coupon_cm.png" class="item-i">
                        <span class="item-title">我的优惠券</span>
                        <span class="arr-r"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src="./image/ic_pig_cm.png" class="item-i">
                        <span class="item-title">现金积分</span>
                        <span class="arr-r"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src="./image/ic_invoice.png" class="item-i">
                        <span class="item-title">关于发票</span>
                        <span class="arr-r"></span>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a>
                        <img src="./image/i_gear_cm.png" class="item-i">
                        <span class="item-title">密码和登录信息</span>
                        <span class="arr-r"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src="./image/i_dialoguebubble3_cm.png" class="item-i">
                        <span class="item-title">老会员建议</span>
                        <span class="arr-r"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src="./image/i_customerservice_cm.png" class="item-i">
                        <span class="item-title">客户服务</span>
                        <span class="arr-r"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src="./image/ic_currentnode_cm.png" class="item-i">
                        <span class="item-title">地址管理</span>
                        <span class="arr-r"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src="./image/sms_cm.png" class="item-i">
                        <span class="item-title">手机验证</span>
                        <span class="arr-r"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </scroller>
      </div>

      <v-footer></v-footer>
    </div>
</template>

<script>
  import footer from '../footer/footer.vue'

  export default {
    methods: {
      refresh () {

      }
    },
    components: {
      'v-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //头部样式
  header
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    margin: 0 auto;

  .header-content
    width: 100%;
    margin: 0 auto;
    .header-title
      margin: 0 auto;
      line-height: 4rem;
      font-size: 2rem;
      text-align: center;
      color: #fff;
      width: 80%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    .editcart
      font-size 1.8rem
      color: #fff
      line-height 4rem
      margin-right 2%
      position: absolute
      right 2%
      top 0
      z-index 9

  //内容区
  .uscenter_scroll
    ._v-container
          margin-top: 4rem

  .uscenter-cont
    width 100%
    padding-bottom 4.5rem
    color: #2e2e2e

  .loadmore-top
    margin-top -50px
    text-align center
    height 50px
    line-height 50px
    .loadmore-top-text
      vertical-align middle

  .acct-user-wrap
    width 100%
    height 9rem
    background: url("./image/background.png");
    background-size: 100% 100%;
    .acct-nolog
      width 100%
      text-align center
      margin 0 auto
      padding 0.5rem 0 0
      .state
        font-size 1.6rem
        line-height 3rem
        display: block
        color: #222
      .btn-entry
        display: inline-block
        color: #009c42
        padding 0 10px
        height 3rem
        background: hsla(0,0%,100%,0.4);
        border 1px solid #009c42
        border-radius 1.5rem
        margin 0.5rem auto 0
        text-align center
        font-size 1.6rem
        line-height 3rem
        a
          margin 0
          display inline-block
          color: #009c42
          padding 0 10px
        .split
          width 1px
          height 1.2rem
          display inline-block
          border-left 1px solid #009c42

  //大量图标区域
  .dashboard-order
    width: 100%
    background-color: #fff
    border-top: 1px solid #eee
    margin: 0 auto
    ul
      width: 100%
      height: 5rem
      overflow: hidden
      border-bottom: 1px solid #eee
      li
        width: 33%
        height: 2.5rem
        float: left
        border-right: 1px solid #dedede
        line-height: 2rem
        margin: 1.5rem 0 0
        &:last-child
          border 0
        a
          display block
          text-align center
          color: #585858
          .item-title
            display inline-block
            vertical-align 56%
            font-size 1.2rem
            color #585858
            line-height 2.5rem
            text-decoration none
          .item-ico
            display inline-block
            span#ico1, span#ico2, span#ico4, span#ico5
              display: inline-block
              height: 3rem
              width: 3.5rem
              background-repeat: no-repeat
              background-size: 99% 120%
            span#ico1
              background-position: -5px -7px
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAE+klEQVR42u2dW4hVVRjHx2xMI+hiUlb4UFEGKTFSYgURVPQQgdAxCKKZOWfm7JlxqgkxH5QRMXypl6AC6cVeur2EdqXbS4xJiZRGaVLK4DxEMYWo1Wj2/2AR02LPOXvPntta+/eDj+OMe87e6//9z7rtfdZqaQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAUDAwOLurq6Hlbs6u7uHlb8bD+jTMQoyZfW6/VHlei39e+TivNe/NLf338RSsWV9CuV8E69vqv4MyXpflRQLXCSJLlWSV+vZH6qOJsh6ePjExQMkJ6enuuVvI2KvYp/Mib7dzUJb3q/s7+9AUUdvb29l0ikZyTKkOJMzk/TXIy/FbtVQ6yzjqBrJr7O+R4nFG9Ilwdjbz/vdYU9H0HsVdJ7Ozo6lvjl1O+fKvC+n9VqteuiS75EuU+F+yvwpP+o2FqtVm9sVFYl8CodN1bgPMNRNRtqTy+3IVEBQaypGJ2GaHpuGfdXVc0vKdaoKPNyGP69gmY7FM0QUoXZklLA3fqkrJyFa2lT7FAcbWK4t2wiR6+tk6zx1nnveXSiD4eOvVP//36K+dbHYoBvvILtyvNpmoJh3K067zZXhU+U9HO6rs/1WrMJnqmYGbRRwfhzyPCrJjq+UqnM1/m/8K7py1gMMDYu+afb29svm8Gkf9+kqv1OsUmxbBr6Pa9653q+yfFr/RFGLAaYEVerOr1ZbfXmDEkfkdgvKG6b5o7vPd55jzeq+az3719rjAb4aZqS/m2TpNtc/WuKB6y6naGiz7ObQt51rG40R1IGA1i0FZ2lU9KfzZB0m7b9QPGYiTtLZd/u9X9ezKNVlAaQCPv0evEkk55lls2OeVpJv3oOzH/c5M/6DQ4OXlBqA7gYsuGPOoQLG/zdMh2zIWPSj+nY5/S6fA5Ogu3zrvXurFpZh3myQ9G5bgAie4y5eydPNKo9MEA54sO8zScGiC9eD90ATyr2u1upJHQSkSTJHcEaoAUyYR1kmz6WZh+lmOBlDFAS1PG70L9PoJ8PYoAS4Z6n+N8dSwxQItwzFWHqiAFKriMGwAAYAANgAAyAATAABsAAGAADAAYADAAYADAAYADAAGWkUqkskB4d7oGP0bxPBWGAgHFP+hwu8lgYBgiUJEnukg6nij4XiAECpFqtXmFfTp2KB0MxQJgduR0pX5X7QfFQs3UJMED4yW+1JWf8lUP6+voWMwooAbbOUMqnfy3DwJKgZNc9LX7Ls1YBBgi/CRj0tPg4j1YYIDIDuMWyMECJDLAFA5S7E5g0W0kcA8RtgPu9GuCPPKuBYoDAcbOA5zw9ahigXP2AIU+P0axL5mKAOOYCHk+Z1z/lVjVd0Wg6GANEgH3XXxoc4GZQuZuB5QWXz8cAEXQIb3ELVWOAEtcEdnewnUfCgGEgYADAAIABAAMABgAMABgA4jRA8FugzI6GrSEb4Kx38UtJaW4Nl/o7ooV08UfGX3y9Xn+ElObDNPMMcCQkA+z0t42bwc0bg8ftK+zvPLYzJPeuSdvxAhNkS75p5evntrMPqg3bk2KCrxSVzs7Oa2y1DNL9X9IXmCamjdPI121PqJ2YETZ8KhwjwXai3ZbumKBA8k3D4Icz6tC8QzLzhdMsnuGzCnS74hW3UNIYSU7dLvawaWRa0TMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACApvwLaJKdSOdIaK0AAAAASUVORK5CYII=')
            span#ico2
              background-position: 2px -7px;
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABu0lEQVR42u3aP0rDYBjA4c4dPEsvoF4mf6bQOUMgRwjkIrmAk3PAWchZPvNJBweRtlaTfH0eCMGaqO/rr1Cqux0AAAAAAAAAAAAAAMAXRVEEx/WHAAQgAAEIQACpBLDE9/yN//75BSAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIIBtBbDEccsA/EuYAAQgAAEIQADrfcGz9heBd/VLFoAABCAAAQhAAAIQgAAEIAABCEAAAlgqgGmawjAMoeu60DRNqOv68xw/jo/HzwsgwQDGcQxt25719mu8Ll4vgEQC6Pv+qvfhv7tPABsMYG1/nBHA8gG85nl+zLLscT4fTudjfFwAaQfwXpbl00/3ziE8x+sEkF4AL1VVPZxzf7wuXi+ARAKYn9Vv83l/4dfYn+4TwNYCMLdFmNsizG0R5rYIc1uEuS3C3BZhboswt0WY2yLMbRHmtghzW4S5LcLcFmFuizC3RZjbIsxtEea2CHNbhLktwtwWYW6LMLdFmNsizG0R5rYIc1uEuS3C3H+6iHs9BCAAAQhAAAIAAAAAAAAAAAAAAAAAuNgHVBw8ZCHwHjsAAAAASUVORK5CYII=');
            span#ico3
              display: inline-block;
              height: 3rem;
              width: 3.7rem;
              background-position: -2px -7px;
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFO0lEQVR42u2dz2scZRjHk1qrRqQUAioiiAjWUmhBwYN4TPBgTxJ6SSBks5ndLUFCeyshBwNVxJOQv0BQBEFbTCX1UJAUNBWjgqKoSDz0UOjaloT+WLs+TzOXnbw72dnOvPPM7ucDDyndmXnf7/t+3x8z887MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAuzMzMjEusSTQkmj0YjVDfOLW9s/KXerTS28UStd7a8pt9GPQEoQHW+tQAa9T+tgFaxvwgCN7oRZ2qKzonoPa3DdDSMnpY6mAfacUA/a6VQsEAFAoGoFAwAIWCASgUDEChYAAKpZhagyA4Lpm9nfJl0LsSP0osYADDlEqlFySjN3xeI8cARpicnHxUMvmD75skGMBOZj/M4y4ZBjBAuVx+y1E5F8fGxh560GMvLCzsqdVqz8rxFiXuYQBjVCqV5yRz9Uhmr0o8nYHR3sUAhpAWvk8q5dtIRu9ldY8+NBsGMHTK976j638vq/R0OMAAdsb9Nx1j8iWJh5kY9bhW6YqfCcf5RDN2Mc11+XtWeo5jGKCgWqUb3iuZ+SaFU7jzEsMYoGBapRW/k+J5/C9JTYAB8p30jUhG/kv5Ys55DFAArbVa7Slp/Vcc4/oHnew/MTHxuGw/KvFT9BhJ5gQYIJ9xX0+/vna03u9nZ2cfSShqv5jm58hxvsAAhrVKhZ12VP5NvfvXpbDRyLHqGMCo1unp6dddT+CKKSYeQNhQt+IwgN8MDEv84xizP8pLHAbwx6C08i8dXf8fU1NTT2CAHjeAJHjSUfm3ZUh4OU9xGMBPwq9K3HGM+6fyFocBMqZarR6QxP5ytP6vdFjAAD1uAEnoM0fLvyJd/5MWxGGAbBM84Wj5usBjJOULS3uj6XS6fAwDZHex56gkcsvHAg855sFIGnfoAXLWKgn86qj879Je4KEtXcz2eSSdyxggfwPsWLwhE8LnUzz+UKVSeU3+XnCk9TYGMGYAj/H73NzcYxigPw1wTXqFw4W5OoYBUg192PNgYa6OYYBU4oaM9yv61ks9FSzMxZF+NACFggEoFAyAATAABsAAGAADYAAMgAEwAAbAABgAA8QSBMGh8H0+q5FXx9TD9wcs6jZFNEDW2gptgFKp9JLst5zgsvCy7lMEA/jSVlgDlMvlWpvVRLvFLd3XsgF8aiukAWTbMyncJDpjsVB8azNlAH3zZ4etY4fo+fn55srKSnNjY6O5ubl5P/Tf+n/6W5uCqu6Wni4cie7X7V1Fa9osGGAz8vzfKx2Miy1dY7VavV8QjUaj2Q79TbfRbaNd5m7jpubJR6Hkoc2CAS5GEjw7EPMgSHRSpKLX19ebnaLbOgpqOSaL+hm1cz4KJQdtJgww7ei6PhEhL0a72fB0qGVbdX5SdB/Hk8ctp1G6iljzIL996upe034ppU9tcWb3/uFIfeunJPJbNxMdHfviusa4LjNm3DQRhrRl/+lYcd0RSejfpJnrpoXEtRRLYUibn49H6+PfktjfSTKns+Bu0X0TvmzyT/n7sS8D+NRm5vPx+kYvfRRcXwIVfq4lNoN6KtQtum8HBaCPql8O31kwFM5ZxsMviTeyNIAHbe2iEeqz99n4rAsJbfbvUtUz7CbraLNvgEsZTpRW0WbfAIsZniotos04Ri6WoC3nlmLicinacsLKDRO05dtSqp3cMt3a2srslina8i+oXBdNoM1Oa+lq2ZT11tHL2rIYN70vnESbzVPEdkunV9NeOo02AAAAAAAAAAAAAAAAAAAAAAAAAOgn/ge2oJ5yfduGOgAAAABJRU5ErkJggg==');
              background-repeat: no-repeat;
              background-size: 99% 120%;
            span#ico4
              background-position: -6px -7px;
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAQlBMVEUAAABoaGhmZmZmZmZmZmZnZ2doaGhgYGBmZmZmZmZmZmZlZWVmZmZmZmZlZWVmZmZmZmZmZmZmZmZlZWVjY2NmZmaV7q++AAAAFXRSTlMAH+vw+VQWBohR1oGX4dLDakCuLwyX8IFsAAABX0lEQVR42u3ZbW7CQAyEYXuz5JtAgLn/VZtEbaWorRTZi6zCPAdoX5EwP7AQERERERHR3+q2h1ff1mLVVSih6sSmyygj2wrqCqVUtRgMWLTaiItuf2YQg379/+LXrm+iGGQAKn4KIIsBFo34NVhYA6QEBjCAAQx4qYBTwgHp9LSAhEPS6waEP4Lwl5ABDGBA+A6EL2F4QPgjCH8JGcAABoQHhA9R+BSHB4Q/gvCXkAEMYMD7BRT7uf5fHiwmAKP4jQCmsKNVoy0WQ5mznezNyXC2cx0uZeeaDYdL1+m22n22o+F0azle598D6guOydvx2k/3AfczFvkqJv6AU8YizWLiD2ixmlQs/AGPG1a3h1j4A7SHYVrKBczJ/M3yB3yvz/kuBv6Ar/W51GLhD/hcn7ERC39A9q2PPwD+9fEHTCoxFAHr8zNgkDDqWx8/3dYnkK7rE0nHRoiIiIiI6Fk+AGIffV7bGuevAAAAAElFTkSuQmCC');
            span#ico5
              background-position: -6px -4px;
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAArlBMVEUAAABoaGhmZmZmZmZmZmZnZ2dmZmZmZmZmZmZlZWVnZ2dmZmZqampmZmZjY2NmZmZlZWVmZmZpaWlmZmZmZmZlZWVdXV1mZmZmZmZlZWVmZmZmZmZmZmZmZmZmZmZmZmZmZmZlZWVlZWVmZmZoaGhmZmb///9ycnLNzc319fV6enqpqamRkZGMjIz8/Pzy8vLr6+uVlZVsbGzl5eXh4eHJycm4uLiLi4t/f39zc3NcUWXvAAAAJXRSTlMAIOz87xZf1v7zVFEDiAbChOoQnn0wC+TdzpaPbkMjs6tlWT0dvkBlPwAAAhVJREFUeNrt2m1zmkAUhuEDSIEEFImamDSmTfNAfGmapu///4916TCzsZXOsmcNxjnXd4fb2d2jzkpCCCGEEOLQhVkUgyeOspBsnSZwITm1fX4ANwK7gnAAVwYhWcgBxJmXEkd6l8cAcrIQAbgivgxARBYCAB7xeQACsgAlJb4Uim0AuSABEiABEnBMASc+DPgnewvwYcQ/3oDel6D3TSgBO5WmJOAYAnbOgbK2XFcw5F8Wbifhn+f/RAdR4TxgjU6unC/BL3Qydr4JoXwqjSyh7CWgNCQBEiABUJwOopcM8PEKAu4r7Fbdv8wSVGhT7WkTHlrAf5bgCI6hBEjAqzgFbudA2mdAAGDR0xLoK5s+N+FEX1o5D7C8tqNt1z7j+4DVxSVteRuAEWBzdZvQM8MzgBFgfnkd6IABaeEIrIDOvO2A6TmU4D0pfQTcJlDGH+h5wGNp5JEfkOYxlPmdPoYrtNo0P9s/QrtgBRQ3qL2bkQ74jnarr/8ETDgBiwhKPNkaRA8/0O7p218BoyEj4Nrf+aeIWT5Gu/VDWW7QGOczsg5ops/FlEzo47pZlp8BvKGGbUAzfUYFGWtesvriIqB5O5fmS6hH9tOKHxDo6WNOf2jxA9BMn84WkbuAuUcWihtHAfX0sZJm7IBm+li7TdgB9fRhmJ4zA+rpwxLOeQGjkJiGZ5yAevqwhSSEEEIIIYQQQhya34kz7J0a5iSwAAAAAElFTkSuQmCC');
            span#ico6
              display: inline-block;
              height: 3rem;
              width: 3.5rem;
              background-position: -6px -7px;
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAhFBMVEUAAABmZmZmZmZmZmZmZmZlZWVmZmZqampmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlZWVmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZoaGhmZmZmZmZmZmZmZmZlZWVmZmZlZWVmZmZmZmZlZWVmZmZnZ2dgYGBmZmZmZmacQOLdAAAAK3RSTlMAnvp/j2wVCCDmQ/Ni0Fvvsnhzvqo928qJNSgbDrfrUuHFTQSWgxLVMRCkl3dQWAAABHNJREFUeNrtmml3qjAQhgdk3wREcEFUXKrN//9/t8koFxvBJmDvuefk+VYaYdZ3RlpQKBQKhUKhUCgUCsX/yipaZIWrky+m+UxLvSv8HucgqwhHuJjDb3DYbnTSgbtYwZu5Ji7pZePBG7GTKWmoZtrEDLZRkC6ysBWU/fsysd01sdYi59G0ZTJrjMjW8A6smCC+Nu+ozeJ+IoDxqaub82kJnSwzgsRnGJkTYUxT+4U+3OK0u4xbfTfPNAte4uWYhhrGo9xj9L2fWXskFD0Y7/kFtrj143bBbjXHij/6bxwEJgWmIYJRyCTcsQqWBW+8+jel0jZ1Ruh/yXSWIRuR9mD9q1j+QZy1i58cSMzq/wASLNlwmA+cP6z/LZDCpB/OByXBZvNPupY39NMJDCBh+vtNak0KH5SIXq4fy8CnmmyBNNcpbaVvN7jgVOAyTp5kPKXXFgMDkMI3mNTrK3iEyWX2LIW+9Gg+uLQCba4zmdLHT+TC53QnGFQFWwwAh8lH+/BBL014H2gIdkOK2C8B4Z5WcJ7ubOBIB7TRWcdi4/EIZdvKtYsXeCy8iRQBBrpTH/PDY7VuOo9W8mPYhac4TGWDdlliX/BE9OQSZKh6gnci7QYxetr9rMv2wapvpylZ0pNWPNwSnlNgzwqDsXN6fzu9AuUT89GBgZkUZ8FVD698p0abi35HLMkanPVMe3IfNHF/mV1kt4LiRQNrWHloSc/BUnY/dlFbO8HeW8MGJ2Y3Pgq6MPqrXRRn7fLlzppjsQiDpd2DTe/s0wr4OEAPoeRu2qg7h+UgJrkROMh1VAO6a2dGOpiMbkAwhgEfkgZMsXiFDJBop/7iXcgawLeTKPiYDPoxnomQczTasrCmZ2oQBZUuFDYAc77/vj6tQBTUGd0WN8BG7efuIwpavpSIwOZxPcswkuJcceUQN2COlrcXqyPIEHbN42Byhy0FYfPj/O+qED9M4whkNxL9LNaGfNmdhPYRPpSBuAEYu8+WnOxBBpSwQsaALY2dc/OiLahltD2I5KCjDxLtDvuOlmt36rb8Y+FluLUwrEmFl4UW80ysC5Dg/lhHbwpybfj0dCX8imUlbgB+KTbui6NHnfnUCSMW1qJYwgAwcWVe6ahC85gg00UJIuzRAWED8OvyCUO4rfcEcZOrTCfmtrgBkFB32c7mfxAkD2zJF9VHCQPKKXmk2IIMa58FUdwAmIz058SAlU5XJ5izLxJ4huWThuwy9GVxbsmMEkQ/OjCE845lsBTPno59t4aBXHxJC06070oYTs1cCcU98WobRiFAFVnCP8PEajJ/mv3Z6LZGOnbz+keHK1LA2HgobH76Mqsrpv8mjI0TEsYuOPQe0zBWlQ1jYxsE2aVW5+zK9NsZD97APCeIHkdn4LiccnLjeIW3YCeNvuuFEV3Kpuy9tPWPPfs39qu18EkLPw/D8MPVSYuwhrdyTnakGz324P14WkWeUqRr+CWWSew+uh4eIwt+F2sepSfji4lZr2xQKBQKhUKhUCgU/y1/ABsW/A5NX6vhAAAAAElFTkSuQmCC');
              background-repeat: no-repeat;
              background-size: 99% 120%;

  .dashboard
    ul
      margin-bottom: 1rem
      li
        width 100%
        height 5rem
        background-color: #fff;
        border-bottom 1px solid #eee
        border-top 1px solid #eee
        margin -1px auto 0
        a
          display block
          width 100%
          height 5rem
          .item-i
            width 2.5rem
            display inline-block
            float left
            margin 1.3rem 1.1rem 0
          .item-title
            display inline-block
            line-height 5rem
            float left
            vertical-align 0
            font-size 1.4rem
            color #585858
          .arr-r
            width 10px
            height 10px
            display inline-block
            float right
            border-right: 2px solid #bbb
            border-top: 2px solid #bbb
            margin: 25px 10px 0 0
            transform rotate(45deg)
</style>
