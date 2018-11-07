<template>
    <div class='footers'>
          <el-row>
            <el-col>
              <el-row type="flex" justify="center" style="height:50px">
                <el-col :span='1' style="text-align:center"  :class="{'show':!wx,'hidden':wx}">
                    <a href=''>
                    <img  class="img2" src='../assets/img/footer/wx2.jpg' alt=''>
                    </a>
                </el-col>
                <el-col :span='1' style="text-align:center"  :class="{'show':!it,'hidden':it}">
                    <a href=''>
                    <img  class="img2" src='../assets/img/footer/telegram2.jpg' alt=''>
                    </a>
                </el-col>
                <el-col :span='1' style="text-align:center" :class="{'show':!wx,'hidden':wx}">
                                <a href=''>
                    <!--<img  class="img2" src='../assets/img/footer/wx2.jpg' alt=''>-->
                    </a>
                </el-col>
                <el-col :span='1'  style="text-align:center" :class="{'show':!wx,'hidden':wx}" >
                                <a href=''>
                    <!--<img  class="img2" src='../assets/img/footer/wx2.jpg' alt=''>-->
                    </a>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span='1' style="text-align:center" @mouseenter.native="showQRCode(1)" @mouseleave.native="hiddenQRCode(1)">
                    <a href=''>
                    <img  class="img1" src='../assets/img/footer/wx.png' alt=''>
                    </a>
                </el-col>
                <el-col :span='1' style="text-align:center" @mouseenter.native="showQRCode(2)" @mouseleave.native="hiddenQRCode(2)">
                  <a href='https://t.me/ABOChain'>
                      <img class="img1" src='../assets/img/footer/it.png' alt=''>
                    </a></el-col>
                <el-col :span='1' style="text-align:center">
                  <a href='https://www.facebook.com/abo.hello.98'>
                    <img class="img1" src='../assets/img/footer/fb.png' alt=''>
                  </a></el-col>
                <el-col :span='1' style="text-align:center">
                  <a href='https://twitter.com/HelloABOs/status/1016157479581900800?s=05'>
                    <img class="img1" src='../assets/img/footer/tw.png' alt=''>
                  </a></el-col>
              </el-row>
              <el-row>
                <p style="text-align:center;font-size:0.6rem">Copyright © 2018 ABOCHINA FOUNDATION LTDA All Right Reserved </p>
              </el-row>
            </el-col>
          </el-row>
    </div>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {
      wx: true,
      it: true
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    showQRCode (params) {
      if (params === 1) this.wx = false
      if (params === 2) this.it = false
    },
    hiddenQRCode (params) {
      if (params === 1) this.wx = true
      if (params === 2) this.it = true
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

.footers>.el-row>.el-col{
  margin: 0 auto;
  width:100%;
  height:30%;
  text-align: center
}
.img1 {
  width:60%;
  cursor: pointer;
}
.img2{
  width:100%;
  cursor: pointer;
}
.show{
  opacity: 1
}
.hidden{
  opacity: 0
}
</style>
