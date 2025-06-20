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
      <button ref="portfolioButton" class="hero-button" @click="toggleMenu">
        Ver mi Portafolio
      </button>
    </div>

    <HeroMenu
      ref="heroMenuComponent"
      :show="showHeroMenu"
      :buttonTop="buttonPosition.top"
      :buttonHeight="buttonPosition.height"
      @item-clicked="closeHeroMenu"
    />
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
      buttonPosition: {
        top: 0,
        height: 0,
      },
    };
  },
  watch: {
    showHeroMenu(newValue) {
      if (newValue) {
        setTimeout(() => {
          document.addEventListener("click", this.handleClickOutside);
        }, 0);
      } else {
        document.removeEventListener("click", this.handleClickOutside);
      }
    },
  },
  methods: {
    toggleMenu(event) {
      if (event) {
        event.stopPropagation();
      }
      this.showHeroMenu = !this.showHeroMenu;

      if (this.showHeroMenu) {
        this.$nextTick(() => {
          const button = this.$refs.portfolioButton;
          if (button) {
            const rect = button.getBoundingClientRect();
            const heroSectionRect = this.$el.getBoundingClientRect();

            this.buttonPosition.top = rect.top - heroSectionRect.top;
            this.buttonPosition.height = rect.height;
          }
        });
      }
    },
    handleClickOutside(event) {
      const button = this.$refs.portfolioButton;
      const menu = this.$refs.heroMenuComponent?.$el;
      if (
        button &&
        !button.contains(event.target) &&
        menu &&
        !menu.contains(event.target)
      ) {
        this.closeHeroMenu();
      }
    },
    closeHeroMenu() {
      this.showHeroMenu = false;
    },
  },

  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.hero-button {
  background-color: #c1d2e4;
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
  margin-top: 20px;
}

.hero-button:hover {
  background-color: #000000;
  transform: translateY(-5px);
  box-shadow: 0px 5px 5px rgba(158, 144, 123, 0.6);
  color: #cccccc;
}

.hero-section {
  background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
  color: #f0f0f0;
  text-align: center;
  padding: 80px 20px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  z-index: 10;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-img {
  max-width: 15em; /* Aumentado de 10em a 15em para pantallas grandes */
  margin-bottom: 15px;
  transition: 0.8s ease;
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
  font-family: "Arial Black", Arial, sans-serif;
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #ffffff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  letter-spacing: 2px;
}

.hero-tagline {
  font-family: "Arial", sans-serif;
  font-size: 1.5em;
  color: #cccccc;
  margin-bottom: 40px;
  line-height: 1.5;
}

.hero-buttom {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 15px;
    min-height: 500px;
  }
  .container-img {
    width: 200px; /* Aumentado de 150px a 200px para tabletas */
    height: 200px; /* Aumentado de 150px a 200px para tabletas */
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
    padding: 12px 25px;
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .container-img {
    width: 180px; /* Aumentado de 150px a 180px para móviles pequeños */
    height: 180px; /* Aumentado de 150px a 180px para móviles pequeños */
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
