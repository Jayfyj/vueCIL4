<template>
  <div id="app">
      <myTitle/>
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
          </router-view>
      </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"></router-view>
     <myBottomTab/>
     <!-- <van-button type="primary">主要按钮</van-button> -->
  </div>
</template>

<script>
import myTitle from "./components/common/myTitle"
import myBottomTab from "./components/common/myBottomTab"

import { Button } from 'vant'

export default {
  name: "App",
  methods:{
    
  },
  components:{
    myTitle:myTitle,
    myBottomTab:myBottomTab,
    [Button.name]: Button
  },    
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

</style>
