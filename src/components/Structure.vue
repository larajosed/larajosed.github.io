<script>
export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      sign: "+",
    };
  },
  methods: {
    showSnapshot: function () {
      if (this.show == false) {
        this.sign = "-";
        this.show = !this.show;
      } else {
        this.sign = "+";
        this.show = !this.show;
      }
    },
  },
};
</script>

<template>
  <section>
    <div class="text">
      <div class="logo-container">
        <img class="icon" :src="jsonData.logo" :alt="jsonData.title" />
      </div>
      <div class="text-container">
        <b>{{ jsonData.title }}</b>
        <p>
          {{ jsonData.mainParagraph }}
        </p>
        <div
          v-show="show"
          class="text-container"
          v-for="paragraph in jsonData.secondaryParagraph"
        >
          <p v-html="paragraph"></p>
        </div>
        <div v-show="show" class="container">
          <section class="slider">
            <img v-for="image in jsonData.images" :src="image" />
          </section>
        </div>
        <div class="snapshot" @click="showSnapshot()">
          <button class="sign">{{ this.sign }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text {
  display: flex;
  max-width: 35em;
  padding-inline-end: 1em;
  text-align: justify;
}

.icon {
  width: 8em;
  margin-right: 1em;
  display: inline-block;
  margin-left: 50px;
}

.text-container {
  font-weight: normal;
  font-family: sans-serif;
  /*  width: 950px; */
}

.sign {
  border: 1px solid #858586;
  border-radius: 0.8em;
  font-size: 2em;
  font-family: fantasy;
  width: 1.6em;
  text-decoration: none;
  color: #858586;
}

.snapshot {
  display: flex;
  justify-content: end;
  align-items: end;
  margin-top: 5px;
}

section {
  width: 100%;
  margin-bottom: 30px;
}

/* section p {
  width: 950px;
} */

section:hover {
  box-shadow: 0px 1px 8px -3px #333434;
}

.slider {
  display: flex;
  width: 100%;
  height: 430px;
}

.slider img {
  width: 0px;
  flex-grow: 1;
  object-fit: cover;
  opacity: 0.8;
  transition: 1s ease;
  box-shadow: 0px 1px 8px -3px #333434;
  height: 460px;
}

.slider img:hover {
  cursor: crosshair;
  width: 100%;
  opacity: 1;
  filter: contrast(120%);
  box-shadow: 0px 1px 8px -3px #333434;
}

@media (min-width: 720px) {
  section {
    background-color: #f1f1f1;
    margin-bottom: 4em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  section:hover {
    box-shadow: 0px 1px 8px -1px #97a7b3;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }

  .text {
    display: flex;
    max-width: 55em;
    margin: 2em;
    text-align: justify;
  }
}
</style>
