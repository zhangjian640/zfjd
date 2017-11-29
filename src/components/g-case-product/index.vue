<template>
<!--涉案财物中心-->
<div class="wrap">
  <div class="title"></div>
  <div class="product-name">
    <div class="property">
      <div>涉案财物总数</div>
      <div><div class="num">723</div>件</div>
    </div>
    <div class="product">
      <div>在管物品总数</div>
      <div><div class="num">342</div>件</div>
    </div>
  </div>
  <table class="product-count">
    <thead>
    <tr>
      <th></th>
      <th>总数</th>
      <th>本日</th>
      <th>本周</th>
      <th>本月</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="item">入库</td>
      <td class="count">
        <div class="num">234234</div>
      </td>
      <td class="num day">2</td>
      <td class="num week">3</td>
      <td class="num month">6</td>
    </tr>
    <tr>
      <td class="item">调取</td>
      <td class="count">
        <div class="num">234234</div>
      </td>
      <td class="num day">2</td>
      <td class="num week">3</td>
      <td class="num month">6</td>
    </tr>
    <tr>
      <td class="item">处理</td>
      <td class="count">
        <div class="num">234234</div>
      </td>
      <td class="num day">2</td>
      <td class="num week">3</td>
      <td class="num month">6</td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wrap
  overflow hidden
  .title
    height 55px
    background url(./title_sheancw.png) 18px 15px no-repeat
  .product-name
    width 183px
    height 307px
    float left
    font-size 22px
    color #01ffff
    .property, .product
      height 50%
      line-height 47px
      padding-top 20px
      padding-left 25px
      box-sizing border-box
      text-align  content
    .num
      width 100px
      display inline-block
      color #fafd4d
      font-size 30px
  .product-count
    width 370px
    height 307px
    float left
    text-align center
    tr
      &:nth-of-type(1)
        height 72px
        line-height 72px
      &:nth-of-type(2)
        height 77px
        line-height 77px
      &:nth-of-type(3)
        height 76px
        line-height 76px
      &:nth-of-type(4)
      th
        color #01ffff
        font-size 22px
        &:nth-of-type(1)
          width 67px
        &:nth-of-type(2)
          width 110px
        &:nth-of-type(3)
          width 65px
        &:nth-of-type(4)
          width 65px

      .item
        color #01ffff
        font-size 22px
        text-align left
        text-indent 5px
      .count
        color #fafd4d
        font-size 30px
      .day, .week, .month
        font-size 30px
      .day
        color #e77707
      .week
        color #00a8ff
      .month
        color #21b30d
</style>
