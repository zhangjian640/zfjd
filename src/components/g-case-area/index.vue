<template>
  <!--案管中心-->
  <div class="wrap">
    <div class="title">
      <div class="digitizing">已数字化</div>
      <div class="in-cabinet">已入柜</div>
    </div>
    <div class="files">
      <div class="files-count">
        案卷总数<span class="num">1343</span>件
      </div>
      <div class="pie-wrap">
        <chart :options="pie" ref="pie"></chart>
      </div>
    </div>
    <table class="cabinet-count">
      <thead>
      <tr>
        <th></th>
        <th></th>
        <th>本日</th>
        <th>本周</th>
        <th>本月</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="item">已数字化 <span class="num">80%</span></td>
        <td>
          <div class="progress progress1">
            <div class="fill"></div>
          </div>
        </td>
        <td class="num day">2</td>
        <td class="num week">3</td>
        <td class="num month">6</td>
      </tr>
      <tr>
        <td class="item">已入柜 <span class="num">34%</span></td>
        <td>
          <div class="progress progress2">
            <div class="fill"></div>
          </div>
        </td>
        <td class="num day">2</td>
        <td class="num week">3</td>
        <td class="num month">6</td>
      </tr>
      </tbody>
    </table>
    <ul class="cites-cabinet">
      <li><span class="name">江汉</span><span class="num">15%</span> </li>
      <li><span class="name">青山</span><span class="num">35%</span> </li>
      <li><span class="name">东新</span><span class="num">55%</span> </li>
      <li><span class="name">江夏</span><span class="num">70%</span> </li>
      <li><span class="name">东西湖</span><span class="num">81%</span> </li>
      <li><span class="name">洪山</span><span class="num">25%</span> </li>
    </ul>
    <div class="icon"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ECharts from 'base/ECharts.vue'
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/tooltip'
  export default {
    data () {
      return {
        pie: {
//          tooltip: {
//            trigger: 'item',
//            formatter: '{a} <br/>{b} : {c} ({d}%)'
//          },
          legend: {
            x: 'left',
            y: '50',
            orient: 'vertical',
            textStyle: {
              color: ['#34b9b7', '#f7bb5e'],
              fontSize: '22'
            },
            data: ['刑事案件', '行政案件']
          },
          color: ['#34b9b7', '#f7bb5e'],
          calculable: true,
          series: [
            {
              name: '案管中心',
              center: ['63%', '50%'],
              type: 'pie',
              radius: [30, 70],
              roseType: 'radius',
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              lableLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    fontSize: '22',
                    formatter: '{c}'
                  },
                  labelLine: {show: false}
                }
              },
              data: [
                {value: 55, name: '刑事案件'},
                {value: 70, name: '行政案件'}
              ]
            }
          ]
        }
      }
    },
    components: {
      chart: ECharts
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@keyframes progressbar
  from
    width 0
  to
    width 100%
.wrap
  height 100%
  .title
    height 54px
    background url(./title_anguanzx.png) 18px center no-repeat
    display flex
    flex-direction row
    align-items center
    font-size 18px
    .digitizing
      width 100px
      margin-left 420px
      color #00ffff
      &:before
        content ''
        display inline-block
        width 10px
        height 10px
        margin-right 15px
        background #00ffff
    .in-cabinet
      width 100px
      margin-left 20px
      color #3792ec
      &:before
        content ''
        display inline-block
        width 10px
        height 10px
        margin-right 15px
        background #3792ec

  .files
    width 417px
    height 227px
    padding-top 24px
    box-sizing border-box
    .files-count
      font-size 24px
      padding-left 30px
      color #01ffff
      .num
        color #fafd4d
        font-size 30px
        vertical-align 0
    .pie-wrap
      height 172px
      padding-left 15px
      box-sizing border-box
      .echarts
        width 402px
        height 170px
  .cabinet-count
    width 417px
    height 168px
    text-align center
    tr
      height 55px
      line-height 55px
      th
        color #01ffff
        font-size 22px
        &:nth-of-type(1)
          width 160px
        &:nth-of-type(2)
          width 73px
        &:nth-of-type(3)
          width 63px
        &:nth-of-type(4)
          width 63px

      .item
        color #01ffff
        font-size 22px
        text-align left
        text-indent 5px
        .num
          color #fafd4d
          font-size 30px
      .progress
        width 60px
        height 10px
        border-radius 5px
        margin 0 auto
        position relative
      .progress1
        background #027311
        .fill
          position absolute
          width 50px
          height 10px
          background #3cfd56
          border-radius 5px
      .progress2
        background #09417a
        .fill
          position absolute
          width 50px
          height 10px
          background #ffac1c
          border-radius 5px
          transition width .8s ease
          animation progressbar 7s
      .day, .week, .month
        font-size 30px
      .day
        color #e77707
      .week
        color #00a8ff
      .month
        color #21b30d
  .cites-cabinet
    width 130px
    position absolute
    top 54px
    left 417px
    li
      font-size 18px
      color #01ffff
      line-height 49px
      padding-left 18px
      display flex
      flex-direction row
      .name
        width 66px
      .num
        font-size 28px
        color #21b30d
  .icon
    width 124px
    height 99px
    position absolute
    left 417px
    bottom 0
    background url(./left_paihangbang.png) center no-repeat

</style>
