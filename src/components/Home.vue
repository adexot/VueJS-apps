<template>
  <div class="home">
    <h3>Links to my Vue-Apps</h3>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/vsearch">Vsearch</router-link></li>
        <li><router-link to="/task">Task</router-link></li>
        <li><router-link to="/comment">Comment</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'home',
}
</script>
<style scoped>
ul li{
    list-style-position: inside;
    list-style: none;
}
</style>

