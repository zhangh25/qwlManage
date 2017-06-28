<template>
  <div class="city-select">
    <el-select v-model="selectedProvince" placeholder="请选择">
      <el-option v-for="(item , index) in provinces" :label="item.name" :value="item" :key="item.code"></el-option>
    </el-select>
    <el-select v-model="selectedCity" placeholder="请选择">
      <el-option v-for="(item , index) in citys" :label="item.name" :value="item" :key="item.code"></el-option>
    </el-select>
    <el-select v-model="selectedBlock" placeholder="请选择">
      <el-option v-for="(item , index) in blocks" :label="item.name" :value="item" :key="item.code"></el-option>
    </el-select>
  </div>
</template>

<script type="text/ecmascript">
  import citys from './cityData.js'
  export default {
    props: {
      value: {
        type: String
      }
    },
    data() {
      return {
        selectedProvince: {},
        selectedCity: {},
        selectedBlock: {},
        provinces: [],
        citys: [],
        blocks: [],
        isInit:true,
        addArr: [],
        startData:[]
      }
    },
    created() {
      this.provinces = citys;
      this.init();

    },
    methods:{
      init(){
        //let _this = this;
        this.addArr = this.value.split('-');
        /*for (let i = 0; i< citys.length; i++){
          if(citys[i].name == this.addArr[0]){
            this.selectedProvince = citys[i];
            let child = citys[i].childrens;
            for(let j = 0; j < child.length; j++){
              if(child[j].name === this.addArr[1]){
                this.selectedCity = child[j];
                let childs = child[j].childrens;
                for(let k = 0; k < childs.length; k++){
                  if(childs[k].name === this.addArr[2]) {
                    this.selectedBlock = childs[k];
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
        }*/
        this.getSelect(0,citys);
        if(this.startData[0] != undefined) {
          this.selectedProvince = this.startData[0];
        }
        this.$nextTick(function(){
          if(this.startData[1] != undefined) {
            this.selectedCity = this.startData[1];
          }
          this.$nextTick(function(){
            if(this.startData[2] != undefined) {
              this.selectedBlock = this.startData[2];
            }
          });
        });
      },
      getSelect(n,datas){
        for(let i = 0; i < datas.length; i++){
          if(this.addArr[n] != undefined && (datas[i].name === this.addArr[n])){
            this.startData.push(datas[i]);
            if(datas[i].childrens != undefined) {
              this.getSelect(++n, datas[i].childrens);
            }
            return;
          }
        }
      }
    },
    watch: {
      selectedProvince(newValue) {
        let _this = this;
        this.blocks = [];
        this.selectedCity = {};
        this.selectedBlock = {};
        this.citys = newValue.childrens;
        this.$nextTick(function(){
          _this.$emit('input', newValue.name);
        });
      },
      selectedCity(newV) {
        let _this = this;
        this.selectedBlock = {};
        this.blocks = newV.childrens;
        let data = this.selectedProvince.name;
        data += '-' + newV.name;
        this.$nextTick(function(){
          _this.$emit('input', data);
        })
      },
      selectedBlock(newV) {
        //if(newV.name == undefined) return;
        let _this = this;
        let data = this.selectedProvince.name + '-'+ this.selectedCity.name;
        data += '-' + newV.name;
        this.$nextTick(function(){
          _this.$emit('input', data);
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">
  .el-select{
    width: 130px;
  }
</style>
