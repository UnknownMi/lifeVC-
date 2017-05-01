<template>
    <div>
      <div class="toTop" @click="toTop"></div>
      <header id="strollheader">
        <div class="header-content">
          <p class="header-title">闲逛</p>
        </div>
      </header>
      <div class="stroll_scroll">
        <scroller :on-refresh="refresh"
                  :on-infinite="infinite"
                  ref="stroll_scroller">
          <div class="stroll-content">
            <div class="page-loadmore-wrap">
              <div class="page-loadmore">
                <div class="stroll-item-list clearFix">
                  <div class="stroll-all-item">
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer">
                          <img src="./image/01.jpg" class="stroll-item-img">
                          <span class="tag-new">New</span>
                        </div>
                        <h3 class="stroll-item-title">
                          <a href="javascript:;">无肩简约衣架（5只装）</a>
                        </h3>
                        <div class="stroll-item-price">
                                        <span class="price">
                                            ￥<em>9</em>
                                        </span>
                          <span class="comment">月销 5255</span>
                        </div>
                      </div>
                    </div>
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer">
                          <img src="./image/03.jpg" class="stroll-item-img">
                          <span class="tag-new">New</span>
                        </div>
                        <h3 class="stroll-item-title">
                          <a href="javascript:;">可挂式防潮除湿剂（8袋装）</a>
                        </h3>
                        <div class="stroll-item-price">
                                        <span class="price">
                                            ￥<em>30</em>
                                            <span class="original">￥45</span>
                                        </span>
                          <span class="comment">月销 6345</span>
                        </div>
                      </div>
                    </div>
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer">
                          <img src="./image/01.jpg" class="stroll-item-img">
                          <span class="tag-new">New</span>
                        </div>
                        <h3 class="stroll-item-title">
                          <a href="javascript:;">无肩简约衣架（5只装）</a>
                        </h3>
                        <div class="stroll-item-price">
                                        <span class="price">
                                            ￥<em>9</em>
                                        </span>
                          <span class="comment">月销 5255</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="stroll-all-item">
                    <div class="stroll-item">
                      <div class="stroll-type-item clearFix">
                        <div class="cat-menu-a">
                          <span>新价格</span>
                        </div>
                        <div class="cat-menu-a">
                          <span>今日新品</span>
                        </div>
                      </div>
                    </div>
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer">
                          <img src="./image/02.jpg" class="stroll-item-img">
                          <span class="tag-new">New</span>
                        </div>
                        <h3 class="stroll-item-title">
                          <a href="javascript:;">单手开盖运动杯</a>
                        </h3>
                        <div class="stroll-item-price">
                                        <span class="price">
                                            ￥<em>29</em>
                                        </span>
                          <span class="comment">月销 13799</span>
                        </div>
                      </div>
                    </div>
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer">
                          <img src="./image/04.jpg" class="stroll-item-img">
                        </div>
                        <h3 class="stroll-item-title">
                          <a href="javascript:;">双锁扣密封保鲜袋</a>
                        </h3>
                        <div class="stroll-item-price">
                                        <span class="price">
                                            ￥<em>9</em>
                                            <span class="original">￥12</span>
                                        </span>
                          <span class="comment">月销 8159</span>
                        </div>
                      </div>
                    </div>
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer">
                          <img src="./image/02.jpg" class="stroll-item-img">
                          <span class="tag-new">New</span>
                        </div>
                        <h3 class="stroll-item-title">
                          <a href="javascript:;">单手开盖运动杯</a>
                        </h3>
                        <div class="stroll-item-price">
                                        <span class="price">
                                            ￥<em>29</em>
                                        </span>
                          <span class="comment">月销 13799</span>
                        </div>
                      </div>
                    </div>

                  </div>
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
      refresh (done) {
        setTimeout(() => {
          done()
        }, 1000)
      },
      infinite (done) {
        setTimeout(() => {
          done()
        }, 1000)
      },
      toTop () {
        this.$refs.stroll_scroller.scrollTo(0, 0, true)
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


  //内容区
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

  .stroll_scroll
    ._v-container
      margin-top: 4rem

  .stroll-item-list
    background: #fff
    .stroll-all-item
      width 50%
      float left
      .stroll-item
        width 94%
        margin 3%
        .stroll-type-item
          margin 0 1%
          .cat-menu-a
            width 47%
            min-height 3rem
            background-color: #eaeaea;
            border 0
            border-radius 8px
            vertical-align middle
            font-size 1.35rem
            color: #4a4a4a
            padding 0.95rem 0.5%
            margin 1%
            float: left
            display: flex
            text-align center
            span
              margin auto
          .stroll-item-layer
            border-radius 8px
            position relative
            .stroll-item-img
              border-radius 8px
              max-width 100%
            .tag-new
              background-color: #79da87
              max-width 94%
              display inline-block
              text-align left
              font-size 0.8rem
              color: #fff
              line-height 1.4rem
              text-transform uppercase
              padding 0 0.5rem
              position absolute
              left 0
              top 0.8rem
              z-index 6
              white-space nowrap
              word-break keep-all
              text-overflow ellipsis
          .stroll-item-title
            font-size 1rem
            padding 0.4rem 0 0.2rem
            white-space nowrap
            word-break keep-all
            text-overflow ellipsis
            a
              color: #333
              text-decoration none
              font-size 1.35rem
          .stroll-item-price
            text-align left
            width 100%
            font-size 0.9rem
            height 1.5rem
            overflow hidden
            .price
              font-size 1.8rem
              line-height 1.5rem
              display inline-block
              color: #ff475d
              font-weight 400
              width auto
              .original
                font-size 0.9rem
                display inline-block
                color: #888
                text-decoration line-through
                margin-left 5px
            .comment
              font-size 1.4rem
              line-height 1.5rem
              width auto
              float: right
              display inline-block
              text-align right
              color: #999
              white-space nowrap
              word-break keep-all
              text-overflow ellipsis
</style>
