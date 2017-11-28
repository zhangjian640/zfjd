<template>
<div>
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
          tooltip: {
            trigger: 'item',
            x: 'left',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            x: 'left',
            y: '8%',
            data: ['rose1', 'rose2']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          series: [
            {
              name: '半径模式',
              type: 'pie',
              radius: [20, 110],
              center: ['25%', '50%'],
              roseType: 'radius',
              label: {
                normal: {
                  show: false
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
              data: [
                {value: 10, name: 'rose1'},
                {value: 8, name: 'rose2'}
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
  height 225px
  padding-top 24px
  padding-left 30px
  box-sizing border-box
  .files-count
    font-size 24px
    color #01ffff
    .num
      color #fafd4d
      font-size 30px
      vertical-align 0
  .pie-wrap
    height 172px
    .echarts
      width 400px
      height 170px
</style>
