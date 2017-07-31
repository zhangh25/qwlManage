<template>
  <el-row>
    <el-breadcrumb separator="/" class="bread-bar">
      <el-breadcrumb-item :to="{ path: '/' }">XXX民政局</el-breadcrumb-item>
      <el-breadcrumb-item>老人信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" :model="elder" class="ins-form">
      <el-form-item label="老人姓名：">
        <el-input v-model="elder.name" placeholder="请输入老人姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证号：">
        <el-input v-model="elder.ID" placeholder="请输入老人身份证号"></el-input>
      </el-form-item>
      <el-form-item label="年龄：">
        <el-input v-model="elder.age" placeholder="请输入老人年龄"></el-input>
      </el-form-item>
      <el-form-item label="能力级别：">
        <el-select v-model="elder.level">
          <el-option label="失能" value="失能"></el-option>
          <el-option label="半失能" value="半失能"></el-option>
          <el-option label="失智" value="失智"></el-option>
          <el-option label="健康" value="健康"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="户籍：">
        <el-select v-model="elder.register">
          <el-option value="户籍"></el-option>
          <el-option value="非户籍"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="居住情况：">
        <el-select v-model="elder.live">
          <el-option value="与子女居住"></el-option>
          <el-option value="独居"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地址：">
        <el-input v-model="elder.address" placeholder="请输入老人的地址"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="elderTable" border style="width:100%">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="ID" label="身份证号"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="ability" label="能力级别"></el-table-column>
      <el-table-column prop="institution" label="所属机构"></el-table-column>
      <el-table-column prop="reg" label="户籍"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <router-link to="/elder/elderhome/" class="link">查看详情</router-link>
          <el-button type="text">修改</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script type="text/ecmascript">
    export default {
      data(){
        return {
          elder:{
            name: '',
            ID: '',
            age: '',
            level: '',
            register: '',
            live: '',
            address: ''
          },
          elderTable: [
            {
              name: '小刘',
              sex: '男',
              ID: '362428195204186912',
              address: '广东省深圳市龙华新区',
              age: '56',
              ability: '半失能',
              institution: 'xxxx机构',
              reg: '户籍'
            },
            {
              name: '小刘',
              sex: '男',
              ID: '362428195204186912',
              address: '广东省深圳市龙华新区',
              age: '56',
              ability: '半失能',
              institution: 'xxxx机构',
              reg: '户籍'
            },
            {
              name: '小刘',
              sex: '男',
              ID: '362428195204186912',
              address: '广东省深圳市龙华新区',
              age: '56',
              ability: '半失能',
              institution: 'xxxx机构',
              reg: '户籍'
            },
            {
              name: '小刘',
              sex: '男',
              ID: '362428195204186912',
              address: '广东省深圳市龙华新区',
              age: '56',
              ability: '半失能',
              institution: 'xxxx机构',
              reg: '户籍'
            }
          ]
        };
      },
      methods:{
        onSubmit(){
          console.log(this.elder);
        },
        onClick(){
          //window.alert('ssa');
        }
      }
    }
</script>

<style rel="stylesheet/less" lang="less">
  .link{
    color: #20a0ff;
    text-decoration: none;
    +.el-button{
      margin-left: 10px;
     }
  }
</style>
