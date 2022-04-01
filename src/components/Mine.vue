<template>
	<div id="mine">
		<div id="login">
			<form action="#">
				<p><input type="text" name="username" placeholder="账号/手机号/邮箱"/></p>
				<p><input type="password" name="password" placeholder="请输入您的密码"/></p>
				<p><button>登录</button></p>
			</form>
		</div>
		<div id="find-password">
			<span>立即注册</span>
			<span>找回密码</span>
		</div>
	</div>
</template>

<script>
export default{
	name: 'Mine'
}
</script>

<style scoped>
	#mine{
		padding-top: 50px;
		padding-bottom: 50px;
	}
	input{
		border: none;
		border-bottom: 1px solid #ccc;
		width: 100%;
		height: 40px;
		padding-left: 10px;
		outline: 0;
	}
	button{
		width: 95%;
		margin: 10px;
		background-color: #e54847;
		color: white;
		font-size: 12px;
		border-radius: 5px;
		border: none;
		height: 40px;
	}
	span{
		color: #e54847;
		font-size: 12px;
	}
	#find-password span:first-child{
		float: left;
		margin-left: 10px;
	}
	#find-password span:last-child{
		float: right;
		margin-right: 10px;
	}
</style>
