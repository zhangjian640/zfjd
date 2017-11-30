<template>
<div class="wrap">
  <div class="title"></div>
  <div class="dept">
    <select name="">
      <option value="">武汉市公安局</option>
    </select>
    <select name="">
      <option value="">市局治安大队办案中心</option>
    </select>
  </div>
  <div class="dept-name">市局治安大队办案中心</div>
  <div class="ask-room">
    <span class="xun xun1">询</span>
    <span>问室:</span>
    <div class="progress xun1-progress">
      <div class="progress-bar xun1-progress-bar" role="progressbar"
           aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
           style="width: 80%"></div>
    </div>
    <span>共</span>
    <span class="num">12</span>
    <span>间，正在使用</span>
    <span class="num">3</span>
    <span>间</span>
  </div>
  <div class="ask-room">
    <span class="xun xun2">讯</span>
    <span>问室:</span>
    <div class="progress xun2-progress">
      <div class="progress-bar xun2-progress-bar" role="progressbar"
           aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
           style="width: 80%"></div>
    </div>
    <span>共</span>
    <span class="num">12</span>
    <span>间，正在使用</span>
    <span class="num">3</span>
    <span>间</span>
  </div>
  <ul class="room-info">
    <li>
      <div class="item">在办案件</div>
      <div class="values">
        <span class="num">3</span>起
      </div>
    </li>
    <li>
      <div class="item">在区涉案人员</div>
      <div class="values">
        <span class="num">3</span>人
      </div>
    </li>
    <li>
      <div class="item">在区办案民警</div>
      <div class="values">
        <span class="num">3</span>人
      </div>
    </li>
    <li>
      <div class="item">当前预警/报警事件</div>
      <div class="values">
        <span class="num">3</span>起
      </div>
    </li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wrap
  position relative
  .title
    height 55px
    background url(./title_bananzx.png) center 15px no-repeat
  .dept
    width 533px
    height 35px
    position absolute
    right 17px
    top 80px
    background url(./linkbg.png) no-repeat
    select
      background transparent
      appearance: none
      border none
      outline none
      color #93cafc
      line-height 35px
      padding-left 10px
      font-size 16px
      &:nth-of-type(1)
        width 254px
      &:nth-of-type(2)
        width 257px
        margin-left 16px
  .dept-name
    width 566px
    height 35px
    position absolute
    right 17px
    top 132px
    line-height 35px
    text-align center
    background url(./title.png) no-repeat
  .ask-room
    position absolute
    right 45px
    top 173px
    font-size 0
    color #02aef4
    margin-left 10px
    &:nth-last-child(2)
      top 222px
      margin-top 5px
    span
      display inline-block
      font-size 18px
    .xun
      width 30px
      height 30px
      line-height 30px
      color #021c38
      font-size 20px
      font-weight bold
      border-radius 50%
      text-align center
      margin-right 5px
    .xun1
      background #2077b8
    .xun2
      background #159c27

    .num
      color #fafd4d
      font-size 30px
      vertical-align -5px
      padding 0 10px

    .progress
      width 178px
      height 12px
      display inline-block
      vertical-align baseline
      margin-left 10px
      overflow hidden
      border-radius 4px
      box-shadow inset 0 1px 2px rgba(0, 0, 0, .1)
      margin-right 20px
      .progress-bar
        float left
        width 0
        height 100%
        font-size 12px
        line-height 12px
        color #fff
        text-align center
        box-shadow inset 0 -1px 0 rgba(0, 0, 0, .15)
        transition width .6s ease
        border none
        margin-top 0

    .xun1-progress
      background-color #173f76
      .xun1-progress-bar
        background-color #1d6eab

    .xun2-progress
      background-color #0e7e1d
      .xun2-progress-bar
        background-color #17c52e

  .room-info
    position absolute
    top 270px
    right 17px
    overflow hidden
    margin-top 5px
    li
      float left
      &:nth-of-type(1)
        width 260px
        height 74px
        background url(./bxzx_nr_bg1.png) no-repeat
        margin-right 7px
        .item
          padding-left 90px
        .values
          padding-left 120px

      &:nth-of-type(2)
        width 141px
        height 74px
        background url(./bxzx_nr_bg2.png) no-repeat
        margin-right 7px

      &:nth-of-type(3)
        width 141px
        height 74px
        background url(./bxzx_nr_bg2.png) no-repeat
        margin-right 7px

      &:nth-of-type(4)
        width 200px
        height 74px
        background url(./bxzx_nr_bg4.png) no-repeat

    .item
      text-align center
      color #01c1e1
      font-size 16px
      line-height 31px

    .values
      line-height 40px
      text-align center
      font-size 18px
      color #5a9cd8
      .num
        font-size 30px
        color #fafd4d
        margin-right 20px
        vertical-align -4px

</style>
