<template>
  <div id="now">
	<ul>
		<li v-for="item in nowPlayData" :key="item.id">
			<div class="img-wraper"><img :src="item.img" ></div>
			<div class="desc-wraper">
				<p class="name">{{item.name}}</p>
				<p><span class="desc-color">观众评</span><span class="score">{{item.score}}</span></p>
				<p class="desc-color actors">{{item.actors}}</p>
				<p class="desc-color">{{item.nums}}</p>
			</div>
			<div class="button-wraper">
				<button type="button">购票</button>
			</div>	
		</li>
	</ul>  
    
  </div>
</template>
<script>
	export default{
		name:'Now',
		data(){
			return{
				nowPlayData:[]
			}
		},
		created(){
			this.getNowData();
		},
		methods: {
			getNowData(){
				// var that = this;
				axios.get('/mock/nowPalyData.json')
				  .then(response => {
				    console.log(response);
					if(response.status == 200){
						if(response.data && response.data.nowPlayData){
							this.nowPlayData = response.data.nowPlayData;
						}
					}
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
		}
	}
</script>
<style scoped>
	#now{
		margin-bottom: 50px;
	}
	.button-wraper{
		float: right;
		line-height: 80px;
	}
	img{
		width: 70px;
	}
	.img-wraper{
		width: 23%;
		margin-bottom: 10px;
		float: left;
	}
	.desc-wraper{
		width: 60%;
		float: left;
	}
	li{
		margin: 15px;
		/* 清除浮动 */
		overflow: hidden;
		border-bottom: 1px solid #CCCCCC;
	}
	.desc-color{
		color: #666;
		font-size: 14px;
	}
	.name{
		font-size: 18px;
		font-weight: bold;
	}
	.score{
		color: #FF9900;
		font-weight: bold;
		margin-left: 5px;
	}
	.actors{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	p{
		line-height: 25px;
	}
	button{
		border: none;
		width: 50px;
		height: 30px;
		background-color: #E54847;
		color: white;
		border-radius: 5px;
	}
</style>


