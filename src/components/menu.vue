<template>
  <el-menu router :default-active="$route.path">
    <el-submenu index="1" class="menu-head">
      <template slot="title"><i class="el-icon-message"></i>龙华民政局</template>
      <el-menu-item index="/ins">机构信息</el-menu-item>
      <el-menu-item index="/elder">老人信息</el-menu-item>
      <el-menu-item index="/device">设备信息</el-menu-item>
      <el-menu-item index="/waiter">服务人员信息</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script type="text/ecmascript">
    export default {}
</script>

<style rel="stylesheet/less" lang="less">
  .menu-head{
    text-align: left;
  }
</style>
