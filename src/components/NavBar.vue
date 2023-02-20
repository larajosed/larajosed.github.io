<script>
import BarsIcon from './icons/BarsIcon.vue'
import PhoneIcon from './icons/PhoneIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import EmailIcon from './icons/EmailIcon.vue'
import About from './About.vue'

export default {
    components: {
    BarsIcon,
    PhoneIcon,
    GithubIcon,
    EmailIcon,
    About
},
    data() {
        return {
            show: true
        }
    },
    methods: {
        showMenu: function () {
            this.show = !this.show;
        }
    }
}
</script>


<template>
    <nav class="navbar" id="navbar">
        <div class="nav-container-icons">
            <div class="items">
                <phone-icon></phone-icon>
            </div>
            <div class="items">
                <GithubIcon />
            </div>
            <div class="items">
                <EmailIcon />
            </div>
            <button class="item-bar" id="#menu" @click="showMenu()">
                <BarsIcon />
            </button>
        </div>


        <div class="container-fluid" v-show="show">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="text" href="#">SOBRE MI</a>
                </li>
                <li class="nav-item">
                    <a class="text" href="#">FORMACIÓN</a>
                </li>
                <li class="nav-item">
                    <a class="text" href="#">PROYECTOS</a>
                </li>
                <li class="nav-item">
                    <a class="text" href="">TECNOLOGÍAS</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
 

<style scoped>
#navbar {
    background-color: #e0e0e07f;
    background-blend-mode: darken;
    top: 2em;
}

.navbar-nav {
    width: 100%;
    text-align: center;
    padding: 0;
}

.navbar-nav>li {
    float: none;
    list-style: none;
    text-decoration: none;
    padding: 0.5em;
}

a {
    color: black;
}

a:link {
    text-decoration: none;
}

li:hover a {
    color: rgb(126, 128, 130);
    text-shadow: 0px 4px 3px rgb(179 175 175);
}

li:hover {
    background-color: rgba(255, 252, 252, 0.952);
}
.nav-container-icons {
    display: inline-flex;
    width: 100%;
}

.items {
    width: 4em;
    margin-top: 0.5em;
    margin-left: 0.5em;

}

.item-bar {
    width: 100%;
    margin-top: 0.5em;
    text-align: end;
    margin-right: 0.5em;
    border: 0;
}
</style>