<template>
	<div>
	   <mt-swipe :auto="4000">
		  <!-- <mt-swipe-item v-for="item in lunbotuList" v-key="item.url">
		  	<img :src="item.img">
		  </mt-swipe-item> -->
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>	


		<!-- 六宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<a href="#">
                    <img src="../../assets/images/menu1.png">
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<a href="#">
                    <img src="../../assets/images/menu2.png">   
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<a href="#">
                    <img src="../../assets/images/menu3.png">
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<a href="#">
                    <img src="../../assets/images/menu4.png">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<a href="#">
                    <img src="../../assets/images/menu5.png">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<a href="#">
                   	<img src="../../assets/images/menu6.png">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul> 
	</div>
</template>


<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
				lunbotuList:[]   //保存轮播图的数组
			}
		},
		created(){
			// this.getLunbotu();
		},
		methods:{
			// getLunbotu(){
			// 	this.$http.get("http://vue.studyit.io/api/getlunbo").then(res=>{
			// 		// console.log(res.body)；
			// 		if(res.body.status===0){
			// 			//res.body.message是获取轮播图的数组
			// 			this.lunbotuList=res.body.message;
			// 			Toast("加载轮播图成功");
			// 		}else{
			// 			Toast("加载轮播图失败");
			// 		}
			// 	})
			// }
		}
	}
</script>


<style scoped>
	.mint-swipe{
		height:200px;
		
	}
	.mint-swipe-item{
		background: red;
	}
	img{
		width: 100%;
		height: 100%;
	}
	
    .mui-grid-view.mui-grid-9{
    	background: #fff;
    	border: 0;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    	border: none;
    }
    img{
    	width: 60px;
    	height: 60px;
    }
	
</style>