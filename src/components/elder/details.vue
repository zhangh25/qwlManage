<template>
  <el-row>
    <el-col :span="24" class="title">
      基本信息
    </el-col>
    <el-col :span="16">
      <el-col :span="12">
        <label class="label">姓名：</label>
        <div class="text">{{elder.name}}</div>
      </el-col>
      <el-col :span="12">
        <label class="label">年龄：</label>
        <div class="text">{{elder.age}}</div>
      </el-col>
      <el-col :span="12">
        <label class="label">性别：</label>
        <div class="text">{{elder.sex}}</div>
      </el-col>
      <el-col :span="12">
        <label class="label">身份证号：</label>
        <div class="text">{{elder.ID}}</div>
      </el-col>
      <el-col :span="12">
        <label class="label">健康状况：</label>
        <div class="text">{{elder.health}}</div>
      </el-col>
      <el-col :span="12">
        <label class="label">电话：</label>
        <div class="text">{{elder.phone}}</div>
      </el-col>
      <el-col :span="12">
        <label class="label">户籍：</label>
        <div class="text">{{elder.rg}}</div>
      </el-col>
      <el-col :span="12">
        <label class="label">居住情况：</label>
        <div class="text">{{elder.live}}</div>
      </el-col>
      <el-col :span="12">
        <label class="label">地址：</label>
        <div class="text">{{elder.address}}</div>
      </el-col>
    </el-col>
    <el-col :span="8">
      <label class="label">头像：</label>
      <div class="text img"><img :src="elder.headSrc"></div>
    </el-col>
    <el-col :span="24" class="title">
      紧急联系方式
    </el-col>
    <el-col :span="8">
      <label class="label">紧急联系人：</label>
      <div class="text">sss</div>
    </el-col>
    <el-col :span="8">
      <label class="label">关系：</label>
      <div class="text">子女</div>
    </el-col>
    <el-col :span="8">
      <label class="label">联系电话：</label>
      <div class="text">1122334455</div>
    </el-col>
    <el-col :span="24" class="title">
      老人其他信息
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript">
    export default {
      data(){
        return {
          elder:{
            name: '李四',
            age: '11',
            ID: '123456789012432',
            sex: '男',
            health: '健康',
            live: '独自居住',
            rg: '户籍',
            phone: '13422223333',
            address: '广东省深圳市龙华区',
            headSrc: require('@/assets/headimg.jpg')
          }
        }
      }
    }
</script>

<style rel="stylesheet/less" lang="less">
  .title{
    margin-bottom: 20px;
    font-weight: 600;
  }
  .label{
    float: left;
    width: 100px;
    height: 20px;
    line-height: 20px;
    margin-bottom: 16px;
    text-align: right;
  }
  .text{
    margin-left: 104px;
    height: 20px;
    line-height: 20px;
    &.img{
    height: auto;
     }
  }
</style>
