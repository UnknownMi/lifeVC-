<template>
  <div>
    <div class="toTop"></div>
    <header>
      <div class="header-content">
            <span class="btn-back">
                <label class="leftback-img"></label>
            </span>
        <p class="header-title">商品介绍</p>
      </div>
    </header>

    <div class="view-cont">
      <dl id="itemdl" class="item-intro">
        <dd class="page-swipe">
          <img src="./image/swipe.jpg" alt="">
        </dd>
        <dd class="item-price pd05">
          <div class="title">软木防烫垫</div>
          <p class="des">小心，别烫坏了桌面</p>
          <div class="price">
            <span class="acttag" style="display: none;"></span>
            <div class="normalprice" style="display: none;">
              ￥
              <span class="lager" style="margin-left: -5px;">12</span><!--
                    --></div>
            <div class="newprice">
              ￥<span class="lager">9 </span>
              <span class="oldprice">￥<span class="lager">12</span><span class="delline"></span></span>
            </div>
            <div class="lable-wrap">
              <span class="promo-lable" style="color: rgb(0, 0, 0); background: rgb(254, 209, 9);">新品首发优惠</span>
              <span class="promo-lable" style="color: rgb(253, 238, 238); background: rgb(205, 6, 15);">新</span>
            </div>
          </div>
          <div class="act-end-tip">
            活动结束仅剩0天 7时 31分 58 秒
          </div>
        </dd>
        <dd id="promosWrap">
          <div class="promo-item">
            <span class="tag-promo">免费</span>
            想免费获得本产品？点这里
            <i class="icon-rt"></i>
          </div>
        </dd>
      </dl>
    </div>

    <footer id="item-footer">
      <div class="f-service">
        <i class="ico ico-cusser"></i>
        <span>客服</span>
      </div>
      <a href="#/" class="f-service f-home">
        <i class="ico ico-home"></i>
        <span>首页</span>
      </a>
      <a target="_self" class="f-service f-cart">
        <i class="ico ico-cart-green"></i>
        <span class="cart-num">0</span>
      </a>
      <button class="f-btn-add">加入购物车</button>
    </footer>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    margin: 0 auto;

  .header-content
    width: 100%
    margin: 0 auto
    .header-title
      margin: 0 auto
      line-height: 4rem
      font-size: 2rem
      text-align: center
      color: #fff
      width: 80%
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
    .btn-back
      width: 10%
      height: 3.8rem
      position: absolute
      left: 0
      top: 0
      .leftback-img
        width: 1rem
        height: 2.6rem
        display: block
        float: left
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeAQMAAAAW3KwoAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAADZJREFUCNdjYGA4wMDACMTMDQwM7EAuHxDLALEFEBcA8QMc0lAsAxYDyYHUgNSC9ID04lNwAACHIArVHBwTzAAAAABJRU5ErkJggg==') no-repeat;
        position: absolute
        top: .6rem
        left 30%

  .toTop
    overflow: hidden;
    background-color: #000;
    background: rgba(0,0,0,.8);
    border-radius: 50%;
    color: #fff;
    position: fixed;
    right: 2%;
    bottom: 6.5rem;
    z-index: 99;
    width: 3rem
    height: 3rem
    &:after
      content: "";
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAbBAMAAAAe4sskAAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMAEM+fMO+vj7+AcGCgj1i3AAAAgklEQVQoz3XLoQ3CUBRG4R8CnrABHgEbYECxAAmOJRing1S1aWveUO1tbvKL83rEcZ8Q2/0bVTuXvg6updzqoCQhSALwWQlB92iDEFx0+AYBOEnPIARKQpAEwAQgCYAJgIkBiIEJgAlAEoIkBiR7A5lM0hsgyCAdA4CMy34A0uuuzWaN7VPFy9z3qAAAAABJRU5ErkJggg==');
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: 50%;
      width: 3rem
      height: 3rem
      display block

  //内容区
  .view-cont
    position absolute
    top 4rem
    bottom 4.5rem
    width 100%

  #itemdl
    background-color: #fff;
    border-bottom: 1rem solid #f2f2f2;

  .item-intro
    dd
      background-color: #fff;
    .page-swipe
      img
        width 100%
    .item-price
      padding: 15px 0 10px
      border-bottom: 1px solid #ddd;
      font-size: 1.35em;
      line-height: 2em;
      .title
        padding: 0;
        text-align: center;
        font-size: 20px;
        color: #000;
        line-height: 2.2rem;
      .des
        text-align: center;
        font-size: 16px;
        color: #949494;
      .price
        font-size: 1.6rem;
        color: #c00;
        font-weight: 400;
        line-height: 2.5rem;
        .normalprice
          color: #303030;
          text-align: center;
        .newprice
          text-align: center;
          color: #c00;
          span
            display inline-block
            margin-right 0.5rem
          .large
            font-size 20px
          .oldprice
            color: #000;
            position relative
            .delline
              position: absolute;
              top: 50%;
              left: 0;
              height: 1px;
              width: 100%;
              background: #000;

  .label-wrap
    text-align center
    .promo-lable
      display: inline-block;
      background-color: #c00;
      color: #fff;
      padding: 1px 3px;
      font-size: 12px
      line-height: 13px

  #promosWrap
    padding: 10px 0 10px 15px;
    border-bottom: 1px solid #ddd;

  .promo-item
    padding: 4px 0;
    font-size: 14px;
    position: relative;
    .tag-promo
      display: inline-block;
      height: 20px;
      line-height: 20px;
      background: #cd060f;
      color: #fff;
      padding: 0 2px;
    .icon-rt
      width: 12px;
      height: 28px;
      position: absolute;
      top: 0;
      right: 12px;
      &:after
        content: "";
        width: 8px;
        height: 8px;
        display: block;
        border-style: solid;
        border-width: 2px 2px 0 0;
        border-color: #ccc;
        position: absolute;
        left: -4px;
        top: 50%;
        margin-top: -5px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -o-transform: rotate(45deg);




  //底部选项卡样式
  #item-footer
    position fixed
    bottom 0
    padding: .4rem 0;
    z-index: 1001;
    width 100%
    background: #f8f8f8;
    border-top: .04rem solid #ddd;

  .f-service
    width: 13%;
    height: 4rem;
    overflow: hidden;
    float: left;
    line-height: .1rem;
    font-size: 1.1rem;
    text-align: center;
    color: #333;
    .ico
      width: 100%;
      height: 3rem;
      display: inline-block;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 35%;
      margin-bottom: .4rem;
    .ico-cusser
      margin-top -0.2rem
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUAAABlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWU6s0hZAAAAH3RSTlMA8OAKz8DYrT/4jzPoZkyCXhRVKp+XeB23bjskyIlFbNFoUwAAAp9JREFUSMedVtm2gyAMBEEpxbVa11r+/y8vYVN7VWrnQek5TJMMkyD6EuTxRr+golImjx+IsQQ8L/MGKX9jRoqEgZlf4wlFoSSG5zXiQ1FaRFL1mi4RS8XIEJrV61xZchuejCrE7J4JhHLFmA1/OGGVPZdr4CZTzwQheGWHJz1juY8buoOsdZ53O9FaLI8Qo0Q9U1jST/vV1CbHhltH4I+md+sTb+SCYiue2dLnZJtGRuUWHyIVJqNx7yAjz6DzPYWkkMdTJ3mgGrlbXqbWsDPaxktqdITcyhZRvWjX5pCvCh0j30jsZBAceOTcsel/HkkgzyrUJCbblC3NNYMuddjsny1Zc61XGA2osyqIaUeFYVpyWAKqX3z6ujNT4hO4MIboqqiKq4DdhSlC7Rr6k10aePUybL+f74VvqgrqDRPWSlKfdYO+B5isc+105TqBBiudwBUc7tt7TiR4F4mwXfKE/RxGn0K/BI4PBxZoYosU9jA6eIeIiT0QbE3UWrUap1wc7YBb9XtzhRRWGwHEkJzYqfM2RhVfEakm+psgBlGDRF+blbXQCXD4OQUdm9oahTmP1M5IEmpmoo9h0Z8762HIJGBStgrhA8WBi7r0bQGh9bP3/TKcEJmfcFg7wWsywkg+KVFt58QRI0Ncens8/UZiaJfYnulapfo236Yau2ROxnKzKoQ7cV6rbLjY5WVyqYMAxca1eMH4EUeXxt1lbQ4iWo2qDpLF5T9BZ+BRkNSb03rVYQSm7LdB80Qul+DiVf1N+CzuGqVhyjibnNFaTZO0e+gdc9FExkKDXKOdqF3hF2M9xfYXI6VcQ6gCNgOG7X5cRQ+Yop/fR6SNpAPPQbUi3U6ojED5XDrQ3Ks53gzcnXWbY0OO+la4TXbPaFT6AxWUbJl40nSzAAAAAElFTkSuQmCC');
    .ico-home
      margin-top -0.2rem
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAbFBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaB0FoYAAAAI3RSTlMA+pHrKQbzuxgSC+LezcWqeWtcQDQf2NWyo56ZiYN/Y1BKJXbYS5EAAAEcSURBVEjH7ZPLloIwEESnSaKALxTx/c7//+NU4MyUjCTBzejCWkB3U3WSc0m+XqY0fc5/Fjk/4z9a6Njbbra21tb082dDmIf1I+vjr9aw7ozZ4bWu4v6lgvHkqhMKtYz5rwNrZdHUC7F2cA37585T/nSlS89D/gN2MdLs9QiDgx/nDJ8naeuHTzCaGQ/OqSOZt4e5wzvNOnGu8GlvHpbdY7yqPDgL9lTRifdCnPci3ssjTlX6aJTqL94Eq461H7cew5CQBHF2iXjzO5wbNCHlm1+8Ny7nE7d9w/aUdZIk5hcLKQ3KjSQSkMZWuPPVKBKoPTyZsQAd/x4gD7KLBuBnIhhgTfUJsP4EPgG0LYWmPKGUBKe8A7wFnumb6hti7z9v6uz02AAAAABJRU5ErkJggg==');
    .ico-cart-green
      width: 70%;
      float: left;
      height: 100%;
      background-size: 50%;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAMAAAC1bw3YAAAAZlBMVEUAAAAAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEJ+HSx/AAAAIXRSTlMAn2C/8T4P65EHSFf4c8/G2Kch44eBUbWtezgwKRYba90AFU1LAAABrUlEQVRIx6WW6WKDIBCElSie8TZqNAfv/5JdqWkbDQyU7yfgyLGzu549WRv8EtWJvQLPxRvMXuIi3nnYS/jijRO3l4jou5T/4NkTkkKQeC7EJFF7TlQkkTkpLILgThLn9RE8J0oQCZibIBonCUYKxX6wKYQlPYhXA2ZnifbofmFJ/Nn+i43FjsMDDU9mCldpMc07YTpaOqJowRZjqpg9myg00mIq55RuFpPiNw9zUm+3MEvlXHNpPU0NZharFHMzzeU4E420rFNNPk3yYRLQqqtTVk5pUYRqA65iPrKPnva1Bv8BWwyfU/3yI7rtUKeA469e/8E0PIALDNNfibofAM4ItcAswIa9r6OUFnOilhaDuD26mcWciKUBIJd4HE4K1nNcYKGqBABJpCi0YF7jkcAEd53EJIg6m6J1ZfiXdh3pM39rC9SUW+Qs+a6LuQsi3CpZi/oGuc1hd2/hq+wngkiARCNr3r8lyu2ks2x59p1Dut3WE9VsMbAuWA15EM9jhq+Tt6rnD/GjblwDVUM3iY0cFZq5+P7TMbmxSKxUBl4Pez9m/NMps9jvNFv4ApE5a+bTSsLDAAAAAElFTkSuQmCC');
    &.f-cart
      width: 20%;
      height: 3.8rem;
      position: relative;
      border: .1rem solid #009d42;
      border-radius: .5rem;
      margin-right: 3%;
      margin-left: 2%;
      .cart-num
        width: 1.8rem;
        height: 1.8rem;
        display: block;
        background-color: #f60;
        border-radius: 50%;
        text-align: center;
        font-size: .75rem;
        color: #fff;
        line-height: 1.8rem;
        position: absolute;
        right: 20%;
        top: 1rem;

  .f-btn-add
    width: 45%;
    height: 4rem;
    overflow: hidden;
    float: left;
    background-color: #009d42;
    border: 0;
    text-align: center;
    font-size: 1.7rem;
    color: #fff;
    line-height: 100%;
    margin: 0;
    padding: 0;
    border-radius: .5rem;

</style>
