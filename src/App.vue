<template>
  <div>
    <myHeader></myHeader>
    
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from './components/header/my-header'
import myFooter from './components/footer/my-footer'
export default{
  name:'App',
  components:{
    myHeader,
    myFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
