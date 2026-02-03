<script>
import BoxStructure from "./BoxStructure.vue";
import TitleStructure from "./TitleStructure.vue";

export default {
  name: "Training",
  data() {
    return {
      arrTrainnig: [
        {
          logo: "images/ilerna.png",
          title:
            "Técnico Superior en Desarrollo de Aplicaciones Web",
          mainParagraph: [
            "<strong>Ilerna FP</strong> - Especialización en desarrollo web full-stack con tecnologías modernas: APIs REST con Node.js y Spring Boot, bases de datos SQL, y diseño de interfaces responsivas con HTML, CSS y JavaScript.",
          ],

          date: "Feb. 2023 - May. 2025",

          country: "Madrid, España",
        },

        {
          logo: "images/idBootcamps.png",
          title: "Programación y Desarrollo Web Full Stack",
          mainParagraph: [
            "<strong>ID Bootcamp</strong> - Bootcamp intensivo (450 horas) enfocado en el stack MEAN (MongoDB, Express, Angular, Node.js) y desarrollo de aplicaciones web modernas.",
          ],
          date: "450 horas",
          country: "Madrid, España",
        },
      ],
    };
  },
  components: {
    TitleStructure,
    BoxStructure,
  },
};
</script>

<template>
  <TitleStructure titleText="FORMACIÓN"></TitleStructure>
  <BoxStructure
    :jsonData="item"
    v-for="item in arrTrainnig"
    :key="item.title"
  ></BoxStructure>
</template>

<style scoped></style>
