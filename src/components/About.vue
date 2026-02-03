<script>
import TitleStructure from "./TitleStructure.vue";
export default {
  name: "Abouts",
  components: { TitleStructure },
};
</script>

<template>
  <TitleStructure titleText="SOBRE MI"></TitleStructure>
  <section>
    <div class="text">
      <p>
        Desarrollador Full Stack con más de 2 años de experiencia en el desarrollo de aplicaciones web escalables y eficientes. 
        Especializado en Angular, Spring Boot y arquitecturas REST, con un sólido dominio de metodologías ágiles, Test-Driven Development (TDD) y trabajo en equipo.
      </p>
      <p>
        He trabajado en proyectos end-to-end, desde el diseño de interfaces responsivas con Angular Material y Bootstrap, 
        hasta la implementación de APIs robustas con Spring Boot, Node.js y Express. Experiencia en bases de datos SQL y NoSQL, 
        gestión de versiones con Git, y testing con Jest, JUnit y Mockito.
      </p>
      <p>
        Me caracterizo por ser una persona resolutiva, orientada a resultados y comprometida con la excelencia técnica. 
        Busco constantemente mejorar mis habilidades y aplicar las mejores prácticas de desarrollo para crear soluciones de calidad 
        que generen valor real para usuarios y equipos.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  margin-bottom: 30px;
  background-color: #1a1a1a;
  border-radius: 8px;
  transition: 0.8s ease;
  box-shadow: 0px 1px 8px -3px #080808e8;
  opacity: 0.6;
  transition-property: opacity;
}

section:hover {
  box-shadow: 0px 4px 16px -1px #000000;
  transform: scale(1.01);
  transition: 0.3s ease-in-out;
  opacity: 1;
}

.text {
  text-align: justify;
  max-width: 35em;
  padding: 1em;
  font-family: sans-serif;
  color: #f0f0f0;
}

@media (min-width: 720px) {
  section {
    align-items: center;
    margin-bottom: 4em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .text {
    max-width: 55em;
  }
}
</style>
