<script>
import Structure from "./Structure.vue";
export default {
  data() {
    return {
      arrProjects: [
        {
          logo: "images/nutrition.png",
          title: "Nutrition's Digital Assistant",
          mainParagraph:
            " Nutrition's Digital Assistant es una aplicación para crear dietas personalizadas, en la que se puede acceder como usuario para ver o solicitar dietas y como administrador para ver dietas solicitadas y crearlas.",
          secondaryParagraph: [
            "<b>Usuario:</b> puede solicitar tu dieta personalizada y podrás observarla en el apartado mis dietas. Iniciar y cerrar sesión, ver su dieta el día y las veces que quieras.",
            "<b>Administrador:</b> se encarga de ver las solicitudes de dietas pendientes, crear nuevas dietas, editar o eliminar dietas. Así como también crear o eliminar recetas.",
            " Para el <b>Front end</b>, se desarrolla la aplicación con <b>Angular 17, JavaScript, CSS y Bootstrap.</b>",
            "El <b>Back end</b> se desarrolla con <b>Spring Boot</b> que es Framework para el desarrollo de aplicaciones y páginas webs con <b>Java</b> como lenguaje de programación y <b>Liquidbase</b> que es una librería Open Source, que nos permitirá realizar el seguimiento, gestión y aplicación de cambios en el modelo de datos. Se realiza mediante la creación de scripts sql incrementales. Con lo que comenzamos con scripts de creación de tablas, de inserción de datos y, a medida que avanza el desarrollo, se van creando scripts con las modificaciones oportunas que exige la tarea que está llevando a cabo. Liquidbase en la aplicación de backend se encarga de la ejecución de scripts, analizando los que se han ejecutados y los que no se han ejecutados para asegurar que el modelo de datos esta correcto.",
            " Para la <b>base de datos</b> utilicé <b>MySQL</b> que es un sistema de base de datos relacionales.",
          ],
          images: [
            "images/nutrition/Captura4.PNG",
            "images/nutrition/Captura5.PNG",
            "images/nutrition/Receta.PNG",
            "images/nutrition/Dietas.PNG",
            "images/nutrition/Captura1.PNG",
            "images/nutrition/LOGIN.PNG",
            "images/nutrition/Captura6.PNG",
            "images/nutrition/Captura8.PNG",
            "images/nutrition/Captura2.PNG",
          ],
        },
        {
          logo: "images/aplicacion.jpg",
          title: "MyGym App",
          mainParagraph:
            "Es una aplicación que permite consultar ejercicios y rutinas para entrenamiento de fitness con referencias multimedia.",
          secondaryParagraph: [
            "La aplicación se compone de una aplicación de <b>Front end</b> desarrollada en <b>Angular 11</b> con maquetación responsive con <b>Bootstrap.</b>",
            "El <b>Back end</b> fue desarrollado con <b>NodeJS</b> haciendo uso de <b>Express</b> para exponer una API que permite consultar ejercicios y rutinas.",
            "Para la consulta de ejercicos y rutinas utlice una <b>base de datos MySQL.</b>",
          ],
          images: [
            "images/mygym/Home1.PNG",
            "images/mygym/Home2.PNG",
            "images/mygym/Ejercicios.PNG",
            "images/mygym/Rutinas.PNG",
            "images/mygym/registro1.PNG",
            "images/mygym/Login.PNG",
            "images/mygym/GuardarEjercicio.PNG",
          ],
        },
      ],
    };
  },
  components: {
    Structure,
  },
};
</script>

<template>
  <div class="container">
    <div class="titulo"><h1>PROYECTOS</h1></div>
  </div>
  <div class="project-box">
    <Structure :jsonData="project" v-for="project in arrProjects"></Structure>
  </div>
</template>

<style scoped>
.project-box {
  display: flex;
  flex-direction: column;
}

.titulo {
  text-align: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 15px;
  color: #5b5b5b;
  text-shadow: 1px 0px #dbd5d5, 0px 1px #c7c3c3, 0px 0px #bdb8b8,
    0px 2px #c4bfbf;
  justify-content: center;
  display: flex;
  letter-spacing: 2px;
}
</style>
