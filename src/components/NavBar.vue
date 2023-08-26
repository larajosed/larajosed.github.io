<script>
import BarsIcon from './icons/BarsIcon.vue'
import PhoneIcon from './icons/PhoneIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import EmailIcon from './icons/EmailIcon.vue'
import About from './About.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import WhatsappIcon from './icons/WhatsappIcon.vue'

export default {
    components: {
        BarsIcon,
        PhoneIcon,
        GithubIcon,
        EmailIcon,
        About,
        LinkedinIcon,
        WhatsappIcon
    },
    data() {
        return {
            show: false
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
                <a href="https://api.whatsapp.com/send/?phone=34693537526">
                    <WhatsappIcon />
                </a>
            </div>
            <div class="item-bar" id="#menu" @click="showMenu()">
                <BarsIcon />
            </div>
        </div>


        <div class="container-fluid" v-show="show">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="text" href="#">SOBRE MI</a>
                </li>
                <li class="nav-item">
                    <a class="text" href="#/training">FORMACIÓN</a>
                </li>
                <li class="nav-item">
                    <a class="text" href="#/experience">EXPERIENCIA PROFESIONAL</a>
                </li>
                <li class="nav-item">
                    <a class="text" href="#/projects">PROYECTOS</a>
                </li>
                 <li class="nav-item" >
                    <a class="text" href="#/technologies">TECNOLOGÍAS</a>
                </li>
                
            </ul>
        </div>
    </nav>
</template>
 

<style scoped>
#navbar {
    background-color: #abababd1;
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

li {
    transition: 0.7s
}
li:hover {
    background-color: rgb(249, 249, 249);
}

li:hover a {
    color: rgb(126, 128, 130);
    text-shadow: 0px 4px 3px rgb(179 175 175);
    transition: 0.7s;
}



.nav-container-icons {
    display: flex;
    width: 100%;
}

.nav-container-icons .item-bar {
    justify-content: end;
}

.items {
    width: 4em;
    margin-top: 0.5em;
    margin-left: 0.5em;
}

.items a {
    transition: 0.5s;
}
.items a:hover {
    color: rgb(126, 128, 130);
} 

.item-bar {
    width: 100%;
    margin-top: 0.5em;
    text-align: end;
    margin-right: 0.5em;
    border: 0;
    cursor: pointer;
}

.item-bar{
    transition: 0.5s;
}

.item-bar:hover {
    color: rgb(126, 128, 130);
}
</style>