
<template>
  <div class="myBottomTab">
    <div class="myBottomTab_Btn" v-for="(item,index) in tabList" :key="index" @click="tabClick(item)">
      <i :class="[item.tabIcon,{'active':item.tabActive}]"></i>
      <span :class="[{'active':item.tabActive}]">{{item.tabName}}</span>
    </div>
  </div>
</template>

<script>



export default {
  name: "MyBottomTab",
  mounted(){
   
  },
  data(){
    return{
      tabList:[
        {tabIcon:"iconfont icon-shouye1",tabSelectIcon:"",tabName:"首页",tabURL:"Home",tabActive:true,tabId:0},
        {tabIcon:"iconfont icon-fenlei1",tabSelectIcon:"",tabName:"分类",tabURL:"Search",tabActive:false,tabId:1},
        {tabIcon:"iconfont icon-sousuo",tabSelectIcon:"",tabName:"搜索",tabURL:"",tabActive:false,tabId:2},
        {tabIcon:"iconfont icon-wode1",tabSelectIcon:"",tabName:"我的",tabURL:"",tabActive:false,tabId:3}
      ]
    }
  },
  methods:{
    tabClick(item){
      if(item.tabActive)return;
      this.tabList.forEach((ele,index) => {
        if(ele.tabId!=item.tabId){
          ele.tabActive =false;
        }else{
          ele.tabActive = true;
          this.$router.push({
            name:ele.tabURL,
          })
        }
      });
    }
  },
  components:{
  
  }
  
};
</script>

<style scoped="scoped" lang="less">
//高度
@myBottomTabHeight:100px;
//背景色
@myBottomTabBG:PINK;


.myBottomTab{
  position: fixed;
  height: @myBottomTabHeight;
  bottom: 0;
  right: 0;
  left: 0;
  border-top:1px solid #cccccc;
  // background: @myBottomTabBG;
  display: flex;
  justify-content: center;
  align-items: center;
  .myBottomTab_Btn{
    padding: 0 10px;
    box-sizing: border-box;
    height:  @myBottomTabHeight;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i{
      font-size: 44px;
    }
    span{
      font-size: 28px;
    }
    .active{
      color: red;
    }
  }
}
</style>
