<template>
    <div>
      <header>
        <div class="header-content">
          <p class="header-title">全部产品</p>
        </div>
        <div class="search-panel">
          <div id="search-bar">
            <form action="">
              <input type="search" placeholder="搜索商品"
                     :class="{searchinput: true,changeStyle: isChange}" @click="changeStyle(true)">
              <input id="btnCancel" type="button" value="取消"
                     class="sch-cancel" @click="changeStyle(false)">
            </form>
          </div>
        </div>
      </header>

      <scroller>
        <div class="content-wrap">
          <div class="goodsList">
            <div class="goodsKind">
              <p class="kindTitle">家务</p>
              <ul class="life-goodsUl">
                <li>
                  <img src="./image/1.jpg">
                  <dl>家务工具</dl>
                </li>
                <li>
                  <img src="./image/2.jpg">
                  <dl>家庭清洁剂</dl>
                </li>
                <li>
                  <img src="./image/3.jpg">
                  <dl>防霉除菌</dl>
                </li>
                <li>
                  <img src="./image/4.jpg">
                  <dl>衣物收纳</dl>
                </li>
                <li>
                  <img src="./image/5.jpg">
                  <dl>百纳箱</dl>
                </li>
                <li>
                  <img src="./image/6.jpg">
                  <dl>生活必备</dl>
                </li>
                <li>
                  <img src="./image/7.jpg">
                  <dl>酵素洗衣液</dl>
                </li>
                <li>
                  <img src="./image/8.jpg">
                  <dl>魔力挂钩</dl>
                </li>
                <li>
                  <img src="./image/9.jpg">
                  <dl>地毯地垫</dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </scroller>

      <v-footer></v-footer>
    </div>
</template>

<script>
  import footer from '../footer/footer.vue'

  export default {
    data () {
      return {
        isChange: false
      }
    },
    methods: {
      changeStyle (change) {
        if (this.isChange === change) {
          return
        }
        this.isChange = change
      }
    },
    components: {
      'v-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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

  .search-panel
    background-color: #f2f2f2;
    padding: .5rem 0;

  #search-bar
    width: 94%;
    height: 3rem;
    overflow: hidden;
    border-radius: 6px;
    margin: 0 auto;
    padding: 0;
    position: relative;
    font-family: Microsoft YaHei sans-serif;

  input
    outline: none;

  .search-panel .searchinput
    width: 100%;
    height: 3rem;
    background-color: #fff;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEUAAACSkpKTk5OTk5ORkZGSkpKEhISTk5ORkZGTk5OSkpKRkZGRkZGRkZGSkpKRkZGTk5OTk5ORkZGTk5OSkpKSkpKSkpKTk5ORkZGRkZGRkZGSkpKPj4+UlJSUlJSQkJCSkpKRkZGSkpKRkZGQkJCWlpaRkZGSkpKWlpaTk5OSkpKSkpKRkZGenp6YmJhw30CvAAAALXRSTlMAxbmZWg0FdiT6ybROvKKNUjMpFd7az7+rVkhCEO7Tyn5jXzwvGfqWjYBsNhx4c16/AAAA0ElEQVQ4y82R2Q6CMBBFKVVa24IIsskO4i7//3kaYpSZEo0vxvPEzRya6a3xV3hMmtKmiTU99mnh1GmrKiHcqfmqcPjjswmW+pyvT69wKTXDio7j2K0VEmYEbpYImC2C9yIKXrDMkMAoiBvTQKQRFBzt1hIKMRbONogtwfUmEtYcekhwGMwUVdcFHDe9xT8gWDhuosm5gdmHq2evVd/LuWaw4DAo/ozYbHc1dcOjgsSxLUh9f7zFYGD81HXVsC00MF8Y2Scjen+GyikSMNz4ETeZVQrjcGuzcAAAAABJRU5ErkJggg==');
    background-repeat: no-repeat;
    background-position: 38% .5rem;
    background-size: auto 70%;
    border: 0;
    border-radius: 6px;
    text-align: center;
    font-size: 1.6em;
    color: #1f5350;
    margin: 0;
    padding-left: 3rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    line-height: 3rem;

  .search-panel .sch-cancel
    width: 15%;
    height: 3rem;
    display: block;
    float: right;
    background: none;
    background-color: transparent;
    border: 0;
    text-align: right;
    font-size: 1.5rem;
    color: #83b842;
    line-height: 3rem;

  .changeStyle
    width: 88%!important;
    background-position: .4rem .5rem!important;
    text-align: left!important;

  .content-wrap
    position: absolute;
    top: 8rem;
    bottom: 4.5rem;
    width: 100%;
    min-width: 320px;
    max-width: 640px;


  .goodsList
    width: 100%;
    overflow: hidden;


  .goodsKind
    margin-top: 2rem;


  .kindTitle
    width: 10rem;
    margin: auto;
    text-align: center;
    line-height: 2.4rem;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    height: 3rem;


  .life-goodsUl
    background: #fff;
    overflow: hidden;


  .life-goodsUl li
    float: left;
    width: 33%;
    text-align: center;
    border: 1px solid #f1f1f1;
    margin: 0 0 -1px -1px;


  .life-goodsUl li img
    width: 60%!important;
    margin: auto;
    padding-top: 1rem;

  .life-goodsUl li dl
    height: 2rem;
    line-height: 2rem;
    padding-bottom: 1rem;
    padding-top: .5rem;
    font-size: 1.3rem;
</style>
