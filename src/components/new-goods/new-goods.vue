<template>
  <div class="wrap-shelf">
    <div class="toTop" @click="toTop"></div>
    <v-home-header></v-home-header>
    <div class="fix-scroll">
      <scroller
        :on-refresh="refresh"
        :on-infinite="infinite"
        ref="new_scroller">
        <div>
          <div class="subcat-title">最近一周新品</div>
          <div class="shelf-item">
            <a href="" class="item-pic-bx">
              <img src="./image/1.jpg" alt="" class="item-pic">
              <div class="item-status-empty">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">马桶强力疏通器</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥</span>
                  <span>36</span>
                  &nbsp;
                  <span class="original-price">￥39</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：0</div>
              </div>
            </div>
          </div>
          <div class="shelf-item">
            <a href="" class="item-pic-bx">
              <img src="./image/2.jpg" alt="" class="item-pic">
              <div class="item-status-empty">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">马桶强力疏通器</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥</span>
                  <span>36</span>
                  &nbsp;
                  <span class="original-price">￥39</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：0</div>
              </div>
            </div>
          </div>
          <div class="shelf-item">
            <a href="" class="item-pic-bx">
              <img src="./image/3.jpg" alt="" class="item-pic">
              <div class="item-status-empty">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">马桶强力疏通器</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥</span>
                  <span>36</span>
                  &nbsp;
                  <span class="original-price">￥39</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：0</div>
              </div>
            </div>
          </div>
          <div class="shelf-item">
            <a href="" class="item-pic-bx">
              <img src="./image/4.jpg" alt="" class="item-pic">
              <div class="item-status-empty">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">马桶强力疏通器</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥</span>
                  <span>36</span>
                  &nbsp;
                  <span class="original-price">￥39</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：0</div>
              </div>
            </div>
          </div>
          <div class="shelf-item">
            <a href="" class="item-pic-bx">
              <img src="./image/5.jpg" alt="" class="item-pic">
              <div class="item-status-empty">热卖脱销</div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">马桶强力疏通器</div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">新品首发优惠</span>
                  <span>￥</span>
                  <span>36</span>
                  &nbsp;
                  <span class="original-price">￥39</span>
                  <span class="promo-lable">新</span>
                </div>
                <div class="item-comment">评论：0</div>
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
  import header from '../home-header/home-header.vue'
  import footer from '../footer/footer.vue'

  export default{
    methods: {
      refresh (done) {
        setTimeout(() => {
          done()
        }, 1000)
      },
      infinite (done) {
        setTimeout(() => {
          done(true)
        }, 1000)
      },
      toTop () {
        console.log(this.$refs.new_scroller.scrollTo)
        this.$refs.new_scroller.scrollTo(0, 0, true)
      }
    },
    components: {
      'v-home-header': header,
      'v-footer': footer
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap-shelf .subcat-title {
    max-width: 96%;
    text-align: center;
    font-size: 1.9em;
    color: #000;
    line-height: 2em;
    margin: 0 auto -1.2em;
  }

  .wrap-shelf .shelf-item {
    position: relative;
    width: 96%;
    border: 1px solid #ddd;
    margin: 2rem auto 0;
  }

  .wrap-shelf .shelf-item .item-pic-bx {
    width: 100%;
    overflow: hidden;
    display: block;
    position: relative;
    color: #333;
  }

  .wrap-shelf .shelf-item .item-pic-bx .item-pic {
    width: 100%;
    display: block;
    vertical-align: top;
    margin: 0 auto;
  }

  .wrap-shelf .shelf-item .item-pic-bx .item-status-empty {
    width: 7rem;
    height: 7rem;
    background-color: rgba(0,0,0,.6);
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    font-size: 1.5em;
    color: #fff;
    line-height: 7rem;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -4rem;
    margin-left: -3.5rem;
  }

  .wrap-shelf .shelf-item .item-panel {
    width: 100%;
    background-color: #fff;
    color: #333;
    font-size: 1.35rem;
    line-height: 2.6rem;
    padding-bottom 0.3rem
    overflow hidden
  }

  .wrap-shelf .shelf-item .item-panel .title {
    width: 94%;
    overflow hidden
    margin: 0 auto;
    text-align: left;
    font-size: 1.35rem
    color: #333;
    line-height: 2.6rem;
    text-overflow: ellipsis
    white-space: nowrap;
    padding-top: 0.5rem
  }

  .wrap-shelf .shelf-item .item-panel .item-price {
    width: 94%;
    margin: 0 auto;
    overflow: hidden;
  }

  .wrap-shelf .shelf-item .item-panel .item-price .price-cont {
    min-width: 68%;
    overflow: hidden;
    float: left;
    line-height: 1.8rem;
    margin-top: .2rem;
  }

  .wrap-shelf .shelf-item .item-panel .item-price .price-cont .act-tag {
    background-color: #fff000;
    display: inline-block;
    padding: 1px 3px;
  }

  .wrap-shelf .shelf-item .item-panel .item-price .price-cont .original-price {
    color: #ccc;
    text-decoration: line-through;
  }

  .wrap-shelf .shelf-item .item-panel .item-price .price-cont .promo-lable {
    background-color: #c00;
    color: #fff;
    padding: 1px 3px;
  }

  .wrap-shelf .shelf-item .item-panel .item-price .item-comment {
    float: right;
    text-align: right;
    color: #999;
  }

</style>

