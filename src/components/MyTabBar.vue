
<template>
  <div class="my-tab-bar">
    <div class="tab-item" v-for="(obj,index) in arr" :key="index" :class="{current:actIndex === index}" @click="actIndex = index">
      <!-- 图标 -->
      <span class="iconfont" :class="obj.iconText" @click="comFn(obj)"></span>
      <!-- 文字 -->
      
      <span>{{obj.text}}</span>
    </div>
  </div>
</template>

<script>

export default {
  
  data(){
    return{
      actIndex:0 //高亮元素下标，默认为第一个
    }
  },
  props:{
    arr:{
      type:Array,
      required:true,
      validator(value){//自定义校检规则，value是传入的数据
        if(value.length >= 2 && value.length <=5){//规定数组内容个数
          return true //符合条件
        }else{
          console.log('数据源必须在2-5个之间');
          return false
        }
      }
    }
    

    },

    methods:{
      comFn(obj){
        this.$emit('changeCom',obj.componentName)
      }
    }

  }

</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>