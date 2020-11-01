
<template>
  <div class="mytitle" v-if="isShow">
    <div class="titleLeft">
      <i class="iconfont icon-fanhui myIcon" v-if="LeftShow" @click="leftClick()"></i>
    </div>
    <div class="titleCenter">
      <span>{{title}}</span>
    </div>
    <div class="titleRight">
      <i class="iconfont icon-kefu myIcon" v-if="RightShow" @click="rightClick()"></i>
    </div>
  </div>
</template>

<script>



export default {
  name: "MyTitle",
  props:{
    //是否显示
    isShow:{
      type:Boolean,
      default: true,
    },
    //左边图案
    LeftShow:{
      type:Boolean,
      default: true,
    },
    //右边图案
    RightShow:{
      type:Boolean,
      default: false,
    },
    //标题
    title:{
      type:String,
      default: "",
    },
  },
  mounted(){
   
  },
  data(){
    return{
      
    }
  },
  methods:{
    leftClick(){
      this.$router.go(-1)
    },
    rightClick(){
      this.$emit("rightClick")
    }
  },
  components:{
  
  }
  
};
</script>

<style scoped="scoped" lang="less">
//高度
@mytitleHeight:100px;
//背景色
@mytitleBG:PINK;
//左右padding
@paddingLAR:30px;
//标题字体和颜色
.titleFontSizeColor(){
  font-size: 40px;
  color:white;
}

//图标大小和颜色
.titleIconSizeColor(){
  font-size: 60px;
  color: white;
}


.mytitle{
  height: @mytitleHeight;
  background: @mytitleBG;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 @paddingLAR;
  box-sizing: border-box;
  .titleLeft{
    flex: 1;
    height: @mytitleHeight;
    // background: blue;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    >.myIcon{
      .titleIconSizeColor()
    }
  }
  .titleCenter{
    flex: 3;
    height: @mytitleHeight;
    // background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    >span{
      .titleFontSizeColor()
    }
  }
  .titleRight{
    flex: 1;
    height: @mytitleHeight;
    // background: yellow;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    >.myIcon{
     .titleIconSizeColor()
    }
  }
}
</style>
