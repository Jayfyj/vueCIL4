<template>
  <div>
	<div class="myChooseListWarp">
		<!-- 数据数组 -->
		<div class="myChooseList" v-for="(item,index) in myList" :key="index">
			<div class="myChooseListIcon" @click="myChooseCheck(item)">
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
  </div>
</template>

<script>


export default {
  name: 'MyChooseAll',
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
	},
	//全选
	myAllChooseCheck(){
		this.allChecked = !this.allChecked;
		this.myList.forEach((ele,index)=>{
			ele.checked = this.allChecked
		})
		if(this.allChecked){
			this.allCountChecked = this.myList.length;
		}else{
			this.allCountChecked = 0;
		}
		console.log(this.myList)
	},
	//每一次点击判断
	isAllChecked(flag){
		if(flag){
			this.allCountChecked ++;
		}else{
			if(this.allCountChecked <= 0){
				this.allCountChecked = 0;
			}else{
				this.allCountChecked --;
			}
		}
		if(this.allCountChecked == this.myList.length){
			this.allChecked = true
		}else{
			this.allChecked = false
		}
	}
  },
}
</script>

<style scoped lang="less">
 .myChooseListWarp{
	.myChooseList{
		height: 200px;
		width: 100%;
		padding: 1px 30px ;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #f7f7f7;
		.myChooseListIcon{
			flex:1;
			height: 100%;
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
</style>
