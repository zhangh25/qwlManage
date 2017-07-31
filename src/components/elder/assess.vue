<template>
  <el-row>
    <el-steps  :active="active" finish-status="success">
      <el-step title="日常生活活动评估"></el-step>
      <el-step title="精神状态评估"></el-step>
      <el-step title="感知觉与沟通评估"></el-step>
      <el-step title="社会参与评估"></el-step>
      <el-step title="疾病及意外事件评估"></el-step>
    </el-steps>
    <router-view></router-view>
  </el-row>
</template>

<script type="text/ecmascript">
    export default {
      data(){
        return {
          active: 0
        }
      }
    }
</script>

<style rel="stylesheet/less" lang="less">
</style>
