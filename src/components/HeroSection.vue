<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="container-img">
        <img src="@/assets/images/jdlm.jpg" alt="FOTO" />
      </div>
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
        Desarrollador con más de 2 años de experiencia en Angular, Spring Boot y arquitecturas REST.
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
        <a
          href="https://github.com/larajosed"
          target="_blank"
          class="social-link"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/joselarameza"
          target="_blank"
          class="social-link"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
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
  padding: 15px 35px;
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
  background-color: #4a9eff;
  color: #ffffff;
}

.hero-button-primary:hover {
  background-color: #357abd;
  box-shadow: 0px 5px 15px rgba(74, 158, 255, 0.5);
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
  color: #4a9eff;
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
  font-size: 1.8em;
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
