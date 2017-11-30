<template>
<!--执法视音频-->
<div class="wrap">
  <div class="title"></div>
  <ul class="cites-cabinet">
    <li><div class="name">江汉</div><div class="num">15%</div></li>
    <li><div class="name">青山</div><div class="num">35%</div></li>
    <li><div class="name">东新</div><div class="num">55%</div></li>
    <li><div class="name">江夏</div><div class="num">70%</div></li>
    <li><div class="name">东西湖</div><div class="num">81%</div></li>
    <li><div class="name">洪山</div><div class="num">25%</div></li>
  </ul>
  <div class="icon"></div>
  <div class="video-wrap">
    <video src="./video.mp4"></video>
    <div class="text">当事人，事情经过，伤情或财产损失数额，受害方是否报警，公安机关是否立案，是否经过 伤情鉴定，有无达成书面调解协议，是否留存有证</div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    .title
      height 55px
      background url(./title_zhifaysp.png) center no-repeat
    .cites-cabinet
      width 120px
      position absolute
      top 55px
      right 417px
      padding-right 18px
      box-sizing border-box
      li
        font-size 18px
        color #01ffff
        line-height 49px
        display flex
        flex-direction row-reverse
        .name
          width 60px
          text-align right
        .num
          text-align right
          font-size 28px
          color #21b30d
    .icon
      width 120px
      height 98px
      position absolute
      bottom 0
      right 417px
      background url(./right_paihangbang.png) center no-repeat
    .video-wrap
      width 418px
      height 392px
      position absolute
      right 0
      top 55px
      video
        width 417px
        padding-left 2px
        box-sizing border-box
      .text
        position absolute
        bottom 0
        padding 5px
        font-size 16px
        color #fff
        line-height 30px
</style>
