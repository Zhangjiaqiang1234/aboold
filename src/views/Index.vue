<template>
  <div class='index'>
    <a name='home'></a>
    <!--顶部banner开始-->
    <div class='floor floor1' name='#home'>
      <!--顶部导航组件-->
      <headers></headers>
      <!--粒子动画-->
      <vue-particles
        color='#dedede'
        :particleOpacity='0.7'
        :particlesNumber='80'
        shapeType='circle'
        :particleSize='4'
        linesColor='#dedede'
        :linesWidth='1'
        :lineLinked='true'
        :lineOpacity='0.4'
        :linesDistance='150'
        :moveSpeed='3'
        :hoverEffect='true'
        hoverMode='grab'
        :clickEffect='false'
        clickMode='push'>
      </vue-particles>
      <!--banner 中间文字区域-->
      <div class='bg1-Txt'>
        <p>{{$t("index.floor1A")}}</p>
        <span>{{$t("index.floor1B")}}
        </span>
        <el-row  class="appDowmload">
        <el-col style="height:100%">
          <!-- <a href="itms-services://?action=download-manifest&url=https://abochain.io/manifest.plist" target='_blank'>
            <img src="../assets/img/bg1/IOS.png" alt="">
          </a> -->
          <!-- href="https://www.abochain.io/download/ios" -->
          <a href="http://47.244.108.42/download/ios" target='_blank' style="height:100%" nofollow>
            <img src="../assets/img/bg1/IOS.png" alt="">
          </a>
          <!-- https://www.abochain.io/download/android -->
           <a href='http://47.244.108.42/download/android' target='_blank' style="height:100%;" nofollow>
            <img src="../assets/img/bg1/Android.png" alt="" >
          </a>
          <!-- <a href="https://abochain.io/1.html" target='_blank'>
            <img src="../assets/img/bg1/IOS.png" alt="">
          </a> -->
        </el-col>
      </el-row>
      </div>
      <!-- <a href='ABO White Paper1.0.pdf' target='_blank'>
        <img class='wpDown' src='../assets/img/bg1/bg1_wpDown.png' alt=''>
      </a> -->

    </div>
    <!--顶部banner结束-->
    <!--痛点分析开始-->
    <div class='floor floor2'>
      <p>{{$t("index.floor2")}}</p>
      <img class='wow bounceInLeft bg2Pic1' src='../assets/img/bg2/bg2_1.png'/>
      <img class='wow bounceInRight bg2Pic2' src='../assets/img/bg2/bg2_2.png' />
      <div>
        <p class='content wow bounceInRight'>{{$t("index.floor2A")}}</p>
        <p class='content wow bounceInRight'>{{$t("index.floor2B")}}</p>
        <p class='content wow bounceInLeft'>{{$t("index.floor2C")}}</p>
        <p class='content wow bounceInLeft'>{{$t("index.floor2D")}}</p>
      </div>
    </div>
    <!--痛点分析结束-->
    <!--ABO技术说明开始-->
    <div class='floor flooe3bg'>
      <div  class='floor3'>
        <p class='title'>{{$t("index.floor3")}}</p>
        <div class='icons'>
        <div id='box1' class='box viewport-flip' @mouseenter="enter('.l1', 1)" @mouseleave="leave('.l1', 1)">
          <a href='javascript:void(0)' class='list l1 flip' :class="{in: isActive[0].isIn === 1, out: isActive[0].isOut === 0}">
            <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_1.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_1-zh.png' />
          </a>
          <a href='javascript:void(0)' class='list l1 flip' :class="{in: isActive[0].isIn === 0, out: isActive[0].isOut === 1}">
            <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_1_1.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_1_1-zh.png' />
          </a>
        </div>
        <div id='box2' class='box viewport-flip' @mouseenter="enter('.l2', 2)" @mouseleave="leave('.l2', 2)">
          <a href='javascript:void(0)' class='list l2 flip' :class="{in: isActive[1].isIn === 1, out: isActive[1].isOut === 0}">
            <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_2.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_2-zh.png' />
          </a>
          <a href='javascript:void(0)' class='list l2 flip' :class="{in: isActive[1].isIn === 0, out: isActive[1].isOut === 1}">
            <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_2_1.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_2_1-zh.png' />
          </a>
        </div>
        <div id='box3' class='box viewport-flip' @mouseenter="enter('.l3', 3)" @mouseleave="leave('.l3', 3)">
          <a href='javascript:void(0)' class='list l3 flip' :class="{in: isActive[2].isIn === 1, out: isActive[2].isOut === 0}">
             <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_3.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_3-zh.png' />
          </a>
          <a href='javascript:void(0)' class='list l3 flip' :class="{in: isActive[2].isIn === 0, out: isActive[2].isOut === 1}">
            <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_3_1.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_3_1-zh.png' />
          </a>
        </div>
        <div id='box4' class='box viewport-flip' @mouseenter="enter('.l4', 4)" @mouseleave="leave('.l4', 4)">
          <a href='javascript:void(0)' class='list l4 flip' :class="{in: isActive[3].isIn === 1, out: isActive[3].isOut === 0}">
             <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_4.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_4-zh.png' />
          </a>
          <a href='javascript:void(0)' class='list l4 flip' :class="{in: isActive[3].isIn === 0, out: isActive[3].isOut === 1}">
            <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_4_1.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_4_1-zh.png' />
          </a>
        </div>
        <div id='box5' class='box viewport-flip' @mouseenter="enter('.l5', 5)" @mouseleave="leave('.l5', 5)">
          <a href='javascript:void(0)' class='list l5 flip' :class="{in: isActive[4].isIn === 1, out: isActive[4].isOut === 0}">
             <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_5.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_5-zh.png' />
          </a>
          <a href='javascript:void(0)' class='list l5 flip' :class="{in: isActive[4].isIn === 0, out: isActive[4].isOut === 1}">
            <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_5_1.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_5_1-zh.png' />
          </a>
        </div>
        <div id='box6' class='box viewport-flip' @mouseenter="enter('.l6', 6)" @mouseleave="leave('.l6', 6)">
          <a href='javascript:void(0)' class='list l6 flip' :class="{in: isActive[5].isIn === 1, out: isActive[5].isOut === 0}">
             <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_6.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_6-zh.png' />
          </a>
          <a href='javascript:void(0)' class='list l6 flip' :class="{in: isActive[5].isIn === 0, out: isActive[5].isOut === 1}">
            <img v-show="this.$i18n.locale === 'en-US'" src='../assets/img/bg3/bg3_6_1.png' />
            <img v-show="this.$i18n.locale === 'zh-CN'" src='../assets/img/bg3/bg3_6_1-zh.png' />
          </a>
        </div>
        </div>
      </div>
    </div>
    <!--ABO技术说明结束-->
    <!--ABO产品应用开始-->
    <div class='floor floor4'>
      <p class='title'>{{$t("index.floor4")}}</p>
      <label class='tab' for='tab-top' @click="floorTab(1)" :class="{border: isBorder === 1, en:this.$i18n.locale === 'en-US',zh:this.$i18n.locale === 'zh-CN'}">{{$t("index.floor4_user")}}</label>
      <label class='tab' for='tab-front' @click="floorTab(2)" :class="{border: isBorder === 2, en:this.$i18n.locale === 'en-US',zh:this.$i18n.locale === 'zh-CN'}">{{$t("index.floor4_doctor")}}</label>
      <label class='tab' for='tab-bottom' @click="floorTab(3)" :class="{border: isBorder === 3, en:this.$i18n.locale === 'en-US',zh:this.$i18n.locale === 'zh-CN'}">{{$t("index.floor4_service")}}</label>
      <label class='tab' for='tab-back' @click="floorTab(4)" :class="{border: isBorder === 4, en:this.$i18n.locale === 'en-US',zh:this.$i18n.locale === 'zh-CN'}">{{$t("index.floor4_research")}}</label>
      <input type='radio' name='tabs' id='tab-top'>
      <input type='radio' name='tabs' id='tab-front'>
      <input type='radio' name='tabs' id='tab-bottom'>
      <input type='radio' name='tabs' id='tab-back'>
      <div class='cube'>
        <div class='tab-content'>
          <img v-show="this.$i18n.locale === 'en-US'" id='floor4-1' src='../assets/img/bg4/user.png' alt=''>
          <img v-show="this.$i18n.locale === 'zh-CN'" id='floor4-1' src='../assets/img/bg4/user-cn.png' alt=''>
        </div>
        <div class='tab-content'>
          <img v-show="this.$i18n.locale === 'en-US'" id='floor4-1' src='../assets/img/bg4/doctor.png' alt=''>
          <img v-show="this.$i18n.locale === 'zh-CN'" id='floor4-1' src='../assets/img/bg4/doctor-cn.png' alt=''>
        </div>
        <div class='tab-content'>
          <img v-show="this.$i18n.locale === 'en-US'" id='floor4-1' src='../assets/img/bg4/service.png' alt=''>
          <img v-show="this.$i18n.locale === 'zh-CN'" id='floor4-1' src='../assets/img/bg4/service-cn.png' alt=''>
        </div>
        <div class='tab-content'>
          <img v-show="this.$i18n.locale === 'en-US'" id='floor4-1' src='../assets/img/bg4/research.png' alt=''>
          <img v-show="this.$i18n.locale === 'zh-CN'" id='floor4-1' src='../assets/img/bg4/research-cn.png' alt=''>
        </div>
      </div>
    </div>
    <!--ABO产品应用结束-->
    <a name='team'></a>
    <!-- <div class='floor floor5' name='#team'>
      <img src='../assets/img/bg5/bg5_1.png' alt=''>
      <div>
        <p>TEAM TO INTRODUCE</p>
        <ul>
          <li>
            <img src='../assets/img/bg5/bg5_2.png' alt=''>
          </li>
          <li>
            <img src='../assets/img/bg5/bg5_2.png' alt=''>
          </li>
          <li>
            <img src='../assets/img/bg5/bg5_2.png' alt=''>
          </li>
          <li class='cleanMR'>
            <img src='../assets/img/bg5/bg5_2.png' alt=''>
          </li>
          <li>
            <img src='../assets/img/bg5/bg5_2.png' alt=''>
          </li>
          <li>
            <img src='../assets/img/bg5/bg5_2.png' alt=''>
          </li>
          <li>
            <img src='../assets/img/bg5/bg5_2.png' alt=''>
          </li>
          <li class='cleanMR'>
            <img src='../assets/img/bg5/bg5_2.png' alt=''>
          </li>
        </ul>
      </div>

    </div> -->
    <a name='roadmap'></a>
    <!--发展规划开始-->
    <div class='floor floor6'>
      <p class='title'>{{$t("index.floor6")}}</p>
      <img src='../assets/img/bg6/roadmap.png' alt=''>
      <div>
        <div class='icon'></div>
        <div class='icon'></div>
        <div class='icon'></div>
        <div class='icon'></div>
        <div class='icon'></div>
        <div class='icon'></div>
      </div>
      <div>
        <span class='year'>2019</span>
        <span class='year'>2018.02</span>
        <span class='year'>2018.12</span>
        <span class='year'>2018.07</span>
        <span class='year'>2018.09</span>
        <span class='year'>2018.08</span>
      </div>
      <div>
        <p class='RMContent'>{{$t("index.floor6A")}}</p>
        <p class='RMContent'>{{$t("index.floor6F")}}</p>
        <p class='RMContent'>{{$t("index.floor6B")}}</p>
        <p class='RMContent'>{{$t("index.floor6E")}}</p>
        <p class='RMContent'>{{$t("index.floor6C")}}</p>
        <p class='RMContent'>{{$t("index.floor6D")}}</p>
      </div>
    </div>
    <!--发展规划结束-->
    <!--合作机构开始-->
    <div class="floor floor8">
          <el-row type="flex" justify="center" style="margin-top:60px" class="Cooperation">
            <el-col :span="15">
              <el-row><p style="font-size:26px;text-align:center;color:#4F6890;;">{{$t("index.floor8")}}</p></el-row>
              <el-row type="flex" justify="center" style="margin-top:3%">
                <!-- <el-col :span="5"><img src="../assets/img/subscribing/img1.png" alt=""></el-col> -->
                <el-col :span="5" ><img src="../assets/img/subscribing/img2.png" alt=""></el-col>
                <el-col :span="5" :offset="1"><img src="../assets/img/subscribing/img3.png" alt=""></el-col>
                <el-col :span="5" :offset="1"><img src="../assets/img/subscribing/img4.png" alt=""></el-col>
              </el-row>
              <el-row type="flex" justify="center" style="margin-top:3%">
                <el-col :span="5" ><img src="../assets/img/subscribing/img5.png" alt=""></el-col>
                <el-col :span="5" :offset="1"><img src="../assets/img/subscribing/img6.png" alt=""></el-col>
                <el-col :span="5" :offset="1"><img src="../assets/img/subscribing/img7.png" alt=""></el-col>
              </el-row>
            </el-col>
          </el-row>
    </div>
    <!--合作机构结束-->
    <footers></footers>
  </div>
