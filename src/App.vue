<template>
  <div id="app" class="">
    <task></task>
  </div>
</template>

<script>
import New from './components/New';
import Hello from './components/Hello';
import Vsearch from './components/Vsearch';
import Task from './components/Task';

export default {
  name: 'app',
  components: {
    New,Hello,Vsearch,Task
  },
  methods: {
    call: function(){
      alert(1);
    }
  }
 
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  
}

</style>
