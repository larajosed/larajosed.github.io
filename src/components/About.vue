<template>
  <div class="container about-me-section" id="sobre-mi">
    <div class="titulo">
      <h1>SOBRE MI</h1>
    </div>
  </div>
  <section>
    <div class="text">
      <p>
        Soy un profesional con formación continua y experiencia en el desarrollo
        de aplicaciones web full-stack. Me caracterizo por ser una persona
        resolutiva, orientada a resultados y con una gran pasión por el
        aprendizaje y el crecimiento profesional. Estoy acostumbrado a trabajar
        por proyectos, lo que me ha permitido desarrollar una mentalidad
        práctica y eficiente.
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
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 15px;
  transition: 0.8s ease;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 15px;
}

section:hover {
  box-shadow: 0px 4px 16px -1px #000000;
  transform: scale(1.01);
  transition: 0.3s ease-in-out;
}

.text {
  text-align: justify;
  max-width: 35em;
  padding: 1em;
  font-family: sans-serif;
  color: #f0f0f0;
}

.titulo {
  text-align: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 15px;
  color: #e0e0e0;
  text-shadow: 1px 0px #333333, 0px 1px #222222, 0px 0px #111111,
    0px 2px #444444;
  justify-content: center;
  display: flex;
  letter-spacing: 2px;
}

@media (min-width: 720px) {
  section {
    background-color: #1a1a1a;
    align-items: start;
  }

  .text {
    max-width: 55em;
  }

  .container-img {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 2em;
  }
}
</style>
