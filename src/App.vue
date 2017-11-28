<template>
  <div class="app">
    <div class="grid-left">
      <g-left></g-left>
    </div>
    <div class="grid-center">
      <g-center></g-center>
    </div>
    <div class="grid-right">
      <g-right></g-right>
    </div>
  </div>
</template>

<script>
  import GLeft from 'components/g-left/g-left'
  import GCenter from 'components/g-center/g-center'
  import GRight from 'components/g-right/g-right'

  export default {
    name: 'app',
    components: {
      GLeft,
      GCenter,
      GRight
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app
    width 3200px
    height 1080px
    display flex
    flex-direction row
    background url(./assets/img/main_bg.jpg) no-repeat
    .grid-left
      width 640px
    .grid-center
      width 1920px
    .grid-right
      width 640px
</style>
