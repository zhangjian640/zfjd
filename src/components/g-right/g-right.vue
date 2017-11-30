<template>
<div class="g-right">
  <div class="supervise">
    <div class="grid-title"></div>
    <div class="cube-title"></div>
    <div class="m-cube-supervise">
      <div class="data-default">
        <div class="item">涉执法办案问题协同事项数：</div>
        <div class="progress-wrap">
          <div class="progress">
            <div class="progress-bar">
              <div class="fill"></div>
            </div>
          </div>
          <span class="num">300</span>
        </div>
        <div class="item">通用的协同工作事项数：</div>
        <div class="progress-wrap">
          <div class="progress">
            <div class="progress-bar">
              <div class="fill"></div>
            </div>
          </div>
          <span class="num">200</span>
        </div>
      </div>
      <div class="cube-area">

      </div>
    </div>
  </div>
  <div class="m-application">
    <div class="title"></div>
    <ul class="items">
      <li>
        <img src="./icon_yy1.png" alt="">
        <div class="name">武汉市公安局信访</div>
        <div class="name">信息管理系统</div>
      </li>
      <li>
        <img src="./icon_yy2.png" alt="">
        <div class="name">武汉市警务系统</div>
        <div class="name">监督系统</div>
      </li>
      <li>
        <img src="./icon_yy3.png" alt="">
        <div class="name">武汉市公安局</div>
        <div class="name">网上督查应用系统</div>
      </li>
      <li>
        <img src="./icon_yy4.png" alt="">
        <div class="name">警务警察</div>
        <div class="name">管理信息系统</div>
      </li>
      <li>
        <img src="./icon_yy5.png" alt="">
        <div class="name">公安审计</div>
        <div class="name">信息化系统</div>
      </li>
      <li>
        <img src="./icon_yy6.png" alt="">
      </li>
    </ul>
  </div>
  <div class="m-duty">
    <div class="title"></div>
    <div class="duty-wrap">
      <div class="icon"></div>
      <ul class="duty-msg">
          <li>今日值班领导：<span class="name">王晓光</span></li>
          <li>今日值班民警数：<span class="name">5人</span></li>
          <li>督查：<span class="name">王晓光</span><img src="./icon_shipin.png" alt=""><img src="./icon_yuyin.png" alt=""></li>
          <li>纪委：<span class="name">王晓光</span><img src="./icon_shipin.png" alt=""><img src="./icon_yuyin.png" alt=""></li>
          <li>审计：<span class="name">李云</span><img src="./icon_shipin.png" alt=""><img src="./icon_yuyin.png" alt=""></li>
          <li>信访：<span class="name">程莉</span><img src="./icon_shipin.png" alt=""><img src="./icon_yuyin.png" alt=""></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .g-right
    width 533px
    margin-left 66px
    margin-top 68px
  .supervise
    height 398px
    background url(./litishishijiandu_bg.png) no-repeat
    .grid-title
      height 116px
      background url(./title_right.png) 100px center no-repeat
    .cube-title
      height 58px
      background url(./title_tilissjd.png) 18px center no-repeat
    .m-cube-supervise
      .data-default
        width 270px
        padding-left 30px
        margin-top 20px
        box-sizing border-box
        .item
          color #5a9cd8
          font-size 18px
          line-height 50px
        .progress
          display inline-block
          background #18b32e
          width 80px
          height 25px
          vertical-align middle
        .num
          margin-left 25px
          color #fafd4d
          font-size 30px
          vertical-align middle
  .m-application
    width 533px
    height 343px
    margin-top 19px
    background url(./hechengjianduyingyong_bg.png) no-repeat
    .title
      height 57px
      background url(./title_hechengjgyy.png) 18px center no-repeat
    .items
      display flex
      flex-direction row
      flex-wrap wrap
      li
        flex 177px
        margin-top 20px
        text-align center
        cursor pointer
        .name
          margin-top 5px
  .m-duty
    width 533px
    height 182px
    margin-top 12px
    background url(./jinrizhiban_bg.png) no-repeat
    .title
      height 56px
      background url(./title_jinrizbxx.png) 18px center no-repeat
    .duty-wrap
      height 88px
      margin-left 20px
      margin-top 18px
      display flex
      flex-direction row
      .icon
        width 58px
        height 88px
        border-radius 5px
        background #00417d url(./icon_zhiban.png) center no-repeat
      .duty-msg
        width 450px
        margin-top 6px
        li
          width 225px
          padding-left 18px
          box-sizing border-box
          float left
          color #6ba5df
          font-size 18px
          line-height 24px
          .name
            color #02e4ff
            vertical-align middle
          img
            vertical-align middle
            margin-left 10px
            cursor pointer
</style>
