<template>
  <el-row class="box">
    <!--<el-option v-for="(item , index) in blocks" :label="item.name" :value="item" :key="item.code"></el-option>-->
    <el-col :span="6" class="col" v-for="(item, index) in levelColor"  :style="{ backgroundColor: item }"></el-col>
    <div class="result" :style="{left:reLeft}">
      <div class="text" :style="{backgroundColor: levelColor[active]}">{{levelText[active]}}</div>
      <div class="awr" :style="{borderTopColor: levelColor[active]}"></div>
    </div>
  </el-row>
</template>

<script type="text/ecmascript">
  // 12.5%+25%=37.5%
    export default {
      props: {
        active: {
          type: Number
        }
      },
      data(){
        return {
          levelColor: ['#f9e8a0','#f3d541','#fbb042','#e94f04'],
          levelText: ["0级-能力完好","1级-轻度受损","2级-中度受损","3级-重度受损"]
        }
      },
      computed: {
        reLeft:function(){
          let x = 12.5;
          let num = x + 25 * this.active;
          return num + '%';
        }
      }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .box{
    margin:50px 0;
    .col{
      height: 30px;
      &:first-child {
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
      &:last-child {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      }
    }
    .result{
      position: absolute;
      top:-45px;
      margin-left: -67px;
      .text{
        padding: 4px 20px;
        border-radius: 4px;
      }
      .awr{
        width: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid rgb(249, 232, 160);
        //border-top-color: ;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }

</style>
