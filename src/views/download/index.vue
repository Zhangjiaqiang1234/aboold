<template>
  <div class="download">
    <!-- <headers></headers> -->
    <div class="resetHeight">
      <div style="width:100%">
          <img src="./img/headerBG1.png" class="hidden-xs-only img-responsive" alt="Responsive image">
          <img src="./img/headerBG2.png" class="hidden-sm-and-up img-responsive" alt="Responsive image">
      </div>
      <div>
        <p class="title">
          <img src="./img/apple.png" alt="" v-if="versionType===2">
          <img src="./img/android.png" alt="" v-if="versionType===1" style="width:75px">
          <el-button size="small" type="primary" round>企业版</el-button>
        </p>
      </div>
      <div class="text-center textColor">
        <span class='versionInfo'>版本：{{versionName}}&nbsp;&nbsp;&nbsp;&nbsp;大小：{{size}} M</span>
        <span class='versionTime'>更新时间：{{time}}</span>
      </div>
      <el-row type="flex" justify="center">
        <el-col :xs="7" :sm="4" :md="4" :lg="2" :xl="2">
          <img src='./img/iosUrl.png' class="img-responsive urlImg" alt="Responsive image"  v-if="versionType===2">
          <img src='./img/androidUrl.png' class="img-responsive urlImg" alt="Responsive image"  v-if="versionType===1">
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :xs="12" :sm="5" :md="5" :lg="4" :xl="3" class="button">
          <a href="http://www.abochain.io/ABO_v1.4.2.apk" v-if="versionType===1"><el-button type="primary" round>点击安装</el-button></a>
          <!-- href = itms-services://?action=download-manifest&url=https://www.abochain.io/manifest.plist -->
          <a href="itms-services://?action=download-manifest&url=https://plist.gunchung.com/com.aboCompany.ABOIOS_1542703236.plist" v-if="versionType===2"><el-button type="primary" round>点击安装</el-button></a>
          <small class="text-center textColor" style="font-size:12px">或者用手机扫描二维码安装</small>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :xs="18" :sm="14"><p class="versionTitle1">更新说明</p></el-col>
      </el-row>
      <el-row style="color:#8C8D8E">
        <el-col>
          <el-row v-for="tmp in versionInfo" type="flex" justify="space-around" :key="tmp.id">
            <el-col :xs="20" :sm="14" :key="tmp"><p style="margin-top:0">{{tmp}}</p></el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :xs="18" :sm="14"><p class="versionTitle2">历史版本</p></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="versionUpdateInfo">
        <el-col :xs="20" :sm="16" :md="15" :lg="14">
          <el-row v-for="tmp in version" class="bg" type="flex" justify="space-between" :key="tmp.id">
            <el-col :xs="12" :sm="6" :key="tmp.versionName"><p>{{tmp.versionName}}</p></el-col>
            <el-col :xs="12" :sm="7" :key="tmp.modifyTime.split(' ')[0]" ><p>{{tmp.modifyTime.split(' ')[0]}}</p></el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- <footers></footers> -->
  </div>
</template>

<script>
import axios from 'axios'
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'
import {appVersionList} from '@/api/service'
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'download',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      versionType: 0,
      versionName: '',
      size: '',
      time: '',
      version: '',
      versionInfo: []
    }
  },
  watch: {
    versionType (val, oldVal) {
      console.log(val, oldVal)
      return val
    }
  },
  created () {
  },
  mounted () {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $('div.resetHeight').css('height', deviceWidth * 2000 / 750 + 'px')
    } else {
      // $('div.resetHeight').css('height', deviceWidth * 1700 / 1920 + 'px')
    }
    var url = window.location.pathname.split('/')
    if (url[2] === 'ios') {
      this.versionType = 2
    } else if (url[2] === 'android') {
      this.versionType = 1
    }
    this.getVersionInfo()
  },
  methods: {
    getVersionInfo () {
      appVersionList({
        pageNum: 1,
        pageSize: 2,
        typeId: this.versionType
      })
        .then(res => {
          this.versionName = res.data.data[0].versionName
          this.size = res.data.data[0].versionSize
          this.time = res.data.data[0].modifyTime.split(' ')[0]
          this.version = res.data.data
          this.versionInfo = res.data.data[0].updateDescription.replace(/\s/g, '').split(';')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download{
  max-width: 100%;
  height:100%;
}
.resetHeight>div>img{
  width:100%
}
.title{
  text-align: center;
  margin-top:20px;
  margin-bottom:20px
}
.title>img{
  vertical-align:middle;
  margin-right:5px
}
.text-center{
  text-align: center
}
button{
  color:#FFF;
  background: #3073ED;
}
.versionInfo{
  display:inline-block;
  width:220px
}
.versionTime{
  display:inline-block;
  width:200px
}
.urlImg{
  margin:20px 0;
  width:100%;
}
.button{
  text-align: center;
}
.button .el-button{
  width:95%;
  font-size: 14px;
  margin-bottom: 10px
}
.versionTitle1{
  margin:80px 0 20px;
  font-size: 14px
}
.versionTitle2{
  margin:35px 0 20px;
  font-size: 14px
}
.versionUpdateInfo{
  color:#8C8D8E;
  margin-bottom: 50px
}
.bg{
  background: #F9F9F9;
  text-align: center
}
.bg .el-col{
  border-bottom: 2px #FFF solid;
  /* height:35px;
  line-height: 35px */
}
.footer{
  position: fixed;
  bottom:0
}
.footer div{
  position: relative;
}
/* .footer img{
  width:100%
}
.footer .el-button{
  width:20%;
  position: absolute;
  top:50%;
  left:85%;
  transform: translate(-50%, -50%);
  border-radius:12px;
  cursor: pointer;
} */
</style>
