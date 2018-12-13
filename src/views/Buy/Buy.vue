<template>
	<div>
		<!-- 封面图 -->
		<div class="cover-image">
			<img :src="data.cover_image">
		</div>
		<!-- 价格模块 -->
		<div class="price-wrap">
			<h1 class="title">{{data.title}}</h1>
			<h2 class="price">&yen;{{data.price}}</h2>
			<div class="brief">
				<span>运费：&nbsp;&yen;{{data.freight}}</span>
				<span>销量：&nbsp;{{data.sale_count}}</span>
				<span>库存：&nbsp;{{data.in_stock}}</span>
			</div>	
			<!-- 分享 -->
			<div class="share">
				<img src="./img/share@2x.png">
				<span>分享</span>
			</div>
		</div>
		<!-- 优惠模块 -->
		<div v-show="data.coupon>0" class="discount-wrap">
			<div class="name">优惠</div>
			<div class="coupon">领券后至少可减<b>&yen;{{data.coupon}}元</b></div>
			<div class="take"> 
				<span>领券</span> 
				<img src="./img/right-arr@2x.png"> 
			</div> 
		</div>
		<!-- 底部购物车 -->
		<div class="shopcart">
			<!-- 左侧 -->
			<div class="bottom-navbar">
				<div class="item">
					<img src="./img/shangcheng@2x.png">
					<span>店铺</span>
				</div>
				<div class="item">
					<img src="./img/kefu@2x.png">
					<span>客服</span>
				</div>
				<div class="item">
					<img src="./img/gouwuche@2x.png">
					<span>购物车</span>
				</div>
			</div>	
			<!-- 右侧 -->
			<div class="choose">
				<div class="add-to-car">加入购物车</div>	
				<div class="to-buy">加入购物车</div>	
			</div>
		</div>
	</div>
</template>

<script>
// import { getArticle } from '@/api/buy'
import rem from '../../remConfig'
rem()
import axios from 'axios'

export default{
	data() {
		return {
			data: {}
		}
	},
	created() {
		const id = this.$route.params && this.$route.params.id
		this.data.id = id
	  },
	mounted() {
		let that = this;
		// getArticle(this.baseUrl,this.data.id)
		// .then(res => {
  //         console.log('res')
  //       })
  //       .catch(res => {
  //       	console.log('catch')
  //       })

	  	axios({
		    method: 'post',
		    url: this.baseUrl + '/admin/v1/article/getArticle',
		    data: {
		    	access_token: '670026ba-d939-4803-990e-02d5aa0799bc',
		        data: '{"id":"56"}'
		    },
		    withCredentials:false
		})
		.then(function (res) {
		    console.log(res);
		    // 算了  就当数据拿到了
		    res = {"code":200,"message":"操作完成","time":"1544720784","data":{"id":63,"title":"Royal latex 2泰国皇家乳胶枕头原装进口正品天然橡胶保护颈椎枕芯","read_count":0,"content":"","news_url":"http:\/\/127.0.0.1:8080\/Buy\/12","keywords":"乳胶,枕头","sale_count":2563,"coupon":10,"freight":6,"in_stock":22252,"create_time":"2018-12-13 23:39:33","modify_time":"2018-12-13 23:39:33","create_by":0,"modified_by":0,"news_type":4,"add_read_count":0,"order_num":1,"cover_image":"https:\/\/oba-oss-hd.oss-cn-shanghai.aliyuncs.com\/test\/2018-12-13\/e13a7a90b7f441c2b9c20ff81fa0c30a-1544715665177.png","price":"256.00","show_flag":1,"release_time":"2018-12-13 23:41:46"}};
		    that.data = res.data;

		})
		.catch(function (error) {
		    console.log(error);
	   	});
	}
};
</script>

<style scope>
@import '../../styles/base.css';
body{
	background: #F5F5F5;
	padding-bottom: 1rem;
}
.cover-image{
	width: 100%;
	height: auto;
}
.cover-image img{
	display: block;
	width: 100%;
	height: auto;
}
.price-wrap{
	box-sizing: border-box;
	position: relative;
	padding: .3rem;
	background: #fff;
}
.price-wrap .title{
	font-size: 14px;
	line-height: .4rem;
	width: 5.4rem;
}
.price-wrap .price{
	color: #E01111;
	font-size: 14px;
	margin-top: .3rem;
}
.price-wrap .brief{
	margin-top: .26rem;
	display: flex;
	justify-content: space-between;
}
.price-wrap .brief span{
	color: #9A9A9A;
	font-size: 10px;
}
.price-wrap .share{
	position: absolute;
	right: 0;
	top: .46rem;
	width: 1.36rem;
	height: .6rem;
	line-height: .6rem;
	background: #DBDBDB;
	border-radius: .3rem 0 0 .3rem;
	color: #6A6A6A;
	font-size: 0;
	text-align: right;
}
.price-wrap .share>*{
	font-size: 12px;
	display: inline-block;
	vertical-align: middle;
}
.price-wrap .share img{
	width: .26rem;
}
.price-wrap .share span{
	margin-left: .1rem;
	margin-right: .2rem;
}
/*$优惠模块*/
.discount-wrap{
	margin-top: .2rem;
	width: 100%;
	height: .88rem;
	background: #fff;
	font-size: 12px;	
	line-height: .88rem;
}
.discount-wrap .name{
	float: left;
	color: #999999;
	margin-left: .3rem;
}
.discount-wrap .coupon{
	float: left;
	margin-left: .3rem;
}
.discount-wrap .coupon b{
	color: #E01111;
}
.discount-wrap .take{
	float: right;
	margin-right: .3rem;
	color: #999999;
	font-size: 0;
}
.discount-wrap .take>*{
	font-size: 12px;
	display: inline-block;
	vertical-align: middle;
}
.discount-wrap .take img{
	margin-left: .26rem;
	display: inline-block;
	width: .16rem;
}
.shopcart{
	position: fixed;
	width: 100%;
	max-width: 750px;
	height: 1rem;
	box-sizing: border-box;
	border-top: 1px solid #DEDEDE;
	background: #fff;
	left: 0;
	right: 0;
	margin: auto;
	bottom: 0;
}
.shopcart .bottom-navbar{
	display: flex;
	justify-content: space-around;
	width: 44%;
	height: 100%;
	box-sizing: border-box;
	float: left;
}
.shopcart .bottom-navbar .item{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	color: #6C6C6C;
}
.shopcart .bottom-navbar .item>img{
	margin-bottom: .1rem;
	height: .32rem;
}
.shopcart .choose{
	float: right;
	width: 56%;
	height: 100%;
	box-sizing: border-box;
}
.choose>*{
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	float: left;
	color: #fff;
	text-align: center;
	line-height: 1rem;
	font-size: 14px;
}

.choose .add-to-car{
	background: #FF9B18;
}
.choose .to-buy{
	background: #E01111;
}




</style>