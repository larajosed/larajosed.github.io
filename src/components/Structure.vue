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
    <div class="fluid-box">
      <div class="logo-container">
        <img class="icon" :src="jsonData.logo" :alt="jsonData.title" />
      </div>
      <div class="text-container">
        <b>{{ jsonData.title }}</b>
        <p>
          {{ jsonData.mainParagraph }}
        </p>
        
        <!-- Technology badges -->
        <div v-if="jsonData.technologies" class="tech-badges">
          <span
            v-for="(tech, index) in jsonData.technologies"
            :key="index"
            class="tech-badge"
            :style="{ borderColor: tech.color, color: tech.color }"
          >
            {{ tech.name }}
          </span>
        </div>

        <!-- Project links -->
        <div v-if="jsonData.githubUrl || jsonData.demoUrl" class="project-links">
          <a
            v-if="jsonData.githubUrl"
            :href="jsonData.githubUrl"
            target="_blank"
            class="project-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            v-if="jsonData.demoUrl && jsonData.demoUrl !== '#'"
            :href="jsonData.demoUrl"
            target="_blank"
            class="project-link project-link-demo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Demo
          </a>
        </div>

        <!-- Features list -->
        <div v-if="jsonData.features" v-show="show" class="features-container">
          <h3 class="features-title">Características principales:</h3>
          <ul class="features-list">
            <li v-for="(feature, index) in jsonData.features" :key="index" v-html="feature"></li>
          </ul>
        </div>

        <div
          v-show="show"
          class="secondary-paragraph-container"
          v-for="(paragraph, index) in jsonData.secondaryParagraph"
          :key="index"
        >
          <p v-html="paragraph"></p>
        </div>
        <div v-show="show" class="images-container">
          <section class="slider">
            <img
              v-for="(image, index) in jsonData.images"
              :src="image"
              :key="index"
            />
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

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
}

.tech-badge {
  padding: 5px 12px;
  border: 1.5px solid;
  border-radius: 4px;
  font-size: 0.85em;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.03);
  transition: all 0.2s ease;
}

.tech-badge:hover {
  background-color: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.project-links {
  display: flex;
  gap: 15px;
  margin: 15px 0;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background-color: rgba(74, 158, 255, 0.1);
  color: #4a9eff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9em;
  font-weight: 600;
  border: 1px solid rgba(74, 158, 255, 0.3);
  transition: all 0.3s ease;
}

.project-link:hover {
  background-color: rgba(74, 158, 255, 0.2);
  border-color: #4a9eff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.2);
}

.project-link svg {
  width: 18px;
  height: 18px;
}

.project-link-demo {
  background-color: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  border-color: rgba(76, 175, 80, 0.3);
}

.project-link-demo:hover {
  background-color: rgba(76, 175, 80, 0.2);
  border-color: #4caf50;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
}

.features-container {
  margin: 20px 0;
}

.features-title {
  color: #ffffff;
  font-size: 1.05em;
  margin-bottom: 10px;
}

.features-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.features-list li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  color: #c0c0c0;
  line-height: 1.6;
}

.features-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4a9eff;
  font-weight: bold;
  font-size: 1.1em;
}

.features-list li :deep(strong) {
  color: #ffffff;
}

.secondary-paragraph-container p {
  color: #c0c0c0;
}

.sign {
  border: 1px solid #666666;
  border-radius: 0.8em;
  font-size: 2em;
  font-family: fantasy;
  width: 1.6em;
  text-decoration: none;
  color: #a0a0a0;
  background-color: #2c2c2c;
  cursor: pointer;
}

.sign:hover {
  background-color: #3a3a3a;
  color: #ffffff;
  border-color: #aaaaaa;
}

.snapshot {
  display: flex;
  justify-content: end;
  align-items: end;
  margin-top: 15px;
}

.slider {
  display: flex;
  width: 100%;
  height: 430px;
  margin-top: 15px;
}

.slider img {
  width: 0px;
  flex-grow: 1;
  object-fit: cover;
  opacity: 0.8;
  transition: 1s ease;
  box-shadow: 0px 1px 8px -3px rgba(0, 0, 0, 0.7);
  height: 460px;
  border-radius: 5px;
}

.slider img:hover {
  cursor: crosshair;
  width: 100%;
  opacity: 1;
  filter: contrast(120%);
  box-shadow: 0px 4px 16px -1px #000000;
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

  .tech-badges {
    justify-content: center;
  }

  .project-links {
    justify-content: center;
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
}
</style>
