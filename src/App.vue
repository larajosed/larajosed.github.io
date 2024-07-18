<script>
import Navbar from "./components/NavBar.vue";

export default {
  components: { Navbar },
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <h1>Jose Daniel Lara Meza</h1>
    <h3>Full Stack Web Developer</h3>
  </header>

  <main>
    <Navbar />
    <section>
      <RouterView></RouterView>
    </section>
  </main>
</template>

<style scoped>
header {
  height: 7em;
  position: relative;
  /*   text-align: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 30px;
  color: #5b5b5b;
  justify-content: center;
  display: flex; */
}

header h1 {
  margin: 0;
  display: inline-block;
  position: absolute;
  top: 1em;
  left: 0.2em;
  font-size: 1.6em;
}

header h3 {
  margin: 0;
  display: inline-block;
  position: absolute;
  top: 3em;
  left: 3.2em;
}

@media (min-width: 720px) {
  header {
    height: 11em;
  }

  header h1 {
    top: 1em;
    left: 4em;
  }

  header h3 {
    top: 4em;
    left: 15em;
  }
}
</style>
