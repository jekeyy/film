<template>
	<div id="movie">
		<div id="movie-tab">
			<router-link tag="span" to="/movie/city">北京<i class="fa fa-caret-down"></i></router-link>
			<router-link tag="span" to="/movie/now">正在热映</router-link>
			<router-link tag="span" to="/movie/coming">即将上映</router-link>
			<router-link tag="span" to="/movie/search"><i class="fa fa-search"></i></router-link>
		</div>
		<hr >
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		
	</div>
</template>

<script>
</script>

<style scoped>
	hr{
		border: 0;
		border-bottom: 1px solid #ccc;
		margin-top: 1px;
	}
	#movie{
		padding-top: 50px;
	}
	#movie-tab span{
		width: 25%;
		display: inline-block;
		text-align: center;
	}
	.fa-caret-down{
		margin-left: 5px;
	}
	#movie-tab{
		height: 40px;
		line-height: 40px;
	}
	#movie-tab span:not(:first-child){
		font-weight: bold;
		color: #666;
	}
	.fa-search{
		color: #E54847;
		font-size: 22px;
	}
	#movie-tab span.router-link-active{
		color: #f03d37;
		border-bottom: 2px solid #f03d37;
	}
</style>
