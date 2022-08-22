<template>
  <div>
    <MyTable :gList="list">
      <template v-slot:thead>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <template v-slot:tbody="scope">
        <td>{{scope.content.id}}</td>
        <td>{{scope.content.goods_name}}</td>
        <td>{{scope.content.goods_price}}</td>
        <td>
            <!-- 添加tab的按钮 -->
            <input type="text" v-if="scope.content.inputVisible" style="display:block;width:120px" v-focus @blur="scope.content.inputVisible=false" @keydown.enter="add(scope.content)" v-model="inputText" @keydown.esc="removeText"> 
            <button style="display:block" class="btn btn-primary" @click="scope.content.inputVisible=true" v-else>+Tag</button>
            <!-- {{scope.content.tags}} -->
            <span v-for="(item,ind) in scope.content.tags" :key="ind" class="badge bg-warning text-dark">
                {{item}}
            </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.content.id)">删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../MyTable.vue";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";

export default {
  components: { MyTable },
  data() {
    return {
      list: [],
      inputText:'' //表单输入的内容
      
    };
  },

  created() {
    axios({
      url: "/api/goods"
    }).then(res => {
      this.list = res.data.data;
    });
  },

  methods:{
    del(id){
        let index = this.list.findIndex(obj => obj.id ===id)
        this.list.splice(index,1)
    },
    add(obj){
        obj.tags.push(this.inputText)
    },
    removeText(){
        this.inputText = ''
    }
  }
};
</script>

<style lang="less" scoped>
.badge{
    margin-right: 5px;
}
    
</style>