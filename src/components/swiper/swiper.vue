<template>
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide><a href="javascript:;"><img src="./image/1.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href="javascript:;"><img src="./image/2.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href="javascript:;"><img src="./image/3.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href="javascript:;"><img src="./image/4.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href="javascript:;"><img src="./image/5.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href="javascript:;"><img src="./image/6.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href="javascript:;"><img src="./image/7.jpg" alt=""></a></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          loop: true,
          direction: 'horizontal',
          grabCursor: false,
          setWrapperSize: true,
          freeModeMomentum: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
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
  .swiper-slide
    a
      display block
      height 100%
    img
      width: 100%
</style>
