<template>
    <header>
      <div class="header-content">

      </div>
      <div class="head-top">
        <div class="head-ico"></div>
        <a href="javascript:;">
          <span class="head-typing"></span>
        </a>
      </div>
      <div class="headermenuNav">
        <swiper :options="swiperOption" ref:navSwiper class="menunav-wrap"><!--
          --><swiper-slide class="navitem"><router-link to="/" exact>首页</router-link></swiper-slide><!--
          --><swiper-slide class="navitem"><router-link to="/new">新品</router-link></swiper-slide><!--
          --><swiper-slide class="navitem"><router-link to="/channel/2">家务</router-link></swiper-slide><!--
          --><swiper-slide class="navitem"><router-link to="/channel/3">下厨</router-link></swiper-slide><!--
          --><swiper-slide class="navitem"><router-link to="/channel/4">家居服</router-link></swiper-slide><!--
          --><swiper-slide class="navitem"><router-link to="/channel/5">生活</router-link></swiper-slide><!--
          --><swiper-slide class="navitem"><router-link to="/channel/6">软装</router-link></swiper-slide><!--
          --><swiper-slide class="navitem"><router-link to="/channel/7">床品</router-link></swiper-slide><!--
          --><swiper-slide class="navitem"><router-link to="/channel/8">工作与旅行</router-link></swiper-slide><!--
          --><swiper-slide class="navitem"><router-link to="/channel/9">关于lifeVC</router-link></swiper-slide><!--
          -->
        </swiper>
      </div>
    </header>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          direction: 'horizontal',
          grabCursor: false,
          slidesPerView: 'auto',
          freeMode: true,
          mousewheelControl: false,
          observeParents: true,
          observer: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    margin: 0 auto;

  .head-ico
    height: 4rem;
    background: url("data:image/png;base64,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") no-repeat;
    background-size: 50%;
    background-position: 50%;

  .head-typing
    width: 3.666666rem;
    height: 3.666666rem;
    display: block;
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALHRSTlMA4yl4B/GrYh8P+rKFLyQF58acfnvWu2peNvXt6d/e2NDOoJlyWUtDPBcUjkxLpL4AAAEgSURBVDjL5dLHcoMwFIVhCdEJHffeS/73f77g0XiMQbZZJKt8K3TmoGEuV/yCq3/9XLLHkQM40dh+2ztI7uThdS0tuHEWDjdFqmNL8iCtOnGBeZXUT0k1B1xdVDQpHbiB0AJXh4Yb/RAK8VBA6AuDHazT5hevYWcajAOnp+QEjmFIZ1i2oiWcu8URbFvRFkbdYglfregLym6xMharbtEDtxW54HWLMczs5znMIBZdsv2+B1IYlJBdGudLBqWpGGSQB49jDll9NDgCq4nQJivg+GLN9gBDL/ZjbwiwN69ZbTylYSPMi3uTRNyFMBJvJCoaLAaRSr5haoke7AFs0j7NONR//zMF4aRXcwiqV9HPc1/8V5bkPWndB/+J6n/jn/gBNys8rIWO1DgAAAAASUVORK5CYII=") no-repeat;
    background-size: 45%;
    background-position: 50%;

  .headermenuNav
    background: #fff;
    width: 100%;
    height: 4rem;
    overflow: hidden;

  .menunav-wrap
    .navitem
      width: 6.66rem;
      height: 4rem;
      font-size: 1.35rem;
      text-align: center;
      line-height: 4rem;
      float: left;
      border-bottom: 0.2rem solid #ddd;
      box-sizing: border-box;
      a
        color: #333;
        height: 3.8rem;
        display: block;
        line-height: 3.8rem;
        padding: 0;
        font-size: 1.35rem;
        &.selected
          color: #89be48;
          border-bottom: 0.2rem solid #89be48;
</style>
