<template xmlns="">
  <el-row>
    <el-breadcrumb separator="/" class="bread-bar">
      <el-breadcrumb-item :to="{ path: '/' }">XXX民政局</el-breadcrumb-item>
      <el-breadcrumb-item>机构信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" v-model="form" class="ins-form">
      <el-form-item label="机构名称：">
        <el-input v-model="form.insName" placeholder="请输入机构名称"></el-input>
      </el-form-item>
      <el-form-item label="机构负责人：">
        <el-input v-model="form.charge" placeholder="请输入机构负责人"></el-input>
      </el-form-item>
      <el-form-item label="认证状态：">
        <el-select v-model="form.examine"  placeholder="请选择">
          <el-option label="未审核" value="未审核"></el-option>
          <el-option label="审核通过" value="审核通过"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="机构类型：">
        <el-select v-model="form.type" placeholder="请选择">
          <el-option label="公办" value="公办"></el-option>
          <el-option label="民营" value="民营"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地区：">
        <citySelect v-model="form.address"></citySelect>
      </el-form-item>
      <el-form-item label="申请时间：">
        <el-date-picker v-model="form.date" type="daterange" placeholder="选择日期范围"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="insName" label="机构名称"></el-table-column>
      <el-table-column prop="address" label="地区"></el-table-column>
      <el-table-column prop="date" label="申请日期" width="150"></el-table-column>
      <el-table-column prop="phone" label="电话" width="130"></el-table-column>
      <el-table-column prop="type" label="机构类型"></el-table-column>
      <el-table-column prop="obj" label="收住对象"></el-table-column>
      <el-table-column prop="examine" label="认证状态" width="95"></el-table-column>
      <el-table-column fixed="right" label="操作"  width="70">
        <template scope="scope">
          <el-button @click="handleClick(scope)" type="text" size="small">查看</el-button>
          <!--@click.native.prevent="deleteRow(scope.$index, tableData4)"-->
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script type="text/ecmascript">
  import citySelect from '../citySelect/index.vue'
    export default {
      data() {
        return {
          form: {
            insName:'',
            charge:'',
            examine:'未审核',
            type:'',
            address:'',
            date:''
          },
          tableData: [{
            insName:'机构1',
            address:'广东省-深圳市-龙华区',
            date:'2016年09月27日',
            charge:'张三三',
            phone:'13322222222',
            type:'居家养老服务中心',
            obj:'自理、半自理、全护理	',
            examine:'审核通过'
          }, {
            insName:'某某街道社区老年人日间照料中心',
            address:'广东省-深圳市-龙华区',
            date:'2016年09月27日',
            charge:'张三三',
            phone:'13322222222',
            type:'居家养老服务中心',
            obj:'自理、半自理、全护理	',
            examine:'审核通过'
          }, {
            insName:'机构2',
            address:'广东省-深圳市-龙华区',
            date:'2016年09月27日',
            charge:'张三三',
            phone:'13322222222',
            type:'居家养老服务中心',
            obj:'自理、半自理、全护理	',
            examine:'审核通过'
          }]
        }
      },
      methods: {
        onSubmit() {
          console.log(this.form);
        },
        handleClick(data) {
          console.log(data);
        }
      },
      components: {
        citySelect
      }
    }
</script>

<style rel="stylesheet/less" lang="less">

</style>
