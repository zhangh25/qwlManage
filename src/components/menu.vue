<template>
  <el-menu router :default-active="path">
    <el-submenu index="1" class="menu-head">
      <template slot="title"><i class="el-icon-menu"></i>XXX民政局</template>
      <el-menu-item index="/ins">机构信息</el-menu-item>
      <el-menu-item index="/elder">老人信息</el-menu-item>
      <el-menu-item index="/device">设备信息</el-menu-item>
      <el-menu-item index="/waiter">服务人员信息</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script type="text/ecmascript">
    export default {
      data(){
        return {
          path: ''
        }
      },
      created(){
        //console.log(this.$route.path);
        let path = this.$route.path.substr(1);
        let idx = path.indexOf('/');
        /*if(idx === -1){
          this.path = '/' + path;
        } else {
          this.path = '/' + path.substr(0, idx);
        }*/
        this.path = '/' + ((idx === -1) ? path : path.substr(0, idx));
        //console.log(this.path);
      },
      methods: {

      }
    }
</script>

<style rel="stylesheet/less" lang="less">
  .menu-head{
    text-align: left;
  }
</style>
