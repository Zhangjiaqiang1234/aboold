<template>
    <div class='headers'>
      <router-link to='/index'><img class='logo' alt="ABO区块链" title="ABO区块链医疗" src='../assets/img/bg1/logo.png'></router-link>
      <ul>
        <li :class="isEn ? 'en' : 'zh'">
          <div @click="handleCommand"> <span :class="!isEn? 'activeLanguage': ''">{{$t("header.EN")}}</span>&nbsp;<span class="activeLanguage">|</span>&nbsp;<span :class="isEn? 'activeLanguage': ''">{{$t("header.CN")}}</span></div>
        </li>
        <li :class="isEn ? 'en' : 'zh'">
          <!-- <el-dropdown style="color:#FFF">
            <span class="el-dropdown-link">
              {{$t("header.downLoad")}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><a href="https://www.pgyer.com/IOSABO" target='_blank' nofollow style="color:#4F6890;font-family: Microsoft Yahei,Avenir,Helvetica,Arial,sans-serif;">{{$t("header.ios")}}</a></el-dropdown-item>
              <el-dropdown-item><a href="https://www.pgyer.com/AndroidABO" target='_blank' nofollow style="color:#4F6890;font-family: Microsoft Yahei,Avenir,Helvetica,Arial,sans-serif;">{{$t("header.android")}}</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <el-dropdown style="color:#FFF">
            <span class="el-dropdown-link">
              {{$t("header.downLoad")}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><router-link to='/download/ios'>{{$t("header.ios")}}</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to='/download/android'>{{$t("header.android")}}</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <!-- 白皮书 -->
        <!-- <li :class="isEn ? 'en' : 'zh'">
          <a v-if='isEn' href='http://www.abochain.io/ABO-EN0913.pdf' target="_blank">{{$t("header.WHITEPAPER")}}</a>
          <a v-else href='http://www.abochain.io/ABO-CN0913.pdf' target="_blank">{{$t("header.WHITEPAPER")}}</a>
        </li> -->
        <li :class="isEn ? 'en' : 'zh'">
          <a href='/index#roadmap'>{{$t("header.ROADMAP")}}</a>
        </li>
          <!-- <li><a href='#team'>TEAM</a></li> -->
        <li :class="isEn ? 'en' : 'zh'">
          <router-link to='/index'>{{$t("header.home")}}</router-link>
        </li>
      </ul>
    </div>
        <!-- <router-link to='/index'><img class='logo' alt="ABO区块链" title="ABO区块链医疗" src='../assets/img/bg1/logo.png'></router-link>
        <ul>
          <li :class="isEn ? 'en' : 'zh'">
            <router-link to='/index'>{{$t("header.home")}}</router-link>
          </li>
          <li :class="isEn ? 'en' : 'zh'">
            <a href='/index#roadmap'>{{$t("header.ROADMAP")}}</a>
          </li>
          <li :class="isEn ? 'en' : 'zh'">
            <el-dropdown style="color:#FFF">
              <span class="el-dropdown-link">
                {{$t("header.downLoad")}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><a href="https://www.pgyer.com/IOSABO" target='_blank' nofollow style="color:#4F6890;font-family: Microsoft Yahei,Avenir,Helvetica,Arial,sans-serif;">{{$t("header.ios")}}</a></el-dropdown-item>
                <el-dropdown-item><a href="https://www.pgyer.com/AndroidABO" target='_blank' nofollow style="color:#4F6890;font-family: Microsoft Yahei,Avenir,Helvetica,Arial,sans-serif;">{{$t("header.android")}}</a></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li :class="isEn ? 'en' : 'zh'">
            <div @click="handleCommand"> <span :class="!isEn? 'activeLanguage': ''">{{$t("header.EN")}}</span>&nbsp;<span class="activeLanguage">|</span>&nbsp;<span :class="isEn? 'activeLanguage': ''">{{$t("header.CN")}}</span></div>
          </li>
          <li><a href='#team'>TEAM</a></li>
        </ul>
      </div> -->
  <!-- <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><router-link to='/'><img alt="ABO区块链" title="ABO区块链医疗" src="../assets/img/logo.png"></router-link></a>
        </div>
      <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><router-link to='/'>{{$t("header.home")}}</router-link></li>
          <li><router-link to='/'>{{$t("header.ROADMAP")}}</router-link></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t("header.downLoad")}}<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="https://www.pgyer.com/IOSABO" nofollow>{{$t("header.ios")}}</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="https://www.pgyer.com/AndroidABO" nofollow>{{$t("header.android")}}</a></li>
            </ul>
          </li>
          <li>
            <a @click="handleCommand"><span :class="!isEn? 'activeLanguage': ''" nofollow>{{$t("header.EN")}}</span>&nbsp;|&nbsp;<span :class="isEn? 'activeLanguage': ''">{{$t("header.CN")}}</span></a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </nav> -->
</template>

<script>
// import {logout} from '@/api/service.js'
// import {messageInfo} from '@/common/common.js'
export default {
  name: 'headers',
  data () {
    return {
      isEn: ''
    }
  },
  computed: {
    // username () {
    //   return sessionStorage.getItem('username')
    // }
  },
  watch: {
    isEn (val, oldVal) {
      return val
    }
  },
  mounted () {
    this.isEn = sessionStorage.getItem('encn') === 'en-US' ? 1 : 0
  },
  methods: {
    // logout () {
    //   logout()
    //   sessionStorage.clear()
    //   this.$router.push({ name: 'index' })
    // },
    handleCommand () {
      if (this.$i18n.locale === 'en-US') {
        this.$i18n.locale = 'zh-CN'
        sessionStorage.setItem('encn', 'zh-CN')
        this.isEn = 0
      } else {
        this.$i18n.locale = 'en-US'
        sessionStorage.setItem('encn', 'en-US')
        this.isEn = 1
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.headers{
    width:100%;
    height:100px;
    position: relative;
}

.headers>a>.logo {
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(0, -50%);
  height: 30px;
  cursor: pointer;
  z-index: 4;
}

.headers>ul {
  position: absolute;
  top: 50%;
  right: 10%;
  width:80%;
  transform: translate(0, -50%);
  color: #FFF;
  z-index: 3;
}

.headers>ul>li {
  list-style: none;
  float: right;
  color: #FFF;
}
.en{
   margin-right:3%;
}
.zh{
   margin-right:6%;
}
.headers>ul>li>a {
  font-size: 14px;
  color: #FFF;
  cursor: pointer;
}
.headers>ul>li{
  font-size: 14px;
  cursor: pointer;
}
.activeLanguage{
  color:#535353
}
a {
  text-decoration: none;
  cursor: pointer;
}
button{
  cursor: pointer;
}
/* .navbar{
  background: linear-gradient(to right, #71C1F7 , #3073ED)
}
.navbar .navbar-nav>li>a{
  color:#FFF
}
.navbar-brand img {
    width: 138px;
}
li{
  cursor: pointer;
}
.activeLanguage{
  color:#535353;
} */
</style>
