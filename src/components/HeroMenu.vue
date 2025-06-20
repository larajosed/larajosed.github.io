<template>
  <transition name="slide-up">
    <div v-if="show" class="hero-menu" :style="menuPositionStyle">
      <div class="menu-items">
        <a @click="navigateToSection('/about')" class="menu-item">SOBRE MÍ</a>
        <a @click="navigateToSection('/training')" class="menu-item"
          >FORMACIÓN</a
        >
        <a @click="navigateToSection('/experience')" class="menu-item"
          >EXPERIENCIA PROFESIONAL</a
        >
        <a @click="navigateToSection('/projects')" class="menu-item"
          >PROYECTOS</a
        >
        <a @click="navigateToSection('/technologies')" class="menu-item"
          >TECNOLOGÍAS</a
        >
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HeroMenu",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    buttonTop: {
      type: Number,
      default: 0,
    },
    buttonHeight: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    finalTopPosition() {
      return this.buttonTop + this.buttonHeight + 15;
    },
    menuPositionStyle() {
      if (this.show) {
        return {
          top: `${this.finalTopPosition}px`,
          left: "50%",
          transform: "translateX(-50%)",
        };
      }
      return {};
    },
  },
  methods: {
    navigateToSection(path) {
      this.$router.push(path);
      this.$emit("item-clicked");
    },
  },
};
</script>

<style scoped>
.hero-menu {
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 15px 20px;
  position: absolute;
  z-index: 999;
  min-width: 260px;
  max-width: 85%;
  left: 50%;
  transform: translateX(-50%);
}

.menu-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.menu-item {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1em;
  padding: 8px 15px;
  border-radius: 6px;
  transition: background-color 0.2s ease-out, color 0.2s ease-out,
    transform 0.15s ease-out, box-shadow 0.2s ease-out, border 0.2s ease-out;
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid transparent;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.menu-item:active {
  transform: translateY(-0.5px);
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: none;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition-property: opacity, transform, top;
}

.slide-up-enter-from {
  opacity: 0;
  top: 100%;
  transform: translateY(0%) translateX(-50%);
}

.slide-up-enter-to {
  opacity: 1;
}

.slide-up-leave-from {
  opacity: 1;
}

.slide-up-leave-to {
  opacity: 0;
  top: 100%;
  transform: translateY(0%) translateX(-50%);
}

@media (max-width: 768px) {
  .hero-menu {
    width: 90%;
    padding: 10px;
  }
  .menu-items {
    flex-direction: column;
    gap: 10px;
  }
  .menu-item {
    width: 100%;
    padding: 10px;
    font-size: 0.95em;
  }
}
</style>
