<template>
  <div class="content" @mouseenter="overShow" @mouseleave="outHide">
    <div class="cube__wrapper">
      <input type="radio" id="1" name="cube" checked="true" class="cube__control"/>
      <input type="radio" id="2" name="cube" class="cube__control"/>
      <input type="radio" id="3" name="cube" class="cube__control"/>
      <input type="radio" id="4" name="cube" class="cube__control"/>
      <input type="radio" id="5" name="cube" class="cube__control"/>
      <input type="radio" id="6" name="cube" class="cube__control"/>
      <div class="cube">
        <div class="cube__panel">
          <div v-if="!scaled" class="title">接处警及受立案</div>
          <ul v-else-if="scaled">
            <li>{{allData[0].name}}</li>
            <li v-for="(item, index) in allData[0].list" :key="index">{{item.title}} {{item.count}}</li>
          </ul>
        </div>
        <div class="cube__panel">
          <div v-if="!scaled" class="title">刑事强制措施</div>
          <ul v-else-if="scaled">
            <li>{{allData[1].name}}</li>
            <li v-for="(item, index) in allData[1].list" :key="index">{{item.title}} {{item.count}}</li>
          </ul>
        </div>
        <div class="cube__panel">
          <div v-if="!scaled" class="title">强制措施</div>
          <ul v-else-if="scaled">
            <li>{{allData[2].name}}</li>
            <li v-for="(item, index) in allData[2].list" :key="index">{{item.title}} {{item.count}}</li>
          </ul>
        </div>
        <div class="cube__panel">
          <div v-if="!scaled" class="title">移送起诉</div>
          <ul v-else-if="scaled">
            <li>{{allData[3].name}}</li>
            <li v-for="(item, index) in allData[3].list" :key="index">{{item.title}} {{item.count}}</li>
          </ul>
        </div>
        <div class="cube__panel">
          <div v-if="!scaled" class="title">行政处罚罚款</div>
          <ul v-else-if="scaled">
            <li>{{allData[4].name}}</li>
            <li v-for="(item, index) in allData[4].list" :key="index">{{item.title}} {{item.count}}</li>
          </ul>
        </div>
        <div class="cube__panel">
          <div class="title"></div>
        </div>
      </div>
      <div class="cube__actions--left">
        <label for="6" class="cube__action" @click="toggleFace(6)"></label>
        <label for="1" class="cube__action" @click="toggleFace(1)"></label>
        <label for="2" class="cube__action" @click="toggleFace(2)"></label>
        <label for="3" class="cube__action" @click="toggleFace(3)"></label>
        <label for="4" class="cube__action" @click="toggleFace(4)"></label>
        <label for="5" class="cube__action" @click="toggleFace(5)"></label>
      </div>
      <div class="cube__actions--right">
        <label for="2" class="cube__action" @click="toggleFace(2)"></label>
        <label for="3" class="cube__action" @click="toggleFace(3)"></label>
        <label for="4" class="cube__action" @click="toggleFace(4)"></label>
        <label for="5" class="cube__action" @click="toggleFace(5)"></label>
        <label for="6" class="cube__action" @click="toggleFace(6)"></label>
        <label for="1" class="cube__action" @click="toggleFace(1)"></label>
      </div>
      <!--<div class="cube__indicators">-->
        <!--<label for="1" class="cube__indicator"></label>-->
        <!--<label for="2" class="cube__indicator"></label>-->
        <!--<label for="3" class="cube__indicator"></label>-->
        <!--<label for="4" class="cube__indicator"></label>-->
        <!--<label for="5" class="cube__indicator"></label>-->
        <!--<label for="6" class="cube__indicator"></label>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      'allData': {
        type: Array
      }
    },
    data () {
      return {
        scaled: false
      }
    },
    methods: {
      overShow () {
        this.scaled = true
        this.$emit('change-scale', this.scaled)
      },
      outHide () {
        this.scaled = false
        this.$emit('change-scale', this.scaled)
      },
      /**
       * 切面立方体六个面
       * @param index 当前是哪个面
       * 返回的面数作为数组的下标，返回值减1
       */
      toggleFace (index) {
        if (index === 6) {
          return
        }
        this.$emit('toggle-face', index - 1)
      }
    }
  }
