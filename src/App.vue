<script setup>
import MainPage from './components/MainPage.vue';
</script>

<template>
  <header>
    <h1>Jose Daniel Lara Meza</h1>
    <h3>Full Stack Web Developer</h3>
  </header>

  <main>
    <MainPage/>
  </main>
</template>

<style scoped>
header{
  height: 7em;
  position: relative;
}

header h1{
  margin: 0;
  display: inline-block;
  position: absolute;
  top: 1em;
  left: 0.2em;
  font-size: 1.6em;
}

header h3{
   margin: 0;
   display: inline-block;
   position: absolute;
   top: 3em;
   left: 3.2em;
}


@media (min-width: 720px) {

header{
  height: 9em;
}

header h1{
  top: 1em;
  left: 4em;  
}

header h3{
   top: 4em;
   left: 15em; 
}
}
</style>
