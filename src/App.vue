<template>
  <div>
    <div id="box">
        
    </div>
    <Index></Index>
  </div>
</template>

<script>
import Index from './pages/index';

export default{
  name:'App',
  components:{
    Index
  }
}
</script>

<style scss>
#box{
  background: #ff0000;
  height: 100px;
  width: 100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
