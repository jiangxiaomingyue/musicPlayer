<template>
  <div id="app">
    <tabbar>
      <tabbaItem>
        <div slot="item-text" @click="toHome">首页</div>
      </tabbaItem>
      <tabbaItem>
        <div slot="item-text" @click="toAbout">关于</div>
      </tabbaItem>
      <tabbaItem>
        <div slot="item-text" @click="toClassify">分类</div>
      </tabbaItem>
      <tabbaItem>
        <div slot="item-text" @click="toCanlender">日历</div>
      </tabbaItem>
    </tabbar>
    <div id="background"></div>
    <router-view/>
  </div>
</template>

<script>
  import tabbar from "./components/tabbar/tabbar";
  import tabbaItem from "./components/tabbar/tabbaItem";

  export default {
    name: 'App',
    components: {
      tabbar,
      tabbaItem,
    },
    methods:{
      toHome(){
        this.$router.push('/home')
      },
      toAbout(){
        this.$router.push('/about')
      },
      toClassify(){
        this.$router.push('/classify')
      },
      toCanlender(){
        this.$router.push('/canlender')
      }
  }
  }
</script>

<style>
  @import "assets/css/base.css";
  #app {
   

  }

</style>
