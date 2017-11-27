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
          <m-cube :real-data="realDay" v-if="realDay.cases"></m-cube>
        </div>
        <div v-if="curId === 1">
          <m-cube :real-data="realWeek" v-if="realWeek.cases"></m-cube>
        </div>
        <div v-if="curId === 2">
          <m-cube :real-data="realMonth" v-if="realMonth.cases"></m-cube>
        </div>
        <div v-if="curId === 3">
          <m-cube :real-data="realYear" v-if="realYear.cases"></m-cube>
        </div>
      </div>
    </div>
  </div>
  <div class="m-trend-analysis">
    <div class=""></div>
  </div>
  <h1>left</h1>
</div>
</template>
<script>
  import MCube from '../m-cube/m-cube'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        curId: 0
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
    mounted () {
      this.$store.dispatch('GetRealDay')
      this.$store.dispatch('GetRealWeek')
      this.$store.dispatch('GetRealMonth')
      this.$store.dispatch('GetRealYear')
    },
    components: {
      MCube
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
</style>
