<template>
  <el-form rel="form" :model="form" class="form" label-width="112px">
    <el-form-item label="1、进食：">
      <el-radio-group v-model="form.eat" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">可独立进食（在合理的时间内独立进食准备好的食物）</el-radio>
        <br>
        <el-radio label="1" class="radio-item">需部分帮助（进食过程中需要一定帮助，如协助把持餐具）</el-radio>
        <br>
        <el-radio label="2" class="radio-item">需极大帮助或完全依赖他人，或有留置营养管</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="2、洗澡：">
      <el-radio-group v-model="form.shower" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">准备好洗澡水后，可自己独立完成洗澡过程</el-radio>
        <br>
        <el-radio label="1" class="radio-item">在洗澡过程中需他人帮助</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="3、修饰：">
      <el-radio-group v-model="form.adorn" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">可自己独立完成（指洗脸、刷牙、梳头、刮脸等）</el-radio>
        <br>
        <el-radio label="1" class="radio-item">需他人帮助（指洗脸、刷牙、梳头、刮脸等）</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="4、穿衣：">
      <el-radio-group v-model="form.dress" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">可独立完成</el-radio>
        <br>
        <el-radio label="1" class="radio-item">需部分帮助（能自己穿脱，但需他人帮助整理衣物、系扣/鞋带、拉拉链）</el-radio><br>
        <el-radio label="2" class="radio-item">需极大帮助或完全依赖他人</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="5、大便控制：">
      <el-radio-group v-model="form.shit" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">可控制大便</el-radio>
        <br>
        <el-radio label="1" class="radio-item">偶尔失控（每周<1次），或需要他人提示</el-radio><br>
        <el-radio label="2" class="radio-item">完全失控</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="6、小便控制：">
      <el-radio-group v-model="form.urine" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">可控制小便</el-radio>
        <br>
        <el-radio label="1" class="radio-item">偶尔失控（每周<1次），或需要他人提示</el-radio><br>
        <el-radio label="2" class="radio-item">完全失控</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="7、如厕：">
      <el-radio-group v-model="form.toilet" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">可独立完成</el-radio>
        <br>
        <el-radio label="1" class="radio-item">需部分帮助（需他人搀扶去厕所、需他人帮忙冲水或整理衣裤等）</el-radio><br>
        <el-radio label="2" class="radio-item">需极大帮助或完全依赖他人</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="8、床椅转移：">
      <el-radio-group v-model="form.move" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">可独立完成</el-radio><br>
        <el-radio label="1" class="radio-item">需部分帮助（需他人搀扶或使用拐杖）</el-radio><br>
        <el-radio label="2" class="radio-item">需极大帮助（较大程度上依赖他人搀扶和帮助）</el-radio><br>
        <el-radio label="3" class="radio-item">完全依赖他人</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="9、平地行走：">
      <el-radio-group v-model="form.walk" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">可独立在平地上行走45m</el-radio><br>
        <el-radio label="1" class="radio-item">需部分帮助（因肢体残疾、平衡能力差、过度衰弱、视力等问题，在一定程度上需他人地搀扶或使用拐杖、助行器等辅助用具）</el-radio><br>
        <el-radio label="2" class="radio-item">需极大帮助（因肢体残疾、平衡能力差、过度衰弱、视力等问题，在较大程度上依赖他人搀扶，或坐在轮椅上自行移动）</el-radio><br>
        <el-radio label="3" class="radio-item">完全依赖他人</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="10、上下楼梯：">
      <el-radio-group v-model="form.stair" class="radio-group" @change="radioChange">
        <el-radio label="0" class="radio-item">可独立上下楼梯（连续上下10-15个台阶）</el-radio><br>
        <el-radio label="1" class="radio-item">需部分帮助（需他人搀扶，或扶着楼梯、使用拐杖等）</el-radio><br>
        <el-radio label="2" class="radio-item">需极大帮助或完全依赖他人</el-radio>
      </el-radio-group>
    </el-form-item>
    <calc :active="result"></calc>
    <el-button type="primary">下一步</el-button>
  </el-form>
</template>

<script type="text/ecmascript">
    import calc from './calcAssess.vue'
    export default {
      data() {
        return {
          form: {
            eat: '',
            shower: '',
            adorn: '',
            dress: '',
            shit: '',
            urine: '',
            toilet: '',
            move: '',
            walk: '',
            stair: ''
          },
          score: {
            eat: [0,5,10],
            shower: [0,5],
            adorn: [0,5],
            dress: [0,5,10],
            shit: [0,5,10],
            urine: [0,5,10],
            toilet: [0,5,10],
            move: [ 0, 5, 10, 15 ],
            walk: [ 0, 5, 10, 15 ],
            stair: [ 0, 5, 10 ]
          },
          range: [[0,0],[5,35],[40,55],[60,100]],
          result: 0,
          isFinish: false
        }
      },
      methods: {
        radioChange(){
          let sum = 0;
          for(let i in this.form){
            let value = this.form[i];
            if(value != ''){
              sum += this.score[i][value];
            } else {
              this.isFinish = false;
            }
          }
          for ( let i = 0; i < this.range.length; i++) {
            let range = this.range[i];
            if(range[0] <= sum && range[1] >= sum){
              this.result = i;
              break;
            }
          }
        }
      },
      components:{
        calc
      }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .el-form-item {
    .el-form-item__label {
      font-weight: 600;
    }
  }
  .form{
    padding: 20px;
  }
  .radio-group {
    .radio-item{
      padding: 10px 0;
    }
  }
</style>
