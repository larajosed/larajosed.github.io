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
            "Toma y análisis de requisitos funcionales para propuesta de nuevos desarrollos en una herramienta de gestión de formación en empresas para cliente BENTELER Group. Implementación de las soluciones propuestas al clientes. Tecnologías: JQuery y PHP. Exportación de datos en formato xlsx (Excel) para su carga en FUNDAE.",
          ],
          date: "Jun. 2023 - Dic. 2023.",
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
