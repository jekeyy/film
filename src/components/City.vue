<template>
  <div id="city">
    <div class="city-wraper">
		<div>
			<P class="first hot-city">热门城市</P>
			<P>
				<button>北京</button>
				<button>上海</button>
				<button>广东</button>
				<button>合肥</button>
				<button>天津</button>
			</P>
		</div>
		<div>
			<p class="first">A</p>
			<p>阿克苏</p>
			<p>安康</p>
			<p>安庆</p>
		</div>
		<div>
			<p class="first">B</p>
			<p>白山</p>
			<p>白城</p>
			<p>宝鸡</p>
		</div>
		<div>
			<p class="first">C</p>
			<p>沧州</p>
			<p>长春</p>
			<p>昌吉</p>
		</div>
		<div>
			<p class="first">D</p>
			<p>大理</p>
			<p>大连</p>
			<p>大庆</p>
		</div>
		<div>
			<p class="first">E</p>
			<p>鄂尔多斯</p>
			<p>恩施</p>
			<p>鄂州</p>
		</div>
	</div>
    <div class="letter-wraper">
		<p>A</p>
		<p>B</p>
		<p>C</p>
		<p>D</p>
		<p>E</p>
	</div>
  </div>
</template>
<script type="text/javascript">
export default{
	name:'City'
}
</script>
<style scoped>
	.city-wraper{
		width: 90%;
		float: left;
		border-right: 1px solid #ccc;
		background-color: #fff5f0;
	}
	#city{
		overflow: hidden;
	}
	.letter-wraper{
		width: 10%;
		position: fixed;
		right: 0px;
		text-align: center;
		margin-top: 200px;
	}
	.first{
		background-color: #f0f0f0;
	}
	.city-wraper p{
		padding-left: 10px;
		line-height: 30px;
	}
	.letter-wraper p{
		line-height: 30px;
	}
	button{
		background-color: white;
		border: none;
		border: 1px solid #ccc;
		width: 80px;
		height: 30px;
		margin: 10px;
	}
	.hot-city{
		margin-top: 20px;
	}
</style>

