<template>
<div class="wrap">
  <div class="map-text xz active"></div>
  <div class="map-text za"></div>
  <div class="map-text jz"></div>
  <div class="map-text jd"></div>
  <div class="map-text crj"></div>
  <div class="map-text wa"></div>
  <div class="map-text nb"></div>
  <div class="map-text sz"></div>
  <div class="map-text jg"></div>
  <div class="map-text dh"></div>
  <div class="map-text hg"></div>
  <div class="map-text ss"></div>
  <div class="map-text gd"></div>
  <ul class="map-sector-list">
    <li class="map-item map-item-area1" data-deptIdDzaj="420116000000"
        data-deptIdSacw="420116000000" data-deptIdYpsp="420116000000"><span
      class="map-sector-text">黄陂</span></li>
    <li class="map-item map-item-area2" data-deptIdDzaj="420117000000"
        data-deptIdSacw="420117000000" data-deptIdYpsp="420117000000"><span
      class="map-sector-text">新洲</span></li>
    <li class="map-item map-item-area3" data-deptIdDzaj="420112000000"
        data-deptIdSacw="420112000000" data-deptIdYpsp="420112000000"><span
      class="map-sector-text">东西湖</span></li>
    <li class="map-item map-item-area4" data-deptIdDzaj="420102000000"
        data-deptIdSacw="420102000000" data-deptIdYpsp="420102000000"><span
      class="map-sector-text">江岸</span></li>
    <li class="map-item map-item-area5" data-deptIdDzaj="420103000000"
        data-deptIdSacw="420103000000" data-deptIdYpsp="420103000000"><span
      class="map-sector-text">江汉</span></li>
    <li class="map-item map-item-area6" data-deptIdDzaj="420104000000"
        data-deptIdSacw="420104000000" data-deptIdYpsp="420104000000"><span
      class="map-sector-text">硚口</span></li>
    <li class="map-item map-item-area7" data-deptIdDzaj="420107000000"
        data-deptIdSacw="420107000000" data-deptIdYpsp="420107000000"><span
      class="map-sector-text">青山</span></li>
    <li class="map-item map-item-area8" data-deptIdDzaj="420114000000"
        data-deptIdSacw="420114000000" data-deptIdYpsp="420114000000"><span
      class="map-sector-text">蔡甸</span></li>
    <li class="map-item map-item-area9" data-deptIdDzaj="420100270000"
        data-deptIdSacw="420184000000" data-deptIdYpsp="420184000000"><span
      class="map-sector-text">沌口</span></li>
    <li class="map-item map-item-area10" data-deptIdDzaj="420105000000"
        data-deptIdSacw="420105000000" data-deptIdYpsp="420105000000"><span
      class="map-sector-text">汉阳</span></li>
    <li class="map-item map-item-area11" data-deptIdDzaj="420100000000"
        data-deptIdSacw="420106000000" data-deptIdYpsp="420106000000">
      <span class="map-sector-text">武昌</span>
    </li>
    <li class="map-item map-item-area12" data-deptIdDzaj="420111000000"
        data-deptIdSacw="420111000000" data-deptIdYpsp="420111000000"><span
      class="map-sector-text">洪山</span></li>
    <li class="map-item map-item-area13">
      <span class="map-sector-text">东新</span></li>
    <li class="map-item map-item-area14" data-deptIdDzaj="420115000000"
        data-deptIdSacw="420115000000" data-deptIdYpsp="420115000000"><span
      class="map-sector-text">江夏</span></li>
  </ul>
  <!--涉案财物保管超期-->
  <div class="custody-extended">
    <div class="num">13434</div>
    <div class="rotate"></div>
    <div class="name">办案环节超期</div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  nth-child(top,left,width,height)
    top top
    left left
    width width
    height height
    background none

  map-text(top,left,width,height)
    top top
    left left
    width width
    height height

