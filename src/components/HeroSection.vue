<template>
  <section class="hero-section">
    <div class="hero-content">
     
      <h1 class="hero-name animate__animated animate__fadeInUp">
        José Daniel Lara Meza
      </h1>
      <p
        class="hero-title animate__animated animate__fadeInUp animate__delay-1s"
      >
        Full Stack Developer
      </p>
      <p
        class="hero-description animate__animated animate__fadeInUp animate__delay-1s"
      >
        Desarrollador con más de 1 año de experiencia en React, Angular, Spring Boot y arquitecturas REST.
        Especializado en crear aplicaciones web escalables y eficientes con prácticas de desarrollo ágil y TDD.
      </p>
      <div class="hero-buttons animate__animated animate__fadeInUp animate__delay-2s">
        <button
          :class="{ 'is-hidden': buttonHidden }"
          class="hero-button hero-button-primary"
          @click="navigateTo('/projects')"
        >
          Ver Proyectos
        </button>
        <button
          :class="{ 'is-hidden': buttonHidden }"
          class="hero-button hero-button-secondary"
          @click="navigateTo('/experience')"
        >
          Ver Experiencia
        </button>
      </div>
      <div
        class="hero-social-links animate__animated animate__fadeInUp animate__delay-2s"
        :class="{ 'is-hidden': buttonHidden }"
      >

      </div>
    </div>

    <div style="height: 50px">
      <HeroMenu
        ref="heroMenuComponent"
        :show="showHeroMenu"
        @item-clicked="closeHeroMenu"
      />
    </div>
  </section>
</template>

<script>
import HeroMenu from "@/components/HeroMenu.vue";

export default {
  name: "HeroSection",
  components: {
    HeroMenu,
  },
  data() {
    return {
      showHeroMenu: false,
      buttonHidden: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showHeroMenu = true;
      this.buttonHidden = true;
    },
    closeHeroMenu() {
      this.showHeroMenu = false;
    },
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.hero-button {
  background-color: #cecece;
  color: rgb(32, 28, 28);
  padding: 10px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  transition: all 0.3s ease;
  box-shadow: 2px 0px 2px 2px rgba(146, 146, 145, 0.4);
  border: none;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.8s ease, visibility 0.2s ease;
}

.hero-button:hover {
  background-color: #adaba9;
  transform: translateY(-5px);
  box-shadow: 0px 5px 5px rgba(158, 144, 123, 0.6);
}

.hero-button.is-hidden {
  opacity: 0;
  visibility: hidden;
}

.hero-button-primary {
  background-color: transparent;
  color: #e0e0e0;
  border: 2px solid #4a9eff;
}

.hero-button-primary:hover {
 background-color: rgba(74, 158, 255, 0.1);
  border-color: #357abd;
  box-shadow: 0px 5px 15px rgba(74, 158, 255, 0.3);
}

.hero-button-secondary {
  background-color: transparent;
  color: #e0e0e0;
  border: 2px solid #4a9eff;
}

.hero-button-secondary:hover {
  background-color: rgba(74, 158, 255, 0.1);
  border-color: #357abd;
  box-shadow: 0px 5px 15px rgba(74, 158, 255, 0.3);
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-social-links {
  display: flex;
  gap: 20px;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.8s ease, visibility 0.2s ease;
}

.hero-social-links.is-hidden {
  opacity: 0;
  visibility: hidden;
}

.social-link {
  color: #e0e0e0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
}

.social-link:hover {
  color: #3492fd;
  background-color: rgba(74, 158, 255, 0.1);
  transform: translateY(-3px);
}

.hero-section {
  position: absolute;
  top: 70px;
  bottom: 0;
  background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
  color: #f0f0f0;
  text-align: center;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero-content {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-img {
  max-width: 17em;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.container-img img {
  max-width: 100%;
  height: auto;
  animation: pulse 2s infinite alternate;
  border-radius: 50%;
  border: 3px solid #444444;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

.hero-name {
  font-family: system-ui;
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #ffffff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  letter-spacing: 2px;
  font-weight: 300;
  color: #e0e0e0;
  text-shadow: 1px 0px #333333, 0px 1px #222222, 0px 0px #111111,
    0px 2px #444444;
  letter-spacing: -1px;
}

.hero-title {
  font-family: "Arial", sans-serif;
  font-size: 2.8em;
  color: #4a9eff;
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.hero-description {
  font-family: "Arial", sans-serif;
  font-size: 1.1em;
  color: #cccccc;
  margin-bottom: 30px;
  line-height: 1.6;
  max-width: 650px;
  padding: 0 20px;
}

.hero-tagline {
  font-family: "Arial", sans-serif;
  font-size: 1.5em;
  color: #cccccc;
  margin-bottom: 40px;
  line-height: 1.5;
  color: #e0e0e0;
}

@media (max-width: 768px) {
  .hero-section {
    top: 50px;
    min-height: 500px;
  }
  .container-img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  .hero-name {
    font-size: 2.5em;
  }

  .hero-title {
    font-size: 1.4em;
  }

  .hero-description {
    font-size: 0.95em;
    margin-bottom: 25px;
  }

  .hero-tagline {
    font-size: 1.2em;
    margin-bottom: 30px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .hero-button {
    width: 100%;
    max-width: 300px;
  }

  .container-img:hover img {
    transform: scale(1);
  }
}
@media (max-width: 480px) {
  .container-img {
    width: 180px;
    height: 180px;
  }

  .hero-name {
    font-size: 2em;
  }
  
  .hero-title {
    font-size: 1.2em;
  }

  .hero-description {
    font-size: 0.9em;
  }

  .hero-tagline {
    font-size: 1em;
  }
}
</style>
