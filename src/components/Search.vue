<template>
  <div id="search">
	  <div class="sou-suo">
		<i class="fa fa-search"></i>
		<input type="text"/>
	  </div>
	  <div class="fen-lei">
	  	<p>电影/电视剧/综艺</p>
	  </div>
	<ul>
		<li>
			<div class="img-wraper"><img src="/images/001.png" ></div>
			<div class="desc-wraper">
				<p class="name">机械师2</p>
				<p><span class="desc-color">剧情，喜剧，犯罪</span></p>
				<p class="desc-color">2020-6-30</p>
			</div>
			<div class="button-wraper">
				<p><span class="score">8.9</span></p>
			</div>	
		</li>
	</ul>  
    
  </div>
</template>
<script>
	// export default{
	// 	name:'Now',
	// 	data(){
	// 		return{
	// 			nowPlayData;[{
	// 				'name':'hh'
	// 			}]
	// 		}
	// 	}
	// }
</script>
<style scoped>
	.sou-suo{
		background-color: #f5f6f5;
		height: 50px;
		text-align: center;
		border-bottom: 1px solid #CCC;
		position: relative;
	}
	.sou-suo input{
		width: 90%;
		height: 30px;
		margin-top: 10px;
		background-color: white;
		color: #000;
		text-align: left;
		padding-left: 25px;
		font-size: 20px;
		border-radius: 5px;
		border: #CCCCCC 1px solid;
	}
	.sou-suo i{
		position: absolute;
		top: 20px;
		margin-left: 10px;
	}
	.fen-lei{
		height: 50px;
		border-bottom: #CCCCCC 1px solid;
	}
	.fen-lei p{
		font-size: 20px;
		padding-left: 10px;
		font-weight: 600;
		margin-top: 20px;
		color: #9e9e9e;
	}
	.button-wraper{
		float: right;
		line-height: 80px;
	}
	input{
		color: #000000;
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
		padding: 15px;
		/* 清除浮动 */
		overflow: hidden;
		border-bottom: 1px dashed #CCCCCC;
	}
	.desc-color{
		color: #666;
		font-size: 14px;
	}
	.name{
		font-size: 20px;
		font-weight: bold;
	}
	.score{
		font-size: 16px;
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