.wrap
  width 100%
  height 100%
  .map-text
    position absolute
    z-index 10
    &.xz
      map-text(137px,104px,86px,82px)
      background url(./xingzheng_lan.png) no-repeat
      &.active
        background url(./xingzheng_click.png) no-repeat
      &:hover
        background url(./xingzheng_hover.png) no-repeat
    &.za
      map-text(91px,171px,110px,71px)
      background url(./zhian_lan.png) no-repeat
      &.active
        background url(./zhian_click.png) no-repeat
      &:hover
        background url(./zhian_hover.png) no-repeat
    &.jz
      map-text(60px,239px,74px,58px)
      background url(./jingzhen_lan.png) no-repeat
      &.active
        background url(./jingzhen_click.png) no-repeat
      &:hover
        background url(./jingzhen_hover.png) no-repeat
    &.jd
      map-text(42px,306px,76px,49px)
      background url(./jindu_lan.png) no-repeat
      &.active
        background url(./jindu_click.png) no-repeat
      &:hover
        background url(./jindu_hover.png) no-repeat
    &.crj
      map-text(38px,382px,86px,39px)
      background url(./churujing_lan.png) no-repeat
      &.active
        background url(./churujing_click.png) no-repeat
      &:hover
        background url(./churujing_hover.png) no-repeat
    &.wa
      map-text(43px,467px,87px,52px)
      background url(./wangan_lan.png) no-repeat
      &.active
        background url(./wangan_click.png) no-repeat
      &:hover
        background url(./wangan_hover.png) no-repeat
    &.nb
      map-text(64px,544px,84px,64px)
      background url(./neibao_lan.png) no-repeat
      &.active
        background url(./neibao_click.png) no-repeat
      &:hover
        background url(./neibao_hover.png) no-repeat
    &.sz
      map-text(103px,613px,76px,70px)
      background url(./shizhen_lan.png) no-repeat
      &.active
        background url(./shizhen_click.png) no-repeat
      &:hover
        background url(./shizhen_hover.png) no-repeat
    &.jg
      top 152px
      left 666px
      width 71px
      height 80px
      background url(./jiaoguan_lan.png) no-repeat
      &.active
        background url(./jiaoguan_click.png) no-repeat
      &:hover
        background url(./jiaoguan_hover.png) no-repeat
    &.dh
      top 273px
      left 48px
      width 66px
      height 88px
      background url(./ditu_donghu.png) no-repeat
    &.hg
      top 259px
      left 733px
      width 66px
      height 85px
      background url(./ditu_huagong.png) no-repeat
    &.ss
      top 615px
      left 112px
      width 67px
      height 86px
      background url(./ditu_shuishang.png) no-repeat
    &.gd
      top 684px
      left 581px
      width 67px
      height 86px
      background url(./ditu_guidao.png) no-repeat

  .map-sector-list
    position relative
    width 763px
    height 794px
    left 24px
    top 45px
    background url(./map/map_bg.png) no-repeat

    .map-item
      text-align center
      line-height 46px
      position absolute
      z-index 10
      cursor pointer
      .map-sector-text
        display block
        color #fff
        font-size 22px
        font-weight bold

      &:nth-child(1)
        nth-child(176px,347px,160px,123px)
        span
          margin-top 23px

      &:nth-child(2)
        nth-child(197px,486px,125px,209px)
        span
          margin-top 62px
          margin-left 5px

      &:nth-child(3)
        nth-child(225px,231px,178px,193px)
        span
          margin-top 60px
          margin-left -49px

      &:nth-child(4)
        nth-child(262px,401px,75px,90px)
        span
          margin-top 19px
          margin-left 17px

      &:nth-child(5)
        nth-child(308px,340px,87px,83px)
        span
          margin-top 21px
          margin-left 18px

      &:nth-child(6)
        nth-child(327px,277px,97px,76px)
        span
          margin-top 17px
          margin-left -11px

      &:nth-child(7)
        nth-child(293px,471px,82px,66px)
        span
          margin-top 5px
          margin-left -3px

      &:nth-child(8)
        nth-child(411px,179px,154px,147px)
        span
          margin-top 35px
          margin-left -42px

      &:nth-child(9)
        nth-child(420px,266px,95px,152px)
        span
          margin-top 47px
          margin-left 13px

      &:nth-child(10)
        nth-child(342px,322px,126px,188px)
        span
          margin-top 64px

      &:nth-child(11)
        nth-child(339px,434px,54px,73px)
        z-index 100
        span
          margin-top 30px
          margin-left -31px

      &:nth-child(12)
        nth-child(343px,417px,172px,127px)
        span
          margin-top 22px
          margin-left 48px

      &:nth-child(13)
        nth-child(424px,442px,96px,43px)
        z-index 100
        span
          margin-top -4px

      &:nth-child(14)
        nth-child(424px,344px,208px,194px)
        span
          margin-top 85px
          margin-left -46px

    .map-item-area1
      &:hover
        background url(./map/huangpi.png) no-repeat

    .map-item-area1
      &.active
        background url(./map/huangpi_hover.png) no-repeat

    .map-item-area2
      &:hover
        background url(./map/xinzhou.png) no-repeat

    .map-item-area2
      &.active
        background url(./map/xinzhou_hover.png) no-repeat

    .map-item-area3
      &:hover
        background url(./map/dongxihu.png) no-repeat

    .map-item-area3
      &.active
        background url(./map/dongxihu_hover.png) no-repeat

    .map-item-area4
      &:hover
        background url(./map/jiangan.png) no-repeat

    .map-item-area4
      &.active
        background url(./map/jiangan_hover.png) no-repeat

    .map-item-area5
      &:hover
        background url(./map/jianghan.png) no-repeat

    .map-item-area5
      &.active
        background url(./map/jianghan_hover.png) no-repeat

    .map-item-area6
      &:hover
        background url(./map/qiaokou.png) no-repeat

    .map-item-area6
      &.active
        background url(./map/qiaokou_hover.png) no-repeat

    .map-item-area7
      &:hover
        background url(./map/qingshan.png) no-repeat

    .map-item-area7
      &.active
        background url(./map/qingshan_hover.png) no-repeat

    .map-item-area8
      &:hover
        background url(./map/caidian.png) no-repeat

    .map-item-area8
      &.active
        background url(./map/caidian_hover.png) no-repeat

    .map-item-area9
      &:hover
        background url(./map/zhuankou.png) no-repeat

    .map-item-area9
      &.active
        background url(./map/zhuankou_hover.png) no-repeat

    .map-item-area10
      &:hover
        background url(./map/hanyang.png) no-repeat

    .map-item-area10
      &.active
        background url(./map/hanyang_hover.png) no-repeat

    .map-item-area11
      &:hover
        background url(./map/wuchang.png) no-repeat

    .map-item-area11
      &.active
        background url(./map/wuchang_hover.png) no-repeat

    .map-item-area12
      &:hover
        background url(./map/hongshan.png) no-repeat

    .map-item-area12
      &.active
        background url(./map/hongshan_hover.png) no-repeat

    .map-item-area13
      &:hover
        background url(./map/dongxin.png) no-repeat

    .map-item-area13
      &.active
        background url(./map/dongxin_hover.png) no-repeat

    .map-item-area14
      &:hover
        background url(./map/jiangxia.png) no-repeat

    .map-item-area14
      &.active
        background url(./map/jiangxia_hover.png) no-repeat

  .custody-extended
    width 124px
    height 150px
    position absolute
    left 50%
    margin-left -62px
    bottom -40px
    z-index 20
    .num
      width 124px
      height 124px
      background url(./big_quan.png) no-repeat
      text-align center
      color #df132e
      line-height 124px
      font-size 30px
    .rotate
      width 124px
      height 124px
      background url(./small_quan.png) no-repeat
      position absolute
      top 0
      animation rotate-con 2s infinite linear
    .name
      color #1d8fe1
      font-size 18px
      position absolute
      bottom 0
      left 0
      right 0
      margin 0 auto
      text-align center

@keyframes rotate-con
  0%
    transform rotate(-360deg)

  100%
    transform rotate(0deg)


</style>
