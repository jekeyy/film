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
			cinemaList: [{
				id: 1,
				name: '大地影院延庆金锣湾店',
				price: 38.5,
				address: '延庆区北街39号H座首层',
				distance: 100
			},{
				id: 2,
				name: '燕山影剧院',
				price: 37.5,
				address: '房山区燕山岗南路3号',
				distance: 120
			},{
				id: 3,
				name: '万达影城昌平保利光魔店',
				price: 37.9,
				address: '昌平区鼓楼南街佳莲时代广场四层',
				distance: 80
			},{
				id: 4,
				name: '门头沟影剧院',
				price: 30.9,
				address: '门头沟区新桥大街12号',
				distance: 110
			}]
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
