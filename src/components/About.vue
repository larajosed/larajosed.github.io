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
        Soy un profesional en formación continua y experiencia en el desarrollo
        de aplicaciones web full-stack. Me caracterizo por ser una persona
        resolutiva, orientada a resultados y con una gran pasión por el
        aprendizaje y el crecimiento profesional.
      </p>
      <p>
        He finalizado mis estudios de Técnico Superior en Desarrollo de
        Aplicaciones Web, consolidando mis conocimientos y preparándome para
        nuevos desafíos.
      </p>
      <p>
        Mi objetivo es iniciar mi carrera como desarrollador web junior en un
        entorno dinámico, donde pueda integrarme en un equipo, aportar valor,
        aprender y seguir potenciando mis habilidades. Estoy comprometido con el
        crecimiento continuo, tanto a nivel personal como profesional, y listo
        para asumir cada reto con entusiasmo, colaborando para alcanzar los
        objetivos del equipo.
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
