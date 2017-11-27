<template>
  <div class="data">
    <div class="cube">
      <cube @change-scale="onChangeScale" :all-data="realData"></cube>
      <transition name="slide-fade">
        <div class="data-default" v-show="showDefaultTable">
          <ul class="data-cases">
            <li>{{realData.cases.name}}</li>
            <li v-for="(item, index) in realData.cases.list" :key="index">{{item.title}} {{item.count}}</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="all-problem">
      <div class="name">总问题数</div>
      <div class="progress">
        <div class="progress-bar"></div>
        <div class="progress-bar"></div>
        <div class="progress-bar"></div>
        <div class="progress-bar"></div>
        <div class="progress-bar"></div>
        <div class="progress-bar"></div>
      </div>
      <div class="all-num">5435234</div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Cube from 'base/cube/cube'

  export default {
    props: {
      realData: {
        type: Object
      }
    },
    data () {
      return {
        showDefaultTable: true
      }
    },
    methods: {
      onChangeScale (flag) {
        this.showDefaultTable = !flag
      }
    },
    components: {
      Cube
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .slide-fade-enter-active
    transition: all .3s ease;

  .slide-fade-leave-active
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(10px)
    opacity: 0

  .data
    height 373px
    background #011c39
    position relative

    .cube
      width 215px
      height 294px
      position absolute
      right 500px
      left 0

      .data-default
        position absolute
        width: 316px
        left 215px
        ul
          height 100%
          border-left: 1px solid #043465
          li
            height 48px
            line-height 48px
            color #5b9bdb
            border-bottom: 1px solid #043465
            text-indent 15px
            &:nth-of-type(1)
              color #03e4ff
    .all-problem
      height 80px
      position absolute
      bottom 0
      display flex
      flex-direction row
      .name
        margin-left 12px
        line-height 80px
        font-size 18px
        color: #5a9cd8
      .progress
        width 300px
        margin 0 10px
        height 16px
        margin-top 32px
        display flex
        flex-direction row
        .progress-bar
          height 16px
          &:nth-of-type(1)
            background #e70c0b
          &:nth-of-type(2)
            background #95110f
          &:nth-of-type(3)
            background #b7302f
          &:nth-of-type(4)
            background #c45719
          &:nth-of-type(5)
            background #e96c25
          &:nth-of-type(6)
            background #d22a5b
      .all-num
        color: #d42723
        line-height 80px
        font-size 25



</style>
