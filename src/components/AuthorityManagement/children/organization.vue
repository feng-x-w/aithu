<style scoped lang="scss">
    h1{
        background-color: red;
        color: white;
    }

    .taskmid>table>tr>td{
        padding: 10px 10px;
    }

    .taskmid>table>tr>th:first-child{
        width: 15px;
    }
    
    .taskmid>table>tr>td:first-child{
        width: 15px;
        text-align: center;
    }
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
    .top{
        width: 100%;
        overflow: hidden;
        .left{
            float: left;
            width: 200px;
            padding-left: 10px;
        }
        .right{
            overflow:hidden;
        }
    }
</style>

<template>
  <div class="top">
    <Breadcrumb>
      <span slot="one">权限管理</span>
      <!--任务管理-->
      <span slot="two">组织管理</span>
      <!--任务状态管理-->
    </Breadcrumb>
    <div class="left">
<el-tree
:data="data5"
node-key="id"
default-expand-all
:expand-on-click-node="false">
    <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
        <el-button type="text" size="mini" @click="() => append(data)">
            <i class="fa fa-plus"></i>
        </el-button>
        <el-button type="text" size="mini" @click="() => remove(node, data)">
            <i class="el-icon-delete"></i>
        </el-button>
        </span>
    </span>
</el-tree>
    </div>
    <div class="right">
      <div class="taskmid">
        <table>
          <tr>
            <th></th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
            <th>七</th>
            <th>八</th>
            <th>九</th>
          </tr>
          <tr v-for="(i,key) in table" :key="key">
            <td>{{key+1}}</td>
            <td>{{i.one}}</td>
            <td>{{i.two}}</td>
            <td>{{i.three}}</td>
            <td>{{i.four}}</td>
            <td>{{i.five}}</td>
            <td>{{i.six}}</td>
            <td>{{i.seven}}</td>
            <td>{{i.eight}}</td>
            <td>{{i.nine}}</td>
          </tr>
        </table>
      </div>
    </div>
    
  </div>
</template>

<script>//机构管理
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
let id = 1000;
  export default {
    // 页面初始化
    created() {

    },
    //  方法属性
     methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
      }
    },
    data() {
      const data = [{
        id: 1,
        label: '一级',
        children: [{
          id: 4,
          label: '二级1',
          children: [{
            id: 9,
            label: '三级1-1'
          }, {
            id: 10,
            label: '三级1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级',
        children: [{
          id: 5,
          label: '二级1'
        }, {
          id: 6,
          label: '二级2'
        }]
      }, {
        id: 3,
        label: '一级',
        children: [{
          id: 7,
          label: '二级1'
        }, {
          id: 8,
          label: '二级2'
        }]
      }];
      return {
        table:[
             {one:"1"},
             {two:"2"},
             {three:"3"},
             {four:"4"},
             {five:"5"},
             {six:"6"},
             {seven:"7"},
             {eight:"8"},
             {nine:"9"}
         ],
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data))
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>