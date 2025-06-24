<script>
export default {
  name: "TitleStructure",
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="container projects-section">
    <div class="title">
      <h1>{{ titleText }}</h1>
      <div class="line"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  padding: 5px;
  text-align: start;
  font-family: system-ui;
  width: 55em;
  color: #e0e0e0;
  text-shadow: 1px 0px #333333, 0px 1px #222222, 0px 0px #111111,
    0px 2px #444444;
  letter-spacing: -1px;
}

.title h1 {
  margin: 0px;
  font-weight: 100;
  font-size: 2em;
}

.line {
  width: 50%;
  border-top: solid 1px;
  margin-top: -8px;
  margin-left: 16px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .container {
    padding: 8px;
  }
}
</style>
