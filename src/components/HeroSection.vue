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
        class="hero-tagline animate__animated animate__fadeInUp animate__delay-1s"
      >
        Desarrollador Web Full Stack
      </p>
      <button
        :class="{ 'is-hidden': buttonHidden }"
        ref="portfolioButton"
        class="hero-button animate__animated animate__fadeInUp animate__delay-2s"
        @click="toggleMenu"
      >
        Visita mi Portfolio
      </button>
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
  margin-bottom: 0px;
  color: #ffffff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  letter-spacing: 2px;
  font-weight: 300;

  color: #e0e0e0;
  text-shadow: 1px 0px #333333, 0px 1px #222222, 0px 0px #111111,
    0px 2px #444444;
  letter-spacing: -1px;
}

.hero-tagline {
  font-family: "Arial", sans-serif;
  font-size: 1.5em;
  color: #cccccc;
  margin-bottom: 40px;
  line-height: 1.5;
  color: #e0e0e0;
}

.hero-buttom {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
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

  .hero-tagline {
    font-size: 1.2em;
    margin-bottom: 30px;
  }

  .hero-button {
    display: none;
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
  .hero-tagline {
    font-size: 1em;
  }
  .hero-buttom {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
