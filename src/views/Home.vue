<template>
  <div>
<<<<<<< HEAD
	<myScroll></myScroll>
=======
	<div class="myChooseListWarp">
		<!-- 数据数组 -->
		<div class="myChooseList" v-for="(item,index) in myList" :key="index">
			<div class="myChooseListIcon" @click.stop="myChooseCheck(item)">
				<div class="myIconWarp" :style='{
						"border-color":item.checked?themeColor:"#f7f7f7"
						}'>
					<div class="myIconColor" 
					:style='{
						"background":item.checked?themeColor:""
						}'
					></div>
				</div>
			</div>
			<div class="myChooseListContent">
				{{item.content}}
			</div>
		</div>
	</div>
	<div class="myChooseAllBtnWarp">
		<div class="myChooseAllBtnWarpIcon" @click="myAllChooseCheck()">
			<div class="myAllIconWarp"
			:style='{
				"border-color":allChecked?themeColor:"#f7f7f7"
				}'>
				<div class="myAllIconColor" 
				:style='{
					"background":allChecked?themeColor:"",
					}'
				></div>
			</div>
			<span class="myAllIconText">全部</span>
		</div>
		<div class="myChooseAllBtnWarpContent">
			
		</div>
	</div>
>>>>>>> 48e2c4f93e986ef6075d57834e93c95303dd03ea
  </div>
</template>

<script>
<<<<<<< HEAD

import myScroll from '../components/common/myScroll.vue'
export default {
	name: 'Home',
	data () {
		return{
				
=======
import{ urlApi } from '@/api/urlApi'

export default {
  name: 'Home',
  data () {
	return{
		//主题色
		themeColor:"red",
		//显示数组
		myList:[
			{"checked":true,"content":"1"},
			{"checked":true,"content":"2"},
			{"checked":false,"content":"3"},
			{"checked":true,"content":"4"},
			{"checked":true,"content":"5"},
		],
		//全选checked
		allChecked:false,
		//计算所有选中的
		allCountChecked:4
	}
  },
  mounted () {
    
  },
  methods: {
	myChooseCheck(item){
		item.checked = !item.checked;
		this.isAllChecked(item.checked)
		console.log(item)
	},
	//全选
	myAllChooseCheck(){
		console.log(this.allChecked)
		this.allChecked = !this.allChecked;
		this.myList.forEach((ele,index)=>{
			ele.checked = this.allChecked
		})
		if(this.allChecked){
			this.allCountChecked = this.myList.length;
		}else{
			this.allCountChecked = 0;
>>>>>>> 48e2c4f93e986ef6075d57834e93c95303dd03ea
		}
	},
	mounted () {

	},
	methods: {
		
	},
	components:{
		myScroll
	}
<<<<<<< HEAD
=======
  },
  	mounted(){
		var data = {
			servicePath:urlApi.getUserStatus.url,
			jsonData:{
				id:123
			},
			urlMethod:urlApi.getUserStatus.urlMethod,
		}
		this.$sys_doAjax(data,(res)=>{
			console.log(res)
			var arr = res.data
			this.allCountChecked = arr.length
			arr.forEach((ele,ind)=>{
				ele.checked = true
				ele.content = ele.username
				if(!ele.checked){
					this.allCountChecked--
				}
			})
			if(this.allCountChecked == arr.length){
				this.allChecked = true
			}else{
				this.allChecked = false
			}
			this.myList = arr
		},(err)=>{
			console.log(err)
		})
	}
>>>>>>> 48e2c4f93e986ef6075d57834e93c95303dd03ea
}
</script>

<style scoped lang="less">
<<<<<<< HEAD

=======
 .myChooseListWarp{
	.myChooseList{
		height: 200px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #f7f7f7;
		margin-bottom:5px ;
		.myChooseListIcon{
			flex:1;
			height: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			background: pink;
			.myIconWarp{
				width: 34px;
				height: 34px;
				border-radius:34px;
				padding: 4px;
				box-sizing: border-box;
				border-width:1px;
				border-style: solid;
				.myIconColor{
					width: 100%;
					height: 100%;
					border-radius:29px;
				}
			}
		}
		.myChooseListContent{
			flex:9;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background: burlywood;
		}
		
	}
 }
 .myChooseAllBtnWarp{
	height: 150px;
	width: 100%;
	padding: 0 30px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 0;
	.myChooseAllBtnWarpIcon{
		flex: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		background: green;
		.myAllIconWarp{
			width: 34px;
			height: 34px;
			border-radius:34px;
			padding: 4px;
			box-sizing: border-box;
			border-width:1px;
			border-style: solid;
			.myAllIconColor{
				width: 100%;
				height: 100%;
				border-radius:34px;
			}
		}
		.myAllIconText{
			font-size: 40px;
			margin-left: 10px;
		}
	}
	.myChooseAllBtnWarpContent{
		flex: 8;
	}
}
>>>>>>> 48e2c4f93e986ef6075d57834e93c95303dd03ea
</style>
