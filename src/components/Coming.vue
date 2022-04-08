<template>
  <div id="now">
	<ul>
		<li>
			<div class="img-wraper"><img src="/images/001.png" ></div>
			<div class="desc-wraper">
				<p class="name">机械师2：复活</p>
				<p><span class="desc-color">观众评</span><span class="score">8.9</span></p>
				<p class="desc-color actors">主演： 杰森·斯坦森 杰西卡·阿尔芭 汤米·李·琼斯 杨紫琼 山姆·哈兹尔丁</p>
				<p class="desc-color">今天50家影院放映800场</p>
			</div>
			<div class="button-wraper">
				<button type="button">购票</button>
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
		background-color: green;
		color: white;
		border-radius: 5px;
	}
</style>


