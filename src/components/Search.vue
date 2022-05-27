<template>
  <div id="app">
	  <div class="sou-suo">
		<i class="fa fa-search"></i>
		<input type="text" v-model="selectVal" />
	  </div>
	  <div class="fen-lei">
	  	<p>电影/电视剧/综艺</p>
	  </div>
	<ul>
		<li><div v-for="item in nowPlayDatar()" :key="item.id" class="aaa">
			<div class="img-wraper"><img :src="item.img"></div>
			<div class="desc-wraper">
				<p class="name">{{item.name}}</p>
				<p><span class="desc-color">{{item.actors}}</span></p>
				<p class="desc-color">{{item.nums}}</p>
			</div>
			<div class="button-wraper">
				<p><span class="score">{{item.score}}</span></p>
			</div>	</div>
		</li>
	</ul> 
    
  </div>
</template>
<script>
	export default{
		name:'Now',
		data(){
			return{
				nowPlayData:[],
				selectVal:'',
			}
		},
		created(){
			this.getNowData();
		},
		methods: {
			nowPlayDatar(){
				if (!this.selectVal){
					return this.nowPlayData;
				}
				return this.Search
			},
			getNowData(){
				// var that = this;
				axios.get('/mock/nowPalyData.json')
				  .then(response => {
				    console.log(response);
					if(response.status == 200){
						if(response.data && response.data.nowPlayData){
							this.nowPlayData = response.data.nowPlayData;
						}
					}
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
			},
			computed:{
				Search(){
					if(this.selectVal){
						return this.nowPlayData.filter((value)=>{
							return value.name.includes(this.selectVal);
						});
					}
				}
			},
			
			// watch:{
			// 	selectVal(){
			// 		const result=[]
			// 		for (let i=0;i<this.nowPlayData.length;i++){
			// 			const listA=this.nowPlayData[i]
			// 			if(listA.value.search(this.selectVal)!==-1&&this.selectVal!==''){
			// 				result.push(this.nowPlayData[i].value)
			// 			}
			// 		}
			// 		this.nowPlayDatar=result
			// 	}
			// }
			// queryData(){
			// 		let nowPlayData=this.orgnowPlayData.filter(item=>item.indexOf(this.selectVal)>=0);
			// 		this.orgnowPlayData=nowPlayData;
			// },
			
			// 	nowPlayDatar:function(){
			// 		var selectVal=this.selectVal;
			// 		if(selectVal){
			// 			return this.nowPlayData.filter(function(product){
			// 				return Object.keys(product).some(function(key){
			// 					return String(product[key]).toLowerCase().indexOf(selectVal)>-1
			// 				})
			// 			})
			// 		}
			// 		return this.nowPlayData;
			// 	}
			// },
		
	}
</script>
<style scoped>
	.aaa{
		display: flex;
		flex-direction: row;
		margin-bottom: 10px;
	}
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


