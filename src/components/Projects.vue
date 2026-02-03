<script>
import Structure from "./Structure.vue";
import TitleStructure from "./TitleStructure.vue";

export default {
  data() {
    return {
      arrProjects: [
        {
          logo: "images/nutrition.png",
          title: "Nutrition's Digital Assistant",
          mainParagraph:
            "Aplicación completa para la creación y gestión de dietas personalizadas. Permite a los usuarios solicitar y visualizar sus dietas, mientras que los administradores pueden revisar solicitudes y diseñar planes nutricionales personalizados.",
          technologies: [
            { name: "Angular 17", color: "#dd0031" },
            { name: "Spring Boot", color: "#6db33f" },
            { name: "MySQL", color: "#4479a1" },
            { name: "Liquibase", color: "#2962ff" },
            { name: "Bootstrap", color: "#7952b3" },
          ],
          features: [
            "<strong>Panel de Usuario:</strong> Solicitud de dietas personalizadas, visualización de planes nutricionales y gestión de sesiones",
            "<strong>Panel de Administrador:</strong> Gestión de solicitudes pendientes, creación y edición de dietas, administración de recetas",
            "<strong>Arquitectura REST:</strong> API robusta con Spring Boot para comunicación frontend-backend",
            "<strong>Base de datos relacional:</strong> Gestión eficiente de datos con MySQL y control de versiones con Liquibase",
          ],
          githubUrl: "https://github.com/larajosed",
          demoUrl: "#",
          secondaryParagraph: [
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
            "Aplicación web de fitness que permite consultar ejercicios y rutinas de entrenamiento con referencias multimedia para facilitar la correcta ejecución de cada movimiento.",
          technologies: [
            { name: "Angular 11", color: "#dd0031" },
            { name: "Node.js", color: "#339933" },
            { name: "Express", color: "#000000" },
            { name: "MySQL", color: "#4479a1" },
            { name: "Bootstrap", color: "#7952b3" },
          ],
          features: [
            "<strong>Catálogo de Ejercicios:</strong> Base de datos completa con ejercicios categorizados y referencias visuales",
            "<strong>Rutinas Personalizadas:</strong> Creación y consulta de rutinas de entrenamiento",
            "<strong>API REST:</strong> Backend desarrollado con Node.js y Express para gestión eficiente de datos",
            "<strong>Diseño Responsive:</strong> Interfaz adaptable a diferentes dispositivos con Bootstrap",
          ],
          githubUrl: "https://github.com/larajosed",
          demoUrl: "#",
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
    TitleStructure,
  },
};
</script>

<template>
  <TitleStructure titleText="PROYECTOS"></TitleStructure>
  <Structure
    :jsonData="project"
    v-for="project in arrProjects"
    :key="project.title"
  ></Structure>
</template>

<style scoped></style>
