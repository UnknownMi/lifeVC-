<template>
  <div>
    <div class="toTop" @click="toTop"></div>

    <v-home-header></v-home-header>

    <div class="fix-scroll">
      <scroller
        :on-refresh="refresh"
        :on-infinite="infinite"
        ref="home_scroller">
        <div id="page">
          <vswiper></vswiper>
          <div class="item-combo" v-for="combo in combos">
            <div title="组合图活动">
              <div class="combo-title"></div>
              <div class="img-wrap">
                <img v-lazy="combo">
                <map name="planetmap0" id="planetmap0">
                  <area shape="rect" coords="0,0,375,165">
                </map>
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
  import swiper from '../swiper/swiper.vue'
  import footer from '../footer/footer.vue'

  export default {
    data () {
      return {
        combos: [
          'http://i.lifevccdn.com/upload/combinationchart/e561e13a48f64df3a6305cc4bd72935d_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/a008b4c6187745fc91a1747e6b4ccf6a_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/5c0c88d22a094db7a917860ea4a11fee_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/be62a37a54604cf08f1aac1f976daf59_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f4d7598b89f9454ea9d19342e2035e7b_d1242x0.jpg'
        ]
      }
    },
    methods: {
      refresh (done) {
        var vmthis = this
        setTimeout(function () {
          vmthis.combos.splice(5)
          done()
        }, 1000)
      },
      infinite (done) {
        var vmthis = this
        setTimeout(function () {
          for (var i = 0; i < 3; i++) {
            vmthis.combos.push('http://i.lifevccdn.com/upload/combinationchart/e561e13a48f64df3a6305cc4bd72935d_d1242x0.jpg')
          }
          done()
        }, 1000)
      },
      toTop () {
        this.$refs.home_scroller.scrollTo(0, 0, true)
      }
    },
    components: {
      'v-home-header': header,
      'v-footer': footer,
      vswiper: swiper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  img
    max-width 100%

  .item-combo
    margin-bottom: 1rem;
    .img-wrap
      text-align center

  .fix-scroll
    ._v-container
      margin-top: 8rem;
</style>