</template>

<script>
import WOW from 'wow.js' // wow.js 依赖 animate.min.css 所以需要引入
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'
import '../assets/css/animate.min.css'

export default {
  name: 'index',
  components: { // 注册组件
    Headers,
    Footers
  },
  data () {
    return {
      floorCss: {
        width: '',
        height: ''
      },
      defaultWidth: '',
      defaultHeight: '',
      fontSize1: this.defaultWidth * 30 / 1280,
      // fontSize2: this.defaultWidth *30/1280,
      // fontSize3: this.defaultWidth *30/1280,
      // fontSize4: this.defaultWidth *30/1280,
      // fontSize5: this.defaultWidth * 30/1280,
      eleBack: '',
      eleFront: '',
      isActive: [
        {
          isIn: -1,
          isOut: 1
        },
        {
          isIn: -1,
          isOut: 1
        },
        {
          isIn: -1,
          isOut: 1
        },
        {
          isIn: -1,
          isOut: 1
        },
        {
          isIn: -1,
          isOut: 1
        },
        {
          isIn: -1,
          isOut: 1
        }
      ],
      isBorder: 2
    }
  },
  // computed: {
  //   floorHeight () {
  //     return this.defaultHeight - 100
  //   }
  // },
  watch: {
    // 默认宽度监听
    defaultWidth (val) {
      if (!this.timer) {
        this.defaultWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.init()
          that.timer = false
        }, 400)
      }
    }
  },
  created () {
  },
  mounted () {
    new WOW().init()
    var defaultWidth = document.documentElement.clientWidth < 1280 ? 1280 : document.documentElement.clientWidth
    var defaultHeight = window.innerHeight
    $('.floor').css('width', defaultWidth + 'px')
    // $('.floor').css('height', defaultHeight + 'px')
  },
  methods: {
    funBackOrFront (p) { // .l1 .l2 .l3...
      var eleBack, eleFront
      $(p).each(function () {
        if ($(this).hasClass('out')) {
          eleBack = $(this)
        } else {
          eleFront = $(this)
        }
        eleBack && (this.eleBack = eleBack)
        eleFront && (this.eleFront = eleFront)
      })
    },
    enter (m, n) { // 鼠标移入技术说明
      this.funBackOrFront(m)
      this.isActive[n - 1].isIn = 0
      this.isActive[n - 1].isOut = 0
      this.eleBack = null
      this.eleFront = null
    },
    leave (m, n) { // 鼠标移出技术说明
      this.funBackOrFront(m)
      this.isActive[n - 1].isIn = 1
      this.isActive[n - 1].isOut = 1
      this.eleBack = null
      this.eleFront = null
    },
    floorTab (m) { // 点击产品应用导航，切换显示对应区块
      this.isBorder = m
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.en{
  margin-left:100px
}
.zh{
  margin-left:200px
}
.enTab {
  margin-left: 200px;
}
.zhTab {
  margin-left: 200px;
}
body, input, {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}
button{
  cursor: pointer;
}

.floor {
  position: relative;
  margin:0 auto
}

.floor>p{
  margin:0 auto;
  text-align: center;
  font-size: 26px;
  color: #4F6890;
  font-weight:500;
}

.floor1 {
  height:700px;
  margin: 0 auto;
  background: linear-gradient(#678bc1, #9bbdd3)
}

.floor1 #particles-js {
  width: 100%;
  height: 600px;
  background-size: cover;
}

.floor1 .bg1-Txt {
  width:52%;
  position: absolute;
  top: 30%;
  left: 20%;
  color: #FFF;
}

.bg1-Txt p {
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 3%;
}

.bg1-Txt span {
  line-height: 26px;
  font-size: 26px;
  font-weight: 300;
  display: inline-block;
  width:90%;
  margin-bottom:2%
}

/* 下载 */

.floor1 .wpDown {
  width: 220px;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.appDowmload{
  height:35px;
  width:60%;
  color: #FFF;
}
.appDowmload img{
  height:100%;
}
.floor2 {
  width:1280px !important;
  min-height: 800px;
  text-align: center
}

.floor2>p{
  width:450px;
  padding-top:55px
}

.floor2>img.bg2Pic1{
  width:22.5%;
  position: absolute;
  top:200px;
  left:230px
}
.floor2>img.bg2Pic2{
  width:24.5%;
  position: absolute;
  top:430px;
  left:750px;
  animation-delay:0.6s;
}
.floor2>div>p.content{
  width:400px;
  font-size:16px;
  color: #4F6890;
  font-weight:400;
  position: absolute;
  text-align:left;
  line-height:25px;
}
.floor2>div>p.content:nth-child(1){
  animation-delay:0.2s;
  top:190px;
  left:640px;
}
.floor2>div>p.content:nth-child(2){
  animation-delay:0.4s;
  top:290px;
  left:640px;
}
.floor2>div>p.content:nth-child(3){
  animation-delay:0.8s;
  animation-timing-function: cubic-bezier(1,1,1.5,1);
  top:520px;
  left:230px;
}
.floor2>div>p.content:nth-child(4){
  animation-delay:1.0s;
  animation-timing-function: cubic-bezier(1,1,1.5,1);
  top:680px;
  left:230px;
}
.floor3 {
  width:1280px !important;
  margin: 20px auto;
  min-height: 850px !important;
}
.flooe3bg{
  background: #F9F9FA
}

.floor3>p.title {
  padding: 80px 0 10px 0;
  margin:0 auto;
  text-align: center;
  font-size: 26px;
  color: #4F6890;
  font-weight:500;
}
.floor3>div.icons {
  margin: 0 auto;
  width: 900px;
  display: flex;
  flex-wrap: wrap;
}

.floor3>div.icons>div {
  margin-right: 50px;
  margin-bottom: 50px
}

.floor3>div.icons>div img {
  width: 250px;
}

.in {
  animation-timing-function: ease-out;
  animation-duration: 550ms;
}

.out {
  animation-timing-function: ease-in;
  animation-duration: 400ms;
}

.viewport-flip {
  perspective: 1000px;
  position: absolute;
}

.flip {
  backface-visibility: hidden;
  transform: translateX(0);
}

.flip.out {
  visibility: hidden;
  transform: rotateY(-90deg) scale(.9);
  animation-name: flipouttoleft;
  animation-duration: 175ms;
}

.flip.in {
  animation-name: flipintoright;
  animation-duration: 225ms;
}

@-webkit-keyframes flipouttoleft {
  from {
    -webkit-transform: rotateY(0);
  }
  to {
    -webkit-transform: rotateY(-90deg) scale(.9);
  }
}

@keyframes flipouttoleft {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(-90deg) scale(.9);
  }
}

@-webkit-keyframes flipintoright {
  from {
    -webkit-transform: rotateY(90deg) scale(.9);
  }
  to {
    -webkit-transform: rotateY(0);
  }
}

@keyframes flipintoright {
  from {
    transform: rotateY(90deg) scale(.9);
  }
  to {
    transform: rotateY(0);
  }
}

.box {
  width: 200px;
  height: 282px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.list {
  position: absolute;
}

.floor4 {
  background: #FDFDFD;
  width:1280px !important;
  height: 600px  !important;
}

.floor4>p.title {
  /*110/750*/
  padding-top: 70px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 26px;
  font-weight: 500;
  color: #4F6890;
}

.floor4>label.tab {
  display: inline-block;
  height: 30px;
  color: #4F6890;
  cursor: pointer;
}

.floor4 .border {
  border-bottom: 1PX solid #4F6890;
}

.floor4 img {
  width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.floor4 input {
  display: none;
}

.floor4 .cube {
  position: relative;
  margin: 85px auto;
  width: 800px;
  height: 400px;
  transform-origin: 0 200px;
  -webkit-transform-origin: 0 200px;
  -moz-transform-origin: 0 200px;
  transform-origin: 0 200px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: -webkit-transform 0.5s ease-in;
  -webkit-transition: -webkit-transform 0.5s ease-in;
  -moz-transition: -moz-transform 0.5s ease-in;
}

.floor4 .tab-content {
  background: #FDFDFD;
  width: 800px;
  height: 400px;
  text-align: center;
  position: absolute;
}

.floor4 .tab-content:nth-child(2) {
  -webkit-transform: translateZ(200px);
  -moz-transform: translateZ(200px);
  transform: translateZ(200px);
}

.floor4 .tab-content:nth-child(1) {
  -webkit-transform: rotateX(-270deg) translateY(-200px);
  -moz-transform: rotateX(-270deg) translateY(-200px);
  transform: rotateX(-270deg) translateY(-200px);
  -webkit-transform-origin: top left;
  -moz-transform-origin: top left;
  transform-origin: top left;
}

.floor4 .tab-content:nth-child(3) {
  -webkit-transform: rotateX(-90deg) translateY(200px);
  -moz-transform: rotateX(-90deg) translateY(200px);
  transform: rotateX(-90deg) translateY(200px);
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  transform-origin: bottom center;
}

.floor4 .tab-content:nth-child(4) {
  -webkit-transform: rotateX(-180deg) translateY(375px) translateZ(-180px);
  -moz-transform: rotateX(-180deg) translateY(375px) translateZ(-180px);
  transform: rotateX(-180deg) translateY(375px) translateZ(-180px);
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  transform-origin: bottom center;
}

.floor4 #tab-top:checked~.cube {
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

.floor4 #tab-front:checked~.cube {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

.floor4 #tab-bottom:checked~.cube {
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
}

.floor4 #tab-back:checked~.cube {
  -webkit-transform: rotateX(-180deg);
  -moz-transform: rotateX(-180deg);
  transform: rotateX(-180deg);
}
/* .floor5 {
  width: 1280px;
  height: 650px;
  color: #FFF;
  text-align: center;
  position: relative;
}

.floor5>img {
  width: 1280px;
  position: absolute;
  top: 0;
  left: 0;
}

.floor5>div {
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 657px;
}

.floor5>p {
  padding-top: 40px;
  text-align: center;
  color: #ECF2F7;
  font-size: 28px;
  font-weight: 500;
}

.floor5 ul {
  text-align: center;
  width: 65.6%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 160px;
  left: 15%;
}

.floor5 ul>li {
  margin-right: 10%;
  margin-bottom: 8%
}

.floor5 ul li.cleanMR {
  margin-right: 0;
} */
.floor6 {
  width:1280px !important;
  height: 700px !important;
  text-align: center;
  position: relative
}

.floor6>P {
   padding-top: 85px
}

.floor6 img {
  margin: 80px auto;
  width: 460px;
  animation: rotate infinite 25s linear;
}

@keyframes rotate {
  0% {
    transform-origin: center;
    transform: rotateZ(0deg);
  }
  100% {
    transform-origin: center;
    transform: rotateZ(360deg);
  }
}

.floor6 div.icon {
  width: 1.5625%;
  height: 2.857%;
  border-radius: 50%;
  background: #7C91C1;
  position: absolute;
}

.floor6 div.icon:nth-child(1) {
  top: 32%;
  left: 40%;
}

.floor6 div.icon:nth-child(2) {
  top: 32%;
  right: 40%;
}

.floor6 div.icon:nth-child(3) {
  top: 60%;
  left: 31.48%;
}

.floor6 div.icon:nth-child(4) {
  top: 60%;
  right: 31.48%;
}

.floor6 div.icon:nth-child(5) {
  top: 88%;
  left: 40%;
}

.floor6 div.icon:nth-child(6) {
  top: 88%;
  right: 40.4%;
}

.floor6 span.year {
  font-size: 22px;
  color: #7C91C1;
  position: absolute;
}

.floor6 span.year:nth-child(1) {
  top: 31.3%;
  left: 34.2%;
}

.floor6 span.year:nth-child(2) {
  top: 31.3%;
  right: 32.2%;
}

.floor6 span.year:nth-child(3) {
  top: 59.3%;
  left: 23.6%;
}

.floor6 span.year:nth-child(4) {
  top: 59.3%;
  right: 23.6%;
}

.floor6 span.year:nth-child(5) {
  top: 87.3%;
  left: 32.4%;
}

.floor6 span.year:nth-child(6) {
  top: 87.3%;
  right: 32.4%;
}

.floor6 div p.RMContent {
  /* text-indent:2em; */
  width: 20%;
  font-size: 14px;
  font-weight: 300;
  color: #7C91C1;
  position: absolute;
}

.floor6 div p.RMContent:nth-child(1) {
  top: 30.2%;
  right: 67%;
  text-align: right
}

.floor6 div p.RMContent:nth-child(2) {
  top: 30.2%;
  right: 10.5%;
  text-align: left
}

.floor6 div p.RMContent:nth-child(3) {
  top: 58.1%;
  left: 2.8%;
  text-align: right
}

.floor6 div p.RMContent:nth-child(4) {
  top: 58.1%;
  right: 2%;
  text-align: left
}

.floor6 div p.RMContent:nth-child(5) {
  top: 86%;
  right: 69%;
  text-align: right
}

.floor6 div p.RMContent:nth-child(6) {
  top: 86%;
  right: 11%;
  text-align: left
}

/* .floor7 {
  height: 500px;
} */

.floor8 {
  height: 350px !important;
  background: #FDFDFD
}

.floor8>p.title,.floor7>p.title {
  padding-top: 80px;
}

.floor8>div.dowebok,.floor7>div {
  width: 60%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 160px auto;
}

.floor8>div.dowebok>div:nth-child(2) {
  margin-left: 50px;
  /* margin-top: 50px */
}

.floor8>div>div.cleanMR,.floor7>div>div.cleanMR {
  margin-right: 0;
}

.floor8>div>div img,.floor7>div>div img {
  width: 170px;
  /*   box-shadow:3px 3px 2px 2px #FAFAFA; */
}

.floor8> img.bg8Pic1 {
  width: 220px;
  position: absolute;
  top:50%;
  left:25%;
  animation-delay:0.5s;
}
.floor8> img.bg8Pic2 {
  width: 250px;
  position: absolute;
  top:50%;
  left:55%;
  animation-delay:0s;
}
.footers{
  width:100%;
  min-width: 1280px;
  margin: 0 auto;
  background: linear-gradient(#678bc1, #9bbdd3)
}

</style>
