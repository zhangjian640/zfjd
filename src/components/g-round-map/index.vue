<template>
<div class="wrap">
  <div class="global"></div>
  <div class="center">
    <div class="m-map" v-if="curItem===0">
      <m-map></m-map>
    </div>
    <div class="m-signboard" v-if="curItem===1">
      <m-signboard></m-signboard>
    </div>
    <div class="m-heat-map" v-if="curItem===2">
      <m-heat-map></m-heat-map>
    </div>
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
  position relative
  top -25px
  margin-left auto
  margin-right auto
  background url(./btn_quanju.png) no-repeat
  cursor pointer
  .left-btn
    background url(./btn_left_fanye.png) no-repeat
</style>
