<template>
<div class="wrap">
  <div class="global"></div>
  <div class="center">
    <m-map  v-if="curItem===0"></m-map>
    <m-signboard v-if="curItem===1"></m-signboard>
    <m-heat-map v-if="curItem===2"></m-heat-map>
  </div>
  <div class="left-btn" @click="curItem--"></div>
  <div class="right-btn" @click="curItem++"></div>
</div>
</template>

<script type="text/ecmascript-6">
  import MMap from 'components/m-map'
  import MSignboard from 'components/m-signboard'
  import MHeatMap from 'components/m-heat-map'
  export default {
    data () {
      return {
        curItem: 0
      }
    },
    components: {
      MMap,
      MSignboard,
      MHeatMap
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.global
  width 155px
  height 50px
  position absolute
  top -25px
  left 50%
  margin-left -62.5px
  background url(./btn_quanju.png) no-repeat
  cursor pointer
.left-btn
  width 30px
  height 32px
  position absolute
  left 10px
  top 435px
  background url(./btn_left_fanye.png) no-repeat
.right-btn
  width 30px
  height 32px
  position absolute
  right 10px
  top 435px
  background url(./btn_right_fanye.png) no-repeat
.center{
  position absolute
  top 0
  left 0
  width 836px
  height 836px
}
</style>
