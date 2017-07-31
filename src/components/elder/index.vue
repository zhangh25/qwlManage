<template>
  <el-row>
    <el-breadcrumb separator="/" class="bread-bar">
      <el-breadcrumb-item :to="{ path: '/' }">XXX民政局</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/elder' }">老人信息</el-breadcrumb-item>
      <el-breadcrumb-item>老人详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs class = "tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="老人详情" name="first">
      </el-tab-pane>
      <el-tab-pane label="评估详情" name="second">
      </el-tab-pane>
      <el-tab-pane label="健康信息" name="third"></el-tab-pane>
      <el-tab-pane label="配餐详情" name="fourth"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </el-row>
</template>

<script type="text/ecmascript">
    export default {
      data(){
        return {
          activeName:'first'
        }
      },
      methods:{
        handleClick(tab){
          //console.log(tab);
          this.activeName = tab.name;
          let m_path = this.$route.path;
          m_path = m_path.substr(0, m_path.lastIndexOf('elderhome')+10);
          console.log(m_path);
          switch (tab.name) {
            case 'first':
                  m_path += 'details';
                  break;
            case 'second':
                  m_path += 'asses';
                  break;
          }
          this.$router.push(m_path);
        }
      },
      created(){
        //let m_path = this.$route.path;
        //m_path += 'details';
        //this.$router.go(m_path);
        //this.$router.push({ path: 'details'});
        //console.log(this.$route.path);
      },
      components: { }
    }
</script>

<style rel="stylesheet/less" lang="less">
  .tabs {
    margin-top: 20px;
  }
</style>
