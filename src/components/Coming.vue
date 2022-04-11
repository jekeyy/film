<template>
  <div id="now">
	<ul>
		<li v-for="item in comingPalyData" :key="item.id">
			<div class="img-wraper"><img :src="item.img" ></div>
			<div class="desc-wraper">
				<p class="name">{{item.name}}</p>
				<p><span class="score">{{item.score}}</span><span class="desc-color">想看</span></p>
				<p class="desc-color actors">{{item.actors}}</p>
				<p class="desc-color">未来30天内上映</p>
			</div>
			<div class="button-wraper">
				<button type="button">预售</button>
			</div>	
		</li>
	</ul>  
    
  </div>
</template>
<script>
	export default{
		name:'Coming',
		data(){
			return{
				comingPalyData:[]
			}
		},
		created(){
			this.getcomingPalyData();
		},
		methods: {
			getcomingPalyData(){
				// var that = this;
				axios.get('/mock/comingPalyData.json')
				  .then(response => {
				    console.log(response);
					if(response.status == 200){
						if(response.data && response.data.comingPalyData){
							this.comingPalyData = response.data.comingPalyData;
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
		font-size: 15px;
	}
	.name{
		font-size: 18px;
		font-weight: bold;
	}
	.score{
		color: #666;
		font-size: 15px;
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
		background-color:#3ea0e7;
		color: white;
		border-radius: 5px;
	}
</style>


