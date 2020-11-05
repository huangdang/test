<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <mine :mymine="test" /> -->
    <!-- <div @click="init">点我试试</div> -->
    <div class="zd">粑粑：你的账单来了</div>
    <div>美团：¥{{hd.meituan}}</div>
    <div>微粒贷：¥{{hd.wld}}</div>
    <div>微粒贷1：¥{{hd.wld1}}</div>
    <div>房租：¥{{hd.fz}}</div>
    
    <div>{{hd.meituan}} + {{hd.wld}} + {{hd.wld1}} - {{hd.fz}} = {{parseInt(hd.meituan + hd.wld + hd.wld1 - hd.fz)}}</div>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import mine from './components/mine.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // mine
  },
  data() {
    return {
      test:'--你好--',
      hd: {
        meituan: 2673.89,
        wld: 874,
        wld1: 680,
        fz: 1200
      }
    }
  },
  mounted(){
    console.log(this)
    console.log('this')
    // console.log(this.test)
    // console.log('美团：' + this.hd.meituan + '微粒贷：'+ this.hd.wld + '微粒贷1：' + this.hd.wld + '=' + parseInt(this.hd.meituan + this.hd.wld + this.hd.wld1))
  },
  methods: {
    init:function(){
      console.log('init')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

  div{line-height: 40px;}

.zd{font-size: 20px;color: #999;font-weight: 600;}
</style>
