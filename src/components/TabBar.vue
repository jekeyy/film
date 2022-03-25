<template>
	<div id="footer">
		<ul>
			<router-link tag="li" to="/movie">
				<i class="fa fa-film"></i>
				<p>电影</p>
			</router-link>
			<router-link tag="li" to="/cinema">
				<i class="fa fa-youtube-square"></i>
				<p>影院</p>
			</router-link>
			<router-link tag="li" to="/mine">
				<i class="fa fa-user-circle"></i>
				<p>我的</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TabBar'
}
</script>

<style scoped>
	#footer{
		position: fixed;
		bottom: 0px;
		height: 50px;
		width: 100%;
		border-top: 2px solid #ebe8e3;
		z-index: 100;
		background-color: white;
	}
	ul li{
		display: inline-block;
		width: 33%;
		text-align: center;
		font-size: 12px;
	}
	ul{
		margin-top: 8px;
	}
	i{
		font-size: 20px;
	}
	.router-link-active{
		color: #f03d37;
	}
</style>
