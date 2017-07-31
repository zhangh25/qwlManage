<template>
  <div id="app">
    <header class="header">
      <div class="header-left">
        <img src="./assets/hdsj-logo.png">
      </div>
      <div class="header-right">
        <el-button type="text" class="btn">400-688-2197</el-button>
        <el-button type="text" class="btn">退出</el-button>
      </div>
    </header>
    <main class="container">
      <el-row class="menu">
        <div class="menu-top">
          <span class="point"></span>
          <span class="point"></span>
          <span class="point"></span>
        </div>
        <mymenu></mymenu>
      </el-row>
      <el-row class="main">
        <div class="main-top">
          <div class="bar"><i class="icon"></i><marquee behavior="scroll" direction="right">厚德世家</marquee></div>

        </div>
        <router-view class="main-con"></router-view>
      </el-row>

    </main>
  </div>
</template>

<script>
  import mymenu from './components/menu.vue'
  export default {
    name: 'app',
    components: {
      mymenu
    }
  }
</script>

<style rel="stylesheet/less" lang="less" >
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
  }
body{margin: 0;padding: 0}
  .header {
    height: 60px;
    padding: 10px;
    background:#20a0ff;
    .header-left {
      float: left;
    }
    .header-right {
      float: right;
      .btn {
        margin-top: 14px;
        color: #fff;
      }
    }
  }
  .container{
    display: flex;
    .menu{
      flex: 0 0 200px;
      width:200px;
      background-color: #f1f6fb;
      .menu-top{
        height: 30px;
        background:#b2c2ce;
        .point{
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #333936;
          border-radius: 50%;
          margin: 10px 2px 0;
        }
      }
    }
    .main{
      flex: 1;

      padding: 15px 10px;
      text-align: left;
      .main-top{
        height: 30px;
        background-color: #fff;
        border-bottom: 1px solid #e3e7e5;
        margin:-15px -10px 15px -10px;
        .bar{
          margin: 0 100px;
          position: relative;
          line-height:30px;
          font-size:14px;
          .icon{
            position: absolute;
            display: inline-block;
            width: 20px;
            height: 20px;
            left: -24px;
            top:5px;
            background: url("components/home/messges-icon.png");
          }
        }
      }
      .main-con{
        background-color: #fff;
        min-height: 100vh;
      }
    }
  }
  .bread-bar{
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .ins-form{
    padding: 20px 0;
  }

</style>
