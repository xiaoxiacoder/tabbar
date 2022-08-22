<template>
  <div>
    <!-- 头部 -->
    <MyHeader :background="'blue'" :title="'Table案例'"></MyHeader>
    <!-- 三个组件的切换显示 -->
    <div class="setP">

    <componet :is="comName"></componet>
    </div>
    <!-- 底部导航 -->
    <MyTabBar :arr="tabList" @changeCom="changeFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyTabBar from './components/MyTabBar.vue';
import MyGoodsList from './components/views/MyGoodsList.vue';
import MyGoodsSearch from './components/views/MyGoodsSearch.vue';
import MyUserInfo from './components/views/MyUserInfo.vue';
export default {
    data() {
        return {
            tabList: [
                {
                    iconText: "icon-shangpinliebiao",
                    text: "商品列表",
                    componentName: "MyGoodsList"
                },
                {
                    iconText: "icon-sousuo",
                    text: "商品搜索",
                    componentName: "MyGoodsSearch"
                },
                {
                    iconText: "icon-user",
                    text: "我的信息",
                    componentName: "MyUserInfo"
                }
            ],

            comName:'MyGoodsList' //设置默认显示的组件
        };
    },
    //组件
    components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
},

methods:{
    changeFn(name){
        this.comName = name
    }
}
}
</script>

<style scoped>
    .setP{
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>