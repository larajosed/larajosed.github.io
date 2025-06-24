<script>
export default {
  name: "BoxStructure",
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <section>
    <div class="fluid-box">
      <div class="logo-container">
        <img class="icon" :src="jsonData.logo" :alt="jsonData.title" />
      </div>
      <div class="text-container">
        <b>{{ jsonData.title }}</b>
        <p
          v-for="(paragraph, index) in jsonData.mainParagraph"
          :key="index"
          v-html="paragraph"
        ></p>
        <div class="containerDate">
          <i>{{ jsonData.date }}</i>
          <br />
          <i>{{ jsonData.country }}</i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  margin-bottom: 30px;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 10px;
  transition: 0.8s ease;
  box-shadow: 0px 1px 8px -3px #080808e8;
  opacity: 0.6;
  transition-property: opacity;
}

section:hover {
  box-shadow: 0px 4px 16px -1px #080808e8;
  transform: scale(1.01);
  transition: 0.3s ease-in-out;
  opacity: 1;
}

.fluid-box {
  display: flex;
  max-width: 35em;
  padding-inline-end: 1em;
  text-align: justify;
  font-family: sans-serif;
  color: #f0f0f0;
}

.logo-container {
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: #2c2c2c;
  border-radius: 8px;
  padding: 10px;
  flex-shrink: 0;
  display: flex;
}

.icon {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  display: block;
}

.text-container {
  margin-left: 25px;
}

.text-container b {
  display: block;
  font-size: 1.3em;
  color: #ffffff;
  margin-bottom: 8px;
}

.text-container p {
  line-height: 1.6;
  margin-bottom: 10px;
  color: #c0c0c0;
  font-size: 0.95em;
  text-align: justify;
}

.containerDate {
  text-align: center;
}

@media (max-width: 767px) {
  .fluid-box {
    flex-direction: column;
    align-items: center;
  }

  .logo-container {
    margin-bottom: 15px;
    margin-right: 0;
  }

  .text-container {
    margin-left: 0;
    width: 100%;
  }

  .text-container b,
  .text-container p {
    text-align: center;
  }
}

@media (min-width: 720px) {
  section {
    margin-bottom: 4em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .fluid-box {
    max-width: 55em;
    margin: 2em;
  }

  .containerDate {
    text-align: start;
  }
}
</style>
