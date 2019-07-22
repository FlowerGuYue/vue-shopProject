<template>
	<div class="newsInfo_container">
		<h3 class="title">{{newsInfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{newsInfo.add_time|dateFormat('YYYY-MM-DD')}}</span>
			<span>点击：{{newsInfo.click}}</span>
		</p>
		<hr>
		<div class="content" v-html='newsInfo.content'>
			
		</div>
		

	</div>
</template>


<script>
	export default{
		data(){
			return{
				//将url地址中传递过来的id值挂载到data上
				id:this.$route.params.id,
				newsInfo:[]
			}
		},
		created(){
			this.getNewsInfo();
		},
		methods:{
			getNewsInfo(){
				this.$http.get('api/getnes/'+this.id).then(res=>{
					if(res.body.status===0){
						this.newsInfo=res.body.message[0];
					}else{

					}
				})
			}
		}
	}

</script>

<style lang="scss">
//这里用sass写的 不会造成全局污染
	.newsInfo_container{
		padding: 0 4px;
		.title{
			font-size: 16px;
			text-align: center;
			margin:15px 0;
			color:red;
		}
		.subtitle{
			font-size:13px;
			display: flex;
			justify-content: space-between;
			color:blue;
		}
		.content{
			img{
				width: 100%; //要把scoped去掉才起作用
			}
		}
	}
</style>