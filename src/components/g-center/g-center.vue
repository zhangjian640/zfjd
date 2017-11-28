<template>
  <div class="g-center">
    <div class="logo"></div>
    <div class="date-wrap">
      <div class="date">{{`${year}.${month}.${day}`}}</div>
      <div class="time">{{`${hr}:${minu}:${sec}`}}</div>
    </div>
    <div class="g-wrap">
      <div class="g-case-area">
        <g-case-area></g-case-area>
      </div>
      <div class="g-case-product"></div>
      <div class="g-case-media"></div>
      <div class="g-case-center"></div>
      <div class="g-round-map"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import GCaseArea from 'components/g-case-area'

  export default {
    data () {
      return {
        year: 0,
        month: 0,
        day: 0,
        hr: 0,
        minu: 0,
        sec: 0
      }
    },
    mounted: function () {
      this.clock()
    },
    methods: {
      clock () {
        const now = new Date()
        this.year = now.getFullYear()

        let month = now.getMonth()
        let day = now.getDate()
        let hr = now.getHours()
        let minu = now.getMinutes()
        let sec = now.getSeconds()
        month = month + 1

        this.month = month > 9 ? month : '0' + month
        this.day = day > 9 ? day : '0' + day
        this.hr = hr > 9 ? hr : '0' + hr
        this.minu = minu > 9 ? minu : '0' + minu
        this.sec = sec > 9 ? sec : '0' + sec

        const that = this
        setTimeout(function () {
          that.clock()
        }, 1000)
      }
    },
    components: {
      GCaseArea
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .logo
    width 1558px
    height 136px
    margin 0 auto
    background url(./logo.png) no-repeat
  .date-wrap
    height 48px
    display flex
    flex-direction row
    justify-content space-between
    font-size 36px
    font-family Impact
    font-weight bold
    color #008cd7
    .date, .time
      width 145px
      margin-left 200px
      vertical-align top
    .time
      margin-right 200px
  .g-wrap
    position relative
    height 838px
    .g-case-area
      width 852px
      height 448px
      position absolute
      left 0
      top: 0
      background url(./anguanzhongxin_bg.png) no-repeat
    .g-case-product
      width 848px
      height 363px
      position absolute
      left 0
      bottom 0
      background url(./sheancaiwuzhongxin_bg.png) no-repeat
    .g-case-media
      width 813px
      height 447px
      background url(./zhifayinshipin_bg.png) no-repeat
      position absolute
      top 0
      right 0
    .g-case-center
      width 843px
      height 362px
      background url(./bananzhongxin_bg.png)
      position absolute
      bottom 0
      right 0
</style>
