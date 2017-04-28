<template>
  <div>
    <v-home-header></v-home-header>
    <div id="page">
      <div id="refreshBox">
        <span>下拉刷新</span>
      </div>
      <vswiper></vswiper>
      <div class="item-combo">
        <div title="组合图活动">
          <div class="combo-title"></div>
          <div class="img-wrap">
            <img src="./image/a.jpg">
            <map name="planetmap0" id="planetmap0">
              <area shape="rect" coords="0,0,375,165">
            </map>
          </div>
        </div>
      </div>
      <div class="item-combo">
        <div title="组合图活动">
          <div class="combo-title"></div>
          <div class="img-wrap">
            <img src="./image/b.jpg">
            <map name="planetmap1" id="planetmap1">
              <area shape="rect" coords="0,0,375,165">
            </map>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from '../home-header/home-header.vue'
  import swiper from '../swiper/swiper.vue'
  import footer from '../footer/footer.vue'

  export default {
    components: {
      'v-home-header': header,
      'v-footer': footer,
      vswiper: swiper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  #page
    margin-top: 8rem;

  #refreshBox
    margin-top: -50px;
    width: 100%;
    height: 50px;

  .item-combo
    margin-bottom: 1rem;
</style>
