<template>
  <transition name="slide-up">
    <div v-if="show" class="hero-menu" :style="menuPositionStyle">
      <div class="menu-items">
        <a @click="navigateToSection('/experience')" class="menu-item"
          >EXPERIENCIA</a
        >
        <a @click="navigateToSection('/projects')" class="menu-item"
          >PROYECTOS</a
        >
        <a @click="navigateToSection('/technologies')" class="menu-item"
          >TECNOLOGÍAS</a
        >
        <a @click="navigateToSection('/about')" class="menu-item">SOBRE MÍ</a>
        <a @click="navigateToSection('/training')" class="menu-item"
          >FORMACIÓN</a
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
  },
  methods: {
    navigateToSection(path) {
      this.$emit("item-clicked");
      setTimeout(() => this.$router.push(path), 500);
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
  min-width: 260px;
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
  transition-property: opacity;
}

.slide-up-enter-from {
  opacity: 0;
}

.slide-up-enter-to {
  opacity: 1;
}

.slide-up-leave-from {
  opacity: 1;
}

.slide-up-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
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
