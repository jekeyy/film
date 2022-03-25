<template>
	<div id="header">
		{{msg}}
	</div>
</template>

<script>
export default{
	name: 'PageHeader',
	props: {
	  msg: String
	}
}
</script>

<style scoped>
	#header{
		height: 50px;
		background-color: #e54847;
		position: fixed;
		line-height: 50px;
		width: 100%;
		color: white;
		text-align: center;
		z-index: 100;
	}
</style>
