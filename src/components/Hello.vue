<template>

  <div class = "home">
    home
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  body{
    padding: 0;
    margin: 0;
  }

  .content{
    dispaly:flex;
    .menu{
      flex: 0 0 240px;
    }
    .main{
      flex: 1;
    }
  }

</style>
