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
            "Ilerna FP: Técnico Superior en Desarrollo de Aplicaciones Web.",
          mainParagraph: [
            " Durante mis estudios en Ilerna FP, me especialicé en el desarrollo, implantación y mantenimiento de aplicaciones web robustas y eficientes. Adquirí conocimientos sólidos en la creación de APIs REST utilizando Node.js y tambien Spring Boot para el backend, gestionando bases de datos SQL de manera eficaz. También aprendí a diseñar interfaces de usuario intuitivas y responsivas con HTML, CSS y JavaScript, garantizando el acceso seguro a los datos y el cumplimiento de los estándares de accesibilidad, usabilidad y calidad.",
          ],

          date: "Feb. 2023 - May. 2025.",

          country: "Madrid, España.",
        },

        {
          logo: "images/idBootcamps.png",
          title: "ID Bootcamp: Programación y desarrollo web Full Stack.",
          mainParagraph: [
            "Adquirí habilidades integrales en el desarrollo de aplicaciones web full-stack, centrándome en el ecosistema JavaScript. Me especialicé en el potente stack MEAN (MongoDB, Express, Angular, Node.js), lo que me permite desenvolverme con soltura en cada etapa del ciclo de vida de una aplicación web.",
          ],
          date: "450 horas.",
          country: "Madrid, España.",
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
