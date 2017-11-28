<template>
  <div class="data">
    <div class="cube">
      <cube @change-scale="onChangeScale" @toggle-face="onToggleFace" :all-data="realData"></cube>
      <transition name="slide-fade">
        <div class="data-default" v-show="showDefaultTable">
          <div class="data-cases">
            <div class="cases-title">{{realData[0].name}}</div>
            <div class="item" v-for="(item, index) in realData[0].list" :key="index">
              <div class="title">{{item.title}}</div>
              <div class="progress">
                <div class="fill"></div>
              </div>
              <div class="count num">{{item.count}}</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="all-problem">
      <div class="name">总问题数</div>
      <div class="progress">
        <div class="progress-bar" v-for="(item, index) in realData[curFace].list" :key="index">{{item.problem}}</div>
      </div>
      <div class="all-num num">{{problems}}</div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Cube from 'base/cube/cube'

  export default {
    props: {
      realData: {
        type: Array
      }
    },
    data () {
      return {
        showDefaultTable: true,
        problems: 0,
        curFace: 0
      }
    },
    mounted () {
      this.problems = this.CountProblems(this.realData[this.curFace])
    },
    methods: {
      onChangeScale (flag) {
        this.showDefaultTable = !flag
      },
      onToggleFace (index) {
        this.curFace = index
        console.log(index)
        this.problems = this.CountProblems(this.realData[index])
      },
      CountProblems (arr) {
        let sum = 0
        if (arr.list) {
          arr.list.map((item, index) => {
            sum += item.problem
          })
        }
        return sum
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
  @keyframes progressbar
    from
      width 0
    to
      width 100%
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
        .data-cases
          height 100%
          border-left: 1px solid #043465
          .cases-title
            color #03e4ff
            font-size 24px
            font-weight bold
            height 48px
            line-height 48px
            text-indent 15px
            border-bottom: 1px solid #043465
          .item
            height 48px
            line-height 48px
            display flex
            flex-direction row
            border-bottom: 1px solid #043465
            text-indent 15px
            .title
              width 100px
              color #5a9cd8
            .progress
              height 16px
              margin-top 16px
              flex 0 0 100px
              .fill
                height 15px
                display block
                background #0b76e6
                width 100px
                transition width .8s ease
                animation progressbar 7s
            .count
              color #fafd4d
              font-size 25px
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
        font-size 25px



</style>
