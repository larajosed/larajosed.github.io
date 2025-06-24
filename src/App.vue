<template>
  <div id="app">
    <Navbar />

    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f0f0f0;
}

#app {
  padding-top: 34px;
}

section {
  width: 100%;
}
</style>
