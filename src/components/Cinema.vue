<template>
	<div id="cinema">
		<div id="tab">
			<span>全城<i class="fa fa-caret-down"></i></span>
			<span>品牌<i class="fa fa-caret-down"></i></span>
			<span>特色<i class="fa fa-caret-down"></i></span>
		</div>
		<div>
			<ul>
				<li v-for="item in cinemaList" :key="item.id">
					<p class="first"><span>{{item.name}}</span><span>{{item.price}}</span><span>元起</span></p>
					<p class="second"><span>{{item.address}}</span><span>>{{item.distance}}km</span></p>
					<p class="third"><span>小吃</span><span>折扣卡</span></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	name: 'Cinema',
	data(){
		return {
			cinemaList: []
		}
	},
	created(){
		this.getCinemaData();
	},
	methods: {
		getCinemaData(){
			// var that = this;
			axios.get('/mock/cinema.json')
			  .then(response => {
			    console.log(response);
				if(response.status == 200){
					if(response.data && response.data.cinemaList){
						this.cinemaList = response.data.cinemaList;
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
	#cinema{
		padding-top: 50px;
		padding-bottom: 50px;
	}
	#tab span{
		width: 33%;
		display: inline-block;
		text-align: center;
	}
	i{
		padding-left: 5px;
	}
	#tab{
		border-bottom: 1px solid #ccc;
		height: 40px;
		line-height: 40px;
	}
	li{
		margin: 10px;
		border-bottom: 1px solid #ccc;
	}
	.first span:not(:first-child){
		color: #e54847;
	}
	.first span:nth-child(2){
		margin: 0 3px;
	}
	.first span:last-child{
		font-size: 12px;
	}
	.second span{
		color: #999;
		font-size: 12px;
	}
	.second span:last-child{
		position: absolute;
		right: 10px;
	}
	.third span{
		color: #f90;
		border: 1px solid #f90;
		font-size: 14px;
	}
	p{
		margin: 5px 0;
	}
	.third{
		margin-bottom: 12px;
	}
</style>
