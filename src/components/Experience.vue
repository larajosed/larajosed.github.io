<script>
import BoxStructure from "./BoxStructure.vue";
import TitleStructure from "./TitleStructure.vue";
export default {
  name: "Experience",
  data() {
    return {
      arrExperience: [
        {
          logo: "images/sngular-logo-vector.png",
          title: "Desarrollador Full Stack Trainee - Sngular.",
          mainParagraph: [
            " Como desarrollador full stack, contribuí al desarrollo integral de una aplicación, donde realicé mejoras y evolutivos en funcionalidades existentes, además de construir nuevos componentes desde cero. En el frontend, utilicé Angular, Angular Material, Bootstrap y Jest. Para el backend, trabajé con Spring Boot, JUnit y Mockito. Apliqué Test-Driven Development (TDD) en mis tareas, gestioné el control de versiones con Git y utilicé Trello para la gestión de tareas, siguiendo metodologías ágiles como Scrum.",
          ],

          date: "Mar. 2025 - Jun. 2025.",

          country: "Madrid, España.",
        },

        {
          logo: "images/aspasia.png",
          title: "Desarrollador Full Stack Jr - Grupo Aspasia.",
          mainParagraph: [
            "Como desarrollador full stack, participé en varios proyectos dentro del sector de la formación para empresas, organizaciones e instituciones. Mis responsabilidades incluyeron el mantenimiento y desarrollo de nuevas funcionalidades en una herramienta de gestión de formación para empresas y la implementación de mejoras en diversas aplicaciones. Para el frontend, utilicé jQuery, y para el backend, PHP.",
          ],
          date: "Jun. 2023 - Dic. 2023.",
          country: "Madrid, España.",
        },
        {
          logo: "images/deimos.png",
          title: "Desarrollador Full Stack Jr - Elecnor Deimos.",
          mainParagraph: [
            "En mi experiencia como desarrollador full stack, participé en varios proyectos, enfocándome principalmente en el desarrollo de aplicaciones para el frontend. Utilicé Angular y Angular Material, y fui responsable tanto de la resolución de incidencias como de la creación de nuevas funcionalidades. Para la visualización de datos complejos, como gráficas y esquemas de conexión, integré la potente librería D3.js en las aplicaciones.",
          ],
          date: "Jun. 2022 - Nov. 2022",
          country: "Madrid, España.",
        },
      ],
    };
  },
  components: {
    BoxStructure,
    TitleStructure,
  },
};
</script>

<template>
  <TitleStructure titleText="EXPERIENCIA PROFESIONAL"></TitleStructure>
  <BoxStructure
    :jsonData="item"
    v-for="item in arrExperience"
    :key="item.title"
  ></BoxStructure>
</template>

<style scoped></style>
