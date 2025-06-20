<script>
import BarsIcon from "./icons/BarsIcon.vue";
import PhoneIcon from "./icons/PhoneIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import EmailIcon from "./icons/EmailIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
import WhatsappIcon from "./icons/WhatsappIcon.vue";
import { RouterLink } from "vue-router";

export default {
  name: "NavBar",
  components: {
    BarsIcon,
    PhoneIcon,
    GithubIcon,
    EmailIcon,
    LinkedinIcon,
    WhatsappIcon,
    RouterLink,
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    show(newValue) {
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
      this.show = !this.show;
    },
    closeMenu() {
      this.show = false;
    },
    handleClickOutside(event) {
      const toggler = this.$refs.navbarToggleButton;
      const menu = this.$refs.navbarMenu;

      if (
        toggler &&
        !toggler.contains(event.target) &&
        menu &&
        !menu.contains(event.target)
      ) {
        this.closeMenu();
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<template>
  <nav class="navbar" id="navbar">
    <div class="nav-container-icons">
      <div class="items">
        <a href="https://github.com/larajosed" target="_blank">
          <GithubIcon />
        </a>
      </div>
      <div class="items">
        <a href="https://linkedin.com/in/joselarameza" target="_blank">
          <LinkedinIcon />
        </a>
      </div>
      <div class="items">
        <a href="mailto:larajosed@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <div class="items">
        <a href="tel:+34693537526"><phone-icon /></a>
      </div>
      <div class="items">
        <a
          href="https://api.whatsapp.com/send/?phone=346935537526"
          target="_blank"
        >
          <WhatsappIcon />
        </a>
      </div>
      <div class="item-bar" @click="toggleMenu()" ref="navbarToggleButton">
        <BarsIcon />
      </div>
    </div>

    <transition name="slide-fade">
      <div class="container-fluid" v-if="show" ref="navbarMenu">
        <div class="navbar-nav">
          <router-link to="/about" class="text" @click="closeMenu()">
            <div class="nav-item">SOBRE MÍ</div>
          </router-link>

          <router-link to="/training" class="text" @click="closeMenu()">
            <div class="nav-item">FORMACIÓN</div>
          </router-link>

          <router-link to="/experience" class="text" @click="closeMenu()">
            <div class="nav-item">EXPERIENCIA PROFESIONAL</div>
          </router-link>

          <router-link to="/projects" class="text" @click="closeMenu()">
            <div class="nav-item">PROYECTOS</div>
          </router-link>

          <router-link to="/technologies" class="text" @click="closeMenu()">
            <div class="nav-item">TECNOLOGÍAS</div>
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
#navbar {
  background-color: #2a2a2a;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 10px 0;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
}

.nav-container-icons {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
}

.items {
  width: 2.8em;
  height: 2.8em;
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
}

.items a {
  color: #f0f0f0;
  transition: color 0.3s ease;
}

.items a:hover {
  color: #c0c0c0;
}

.item-bar {
  width: auto;
  margin-left: auto;
  margin-right: 25px;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 1.5em;
  color: #f0f0f0;
}

.item-bar:hover {
  color: #c0c0c0;
}

.container-fluid {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #2a2a2a;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
  padding-bottom: 10px;
  z-index: 999;
}

.navbar-nav {
  width: 100%;
  text-align: center;
  padding: 0;
}

.navbar-nav .text {
  display: block;
  text-decoration: none;
  color: #f0f0f0;
  font-weight: bold;
}

.nav-item {
  padding: 12px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 768px) {
  .items {
    width: 2.2em;
    height: 2.2em;
    font-size: 1em;
  }
  .item-bar {
    font-size: 1.3em;
  }
}
</style>