</script>

<style scoped lang="css" rel="stylesheet">

  .cube__control {
    z-index: 2;
  }

  .cube__control:nth-of-type(1):checked ~ .cube__indicators .cube__indicator:nth-of-type(1) {
    opacity: 1;
  }

  .cube__control:nth-of-type(2):checked ~ .cube__indicators .cube__indicator:nth-of-type(2) {
    opacity: 1;
  }

  .cube__control:nth-of-type(3):checked ~ .cube__indicators .cube__indicator:nth-of-type(3) {
    opacity: 1;
  }

  .cube__control:nth-of-type(4):checked ~ .cube__indicators .cube__indicator:nth-of-type(4) {
    opacity: 1;
  }

  .cube__control:nth-of-type(5):checked ~ .cube__indicators .cube__indicator:nth-of-type(5) {
    opacity: 1;
  }

  .cube__control:nth-of-type(6):checked ~ .cube__indicators .cube__indicator:nth-of-type(6) {
    opacity: 1;
  }

  .cube__control:nth-of-type(1):checked ~ .cube {
    transform: rotateX(0deg) rotateY(0deg);
  }

  .cube__control:nth-of-type(6):checked ~ .cube {
    transform: rotateX(90deg) rotateY(0deg);
  }

  .cube__control:nth-of-type(3):checked ~ .cube {
    transform: rotateX(180deg) rotateY(0deg);
  }

  .cube__control:nth-of-type(5):checked ~ .cube {
    transform: rotateX(270deg) rotateY(0deg);
  }

  .cube__control:nth-of-type(4):checked ~ .cube {
    transform: rotateX(360deg) rotateY(90deg);
  }

  .cube__control:nth-of-type(2):checked ~ .cube {
    transform: rotateX(360deg) rotateY(-90deg);
  }

  .content {
    height: 500px;
    left: 50%;
    margin-left: -250px;
    margin-top: -250px;
    position: absolute;
    top: 50%;
    transform: scale(0.4);
    transition: all 0.5s ease 0s;
    width: 500px;
  }

  .content,
  .content * {
    animation: fadeIn 0.5s;
  }

  .content:hover {
    transform: scale(1) translateX(155px);
    transition: all 0.5s ease 0s;
  }

  .content:hover .cube__wrapper {
    animation: entrance 0.5s ease;
    transform: rotate(0deg);
    transition: all 0.5s ease 0s;
  }

  .content:hover .cube__indicators {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(1):checked ~ .cube .cube__panel:nth-of-type(1) {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(1):checked ~ .cube__actions--right .cube__action:nth-of-type(1),
  .content:hover .cube__control:nth-of-type(1):checked ~ .cube__actions--left .cube__action:nth-of-type(1) {
    transition: opacity 0.5s ease 0s;
    display: block;
  }

  .content:hover .cube__control:nth-of-type(1):checked ~ .cube__actions--right .cube__action:nth-of-type(1):hover,
  .content:hover .cube__control:nth-of-type(1):checked ~ .cube__actions--left .cube__action:nth-of-type(1):hover {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(2):checked ~ .cube .cube__panel:nth-of-type(2) {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(2):checked ~ .cube__actions--right .cube__action:nth-of-type(2),
  .content:hover .cube__control:nth-of-type(2):checked ~ .cube__actions--left .cube__action:nth-of-type(2) {
    transition: opacity 0.5s ease 0s;
    display: block;
  }

  .content:hover .cube__control:nth-of-type(2):checked ~ .cube__actions--right .cube__action:nth-of-type(2):hover,
  .content:hover .cube__control:nth-of-type(2):checked ~ .cube__actions--left .cube__action:nth-of-type(2):hover {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(3):checked ~ .cube .cube__panel:nth-of-type(3) {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(3):checked ~ .cube__actions--right .cube__action:nth-of-type(3),
  .content:hover .cube__control:nth-of-type(3):checked ~ .cube__actions--left .cube__action:nth-of-type(3) {
    transition: opacity 0.5s ease 0s;
    display: block;
  }

  .content:hover .cube__control:nth-of-type(3):checked ~ .cube__actions--right .cube__action:nth-of-type(3):hover,
  .content:hover .cube__control:nth-of-type(3):checked ~ .cube__actions--left .cube__action:nth-of-type(3):hover {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(4):checked ~ .cube .cube__panel:nth-of-type(4) {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(4):checked ~ .cube__actions--right .cube__action:nth-of-type(4),
  .content:hover .cube__control:nth-of-type(4):checked ~ .cube__actions--left .cube__action:nth-of-type(4) {
    transition: opacity 0.5s ease 0s;
    display: block;
  }

  .content:hover .cube__control:nth-of-type(4):checked ~ .cube__actions--right .cube__action:nth-of-type(4):hover,
  .content:hover .cube__control:nth-of-type(4):checked ~ .cube__actions--left .cube__action:nth-of-type(4):hover {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(5):checked ~ .cube .cube__panel:nth-of-type(5) {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(5):checked ~ .cube__actions--right .cube__action:nth-of-type(5),
  .content:hover .cube__control:nth-of-type(5):checked ~ .cube__actions--left .cube__action:nth-of-type(5) {
    transition: opacity 0.5s ease 0s;
    display: block;
  }

  .content:hover .cube__control:nth-of-type(5):checked ~ .cube__actions--right .cube__action:nth-of-type(5):hover,
  .content:hover .cube__control:nth-of-type(5):checked ~ .cube__actions--left .cube__action:nth-of-type(5):hover {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(6):checked ~ .cube .cube__panel:nth-of-type(6) {
    opacity: 1;
  }

  .content:hover .cube__control:nth-of-type(6):checked ~ .cube__actions--right .cube__action:nth-of-type(6),
  .content:hover .cube__control:nth-of-type(6):checked ~ .cube__actions--left .cube__action:nth-of-type(6) {
    transition: opacity 0.5s ease 0s;
    display: block;
  }

  .content:hover .cube__control:nth-of-type(6):checked ~ .cube__actions--right .cube__action:nth-of-type(6):hover,
  .content:hover .cube__control:nth-of-type(6):checked ~ .cube__actions--left .cube__action:nth-of-type(6):hover {
    opacity: 1;
  }

  .cube__wrapper {
    animation: axial-spin 10s infinite linear;
    height: 300px;
    left: 50%;
    margin-left: -150px;
    margin-top: -145px;
    position: absolute;
    top: 50%;
    transform: scale(0.25);
    transform-style: preserve-3d;
    transition: all 0.5s ease 0s;
    width: 300px;
  }

  .cube {
    height: 300px;
    left: 50%;
    margin-left: -150px;
    margin-top: -145px;
    position: absolute;
    top: 50%;
    transform: rotateX(45deg) rotateY(45deg);
    transform-style: preserve-3d;
    transition: all 0.5s ease 0s;
    width: 300px;
  }

  .cube__panel {
    height: 100%;
    left: 0;
    position: absolute;
    opacity: 0.95;
    top: 0;
    transition: all 0.5s ease 0s;
    width: 100%;
    background: url(./mian.png) no-repeat;
  }

  .cube__panel ul{
    width: 300px;
    height: 300px;
    /*background: #011c39;*/
  }

  .cube__panel:nth-of-type(3) {
    transform: translateZ(-150px) rotateY(180deg) rotate(180deg);
  }

  .cube__panel:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(150px);
    transform-origin: top right;
  }

  .cube__panel:nth-of-type(1) {
    transform: translateZ(150px);
  }

  .cube__panel:nth-of-type(4) {
    transform: rotateY(270deg) translateX(-150px);
    transform-origin: left center;
  }

  .cube__panel:nth-of-type(5) {
    transform: rotateX(90deg) translateY(-150px);
    transform-origin: top center;
  }

  .cube__panel:nth-of-type(6) {
    transform-origin: bottom center;
    transform: rotateX(-90deg) translateY(150px);
  }

  .cube__indicators {
    bottom: -60px;
    left: 0;
    opacity: 0;
    padding: 25px;
    position: absolute;
    right: 0;
    transition: all 0.5s ease 0s;
    text-align: center;
  }

  .cube__control {
    display: none;
  }

  .cube__actions--left .cube__action {
    left: -75px;
    top: 50%;
    transform: translateY(-50%);
  }

  .cube__actions--left .cube__action:before {
    transform: translate(-40%, -50%) rotate(135deg);
  }

  .cube__actions--right .cube__action {
    right: -75px;
    top: 50%;
    transform: translateY(-50%);
  }

  .cube__action {
    animation: none;
    background-color: #fafafa;
    border-radius: 100%;
    cursor: pointer;
    height: 40px;
    display: none;
    opacity: 0.15;
    position: absolute;
    transition: opacity 0.5s ease 0s;
    width: 40px;
    z-index: 3;
  }

  .cube__action:before {
    border-bottom: solid 4px #111;
    border-right: solid 4px #111;
    content: '';
    display: block;
    height: 25%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-70%, -50%) rotate(-45deg);
    width: 25%;
  }

  .cube__indicator {
    background-color: #fafafa;
    border-radius: 100%;
    cursor: pointer;
    display: inline-block;
    height: 14px;
    margin: 4px;
    opacity: 0.15;
    width: 14px;
  }

  .cube__panel .title {
    text-align: center;
    font-size: 38px;
    color: #111111;
    line-height: 300px;
  }

  /*.cube__panel:nth-of-type(1) {*/
  /*background-image: url("./a1.png");*/
  /*background-size: cover;*/
  /*background-position: center;*/
  /*}*/
  /*.cube__panel:nth-of-type(2) {*/
  /*background-image: url("./a2.png");*/
  /*background-size: cover;*/
  /*background-position: center;*/
  /*}*/
  /*.cube__panel:nth-of-type(3) {*/
  /*background-image: url("./a3.png");*/
  /*background-size: cover;*/
  /*background-position: center;*/
  /*}*/
  /*.cube__panel:nth-of-type(4) {*/
  /*background-image: url("./a4.png");*/
  /*background-size: cover;*/
  /*background-position: center;*/
  /*}*/
  /*.cube__panel:nth-of-type(5) {*/
  /*background-image: url("./a5.png");*/
  /*background-size: cover;*/
  /*background-position: center;*/
  /*}*/
  /*.cube__panel:nth-of-type(6) {*/
  /*background-image: url("./a6.png");*/
  /*background-size: cover;*/
  /*background-position: center;*/
  /*}*/
  @-moz-keyframes axial-spin {
    from {
      transform: rotateX(45deg) rotateY(45deg);
    }
    to {
      transform: rotateX(405deg) rotateY(765deg);
    }
  }

  @-webkit-keyframes axial-spin {
    from {
      transform: rotateX(45deg) rotateY(45deg);
    }
    to {
      transform: rotateX(405deg) rotateY(765deg);
    }
  }

  @-o-keyframes axial-spin {
    from {
      transform: rotateX(45deg) rotateY(45deg);
    }
    to {
      transform: rotateX(405deg) rotateY(765deg);
    }
  }

  @keyframes axial-spin {
    from {
      transform: rotateX(45deg) rotateY(45deg);
    }
    to {
      transform: rotateX(405deg) rotateY(765deg);
    }
  }

  @-moz-keyframes entrance {
    from {
      transform: rotateX(45deg) rotateY(45deg);
    }
  }

  @-webkit-keyframes entrance {
    from {
      transform: rotateX(45deg) rotateY(45deg);
    }
  }

  @-o-keyframes entrance {
    from {
      transform: rotateX(45deg) rotateY(45deg);
    }
  }

  @keyframes entrance {
    from {
      transform: rotateX(45deg) rotateY(45deg);
    }
  }

  @-moz-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
