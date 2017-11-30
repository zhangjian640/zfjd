<template>
  <div class="g-left">
    <div class="m-cube-data">
      <div class="grid-title-wrap">
        <div class="grid-title"></div>
        <div class="cube-title"></div>
      </div>
      <div class="cube-area">
        <div class="time-unit">
          <div @click="curId=0" :class="{'active': curId === 0}">本日</div>
          <div @click="curId=1" :class="{'active': curId === 1}">本周</div>
          <div @click="curId=2" :class="{'active': curId === 2}">本月</div>
          <div @click="curId=3" :class="{'active': curId === 3}">本年</div>
        </div>
        <div class="tab-con">
          <div v-if="curId === 0">
            <m-cube :real-data="realDay" v-if="realDay[0]"></m-cube>
          </div>
          <div v-if="curId === 1">
            <m-cube :real-data="realWeek" v-if="realWeek[0]"></m-cube>
          </div>
          <div v-if="curId === 2">
            <m-cube :real-data="realMonth" v-if="realMonth[0]"></m-cube>
          </div>
          <div v-if="curId === 3">
            <m-cube :real-data="realYear" v-if="realYear[0]"></m-cube>
          </div>
        </div>
      </div>
    </div>
    <div class="m-trend-analysis">
      <div class="title"></div>
      <div class="analysis">
        <div class="items">
          <div class="item" @click="curChart=0" :class="{'active': curChart === 0}">案管</div>
          <div class="item" @click="curChart=1" :class="{'active': curChart === 1}">涉案财物</div>
          <div class="item" @click="curChart=2" :class="{'active': curChart === 2}">音视频</div>
        </div>
        <chart v-if="curChart===0" :options="grid1" ref="grid1"></chart>
        <chart v-if="curChart===1" :options="grid2" ref="grid2"></chart>
        <chart v-if="curChart===2" :options="grid3" ref="grid3"></chart>
      </div>
    </div>
  </div>
</template>
<script>
  import MCube from '../m-cube/m-cube'
  import { mapState } from 'vuex'
  import ECharts from 'base/ECharts.vue'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/tooltip'
  export default {
    data () {
      return {
        curId: 0,
        curChart: 0,
        grid1: {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              color: '#fff'
            },
            y: 'bottom',
            data: ['数字化数', '入柜管理数']
          },
          grid: {
            x: '1%',
            x2: '4%',
            y: '5%',
            y2: '15%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              interval: 0,
              color: '#fff'
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#fff'
            },
            splitLine: {
              lineStyle: {
                color: '#074076'
              }
            }
          },
          series: [
            {
              name: '数字化数',
              type: 'line',
              stack: '总量',
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#02e6fe'
                  }
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210, 290, 330, 120, 132, 101]
            },
            {
              name: '入柜管理数',
              type: 'line',
              stack: '总量',
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#3e8fd4'
                  }
                }
              },
              data: [220, 191, 234, 290, 330, 120, 132, 101, 134, 90, 230, 210]
            }
          ]
        },
        grid2: {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              color: '#fff'
            },
            y: 'bottom',
            data: ['涉案财物采集及时率', '涉案财物采集处理率']
          },
          grid: {
            x: '1%',
            x2: '4%',
            y: '5%',
            y2: '15%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              interval: 0,
              color: '#fff'
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#fff'
            },
            splitLine: {
              lineStyle: {
                color: '#074076'
              }
            }
          },
          series: [
            {
              name: '涉案财物采集及时率',
              type: 'line',
              stack: '总量',
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#02e6fe'
                  }
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210, 290, 330, 120, 132, 101]
            },
            {
              name: '涉案财物采集处理率',
              type: 'line',
              stack: '总量',
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#3e8fd4'
                  }
                }
              },
              data: [220, 191, 234, 290, 330, 120, 132, 101, 134, 90, 230, 210]
            }
          ]
        },
        grid3: {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              color: '#fff'
            },
            y: 'bottom',
            data: ['受立案数字化率', '受立案率']
          },
          grid: {
            x: '1%',
            x2: '4%',
            y: '5%',
            y2: '15%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              interval: 0,
              color: '#fff'
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#fff'
            },
            splitLine: {
              lineStyle: {
                color: '#074076'
              }
            }
          },
          series: [
            {
              name: '受立案数字化率',
              type: 'line',
              stack: '总量',
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#02e6fe'
                  }
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210, 290, 330, 120, 132, 101]
            },
            {
              name: '受立案率',
              type: 'line',
              stack: '总量',
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#3e8fd4'
                  }
                }
              },
              data: [220, 191, 234, 290, 330, 120, 132, 101, 134, 90, 230, 210]
            }
          ]
        }
      }
    },
    computed: {
      ...mapState([
        'realDay',
        'realWeek',
        'realMonth',
        'realYear'
      ])
    },
    methods: {
    },
    mounted () {
      this.$store.dispatch('GetRealDay')
      this.$store.dispatch('GetRealWeek')
      this.$store.dispatch('GetRealMonth')
      this.$store.dispatch('GetRealYear')
    },
    components: {
      MCube,
      chart: ECharts
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .g-left
    .m-cube-data
      width 533px
      height 565px
      margin-top 69px
      margin-left 40px
      background url(./shujuganzhi_bg.png) no-repeat
      .grid-title-wrap
        .grid-title
          width 230px
          height 100px
          margin-left 212px
          background url(./title_left.png) center no-repeat
        .cube-title
          width 225px
          height 54px
          margin-left 17px
          background url(./title_tilisssj.png) center no-repeat
      .cube-area
        width 529px
        margin-top 1px
        margin-left 2px
        .time-unit
          height 36px
          display flex
          flex-direction row
          div
            flex 1
            background #085296
            color #5a9cd8
            line-height 36px
            text-align center
            cursor pointer
            &.active
              background #02e0fb
              color #00417d
        .tab-con
          div
            height 373px
    .m-trend-analysis
      width 533px
      height 362px
      margin-top 25px
      margin-left 40px
      background url(./shujufenxi_bg.png) no-repeat
      .title
        width 222px
        height 56px
        margin-left 17px
        background url(./title_zhifaqsfx.png) center no-repeat
      .analysis
        width 500px
        margin 0 auto
        .items
          display flex
          height  50px
          flex-direction row
          align-items center
          justify-content center
          .item
            margin-right 15px
            color #02e6fe
            cursor pointer
            &:before
              content ''
              display inline-block
              vertical-align top
              width 16px
              height 16px
              background #02e6fe
              margin-right 5px
            &.active
              color #3e8fd4
              &:before
                background #3e8fd4
        .echarts
          width 520px
          height 230px
</style>
