<template>
  <div>
    <!--mescroll滚动区域的基本结构-->
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit" id="mescrollID">
      <div>
        <!-- <p class="notice">本Demo的下拉刷新: 添加新数据到列表顶部</p> -->
        <ul id="newsList" class="news-list" ref="aa">
          <li v-for="news in dataList" :key="news.id">
            <p>{{news.title}}</p>
            <p class="new-content">{{news.content}}</p>
          </li>
        </ul>
        <!-- 没有数据显示 -->
        <div id="emptyID"></div>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>

import MescrollVue from 'mescroll.js/mescroll.vue' 
import { urlApi } from '../api/urlApi'
export default {
	name: 'Home',
	data () {
		return{
      lastSrcoll:0,
			mescroll: null, // mescroll实例对象
      mescrollDown:{}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: { // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        auto:true,
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
                        // 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
                        // 这就是为什么无更多数据有时候不显示的原因
        toTop: {
          //回到顶部按钮
          src: "./static/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        },
        empty: {
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "emptyID", //父布局的id (1.3.5版本支持传入dom元素)
          icon: "./static/mescroll/mescroll-empty.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      },
      dataList: [] // 列表数据
		}
  },
  //生命周期，一进入获取上一次的距离恢复原来位置
  activated(){
    if(this.lastSrcoll){
      $("#mescrollID").scrollTop(this.lastSrcoll)
    }
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 滚动到原来的列表位置,恢复顶部按钮和isBounce的配置
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter()
      vm.lastSrcoll = vm.$refs.mescroll.lastScrollTop
      
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置顶部按钮或isBounce,则beforeRouteLeave不用写
    // 记录列表滚动的位置,隐藏顶部按钮和isBounce的配置
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
    this.lastSrcoll = this.$refs.mescroll.lastScrollTop
    next()
  },
	methods: {
		// mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit (mescroll) {
      this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
      
    },

    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      var params = {...urlApi.list1}
      params.jsonData = {
        ...this.mescrollUp.page
      }
      
      this.$sys_doAjax(params ,(res)=>{
        // 请求的列表数据
        let arr = res.data
        console.log(arr)
        // 如果是第一页需手动置空列表
        if (page.num === 1) this.dataList = []
        // 把请求到的数据添加到列表
        this.dataList = this.dataList.concat(arr)
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(arr.length)
        })
      },(err)=>{
        console.log(err)
        // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        mescroll.endErr()
      })
    }
	},
	components:{
		MescrollVue // 注册mescroll组件
	}
}
</script>

<style scoped lang="less">
.mescroll {
    position: fixed;
    top: 100px;
    bottom: 100px;
    height: auto;
}
.news-list li {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .news-list .new-content {
    font-size: 14px;
    margin-top: 6px;
    margin-left: 10px;
    color: #666;
  }
</style>
