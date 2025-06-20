<template>
  <div class="container">
    <div class="titulo">
      <h1>FORMACIÓN</h1>
    </div>
  </div>

  <section>
    <div class="text">
      <div class="logo-container">
        <img class="icon" src="@/assets/images/ilerna.png" alt="ILERNA" />
      </div>
      <div class="text-container">
        <b>Ilerna FP: Técnico Superior en Desarrollo de Aplicaciones Web.</b>
        <p>
          Durante mis estudios en Ilerna FP, me especialicé en el desarrollo,
          implantación y mantenimiento de aplicaciones web robustas y
          eficientes. Adquirí conocimientos sólidos en la creación de APIs REST
          utilizando Node.js y tambien Spring Boot para el backend, gestionando
          bases de datos SQL de manera eficaz. También aprendí a diseñar
          interfaces de usuario intuitivas y responsivas con HTML, CSS y
          JavaScript, garantizando el acceso seguro a los datos y el
          cumplimiento de los estándares de accesibilidad, usabilidad y calidad.
        </p>
        <div>
          <i>Feb. 2023 - May. 2025.</i>
          <br />
          <i>Madrid, España.</i>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="text">
      <div class="logo-container">
        <img
          class="icon"
          src="@/assets/images/idBootcamps.png"
          alt="IDBOOTCAMPS"
        />
      </div>
      <div class="text-container">
        <b>ID Bootcamp: Programación y desarrollo web Full Stack.</b>
        <p>
          Adquirí habilidades integrales en el desarrollo de aplicaciones web
          full-stack, centrándome en el ecosistema JavaScript. Me especialicé en
          el potente stack MEAN (MongoDB, Express, Angular, Node.js), lo que me
          permite desenvolverme con soltura en cada etapa del ciclo de vida de
          una aplicación web.
        </p>
        <div>
          <i>450 horas.</i>
          <br />
          <i>Madrid, España.</i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Training",
};
</script>

<style scoped>
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

section {
  width: 100%;
  margin-bottom: 30px;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 1px 8px -3px rgba(0, 0, 0, 0.5);
  transition: 0.8s ease;
}

section:hover {
  box-shadow: 0px 4px 16px -1px #000000;
  transform: scale(1.01);
  transition: 0.3s ease-in-out;
}
.text {
  display: flex;
  max-width: 35em;
  padding-inline-end: 1em;
  text-align: justify;
  font-family: sans-serif;
  color: #f0f0f0;
  flex-grow: 1;
}

.logo-container {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2c2c;
  border-radius: 8px;
  padding: 10px;
}

.icon {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  filter: invert(100%);
  display: block;
}

.text-container {
  margin-left: 25px;
}

.text-container b {
  display: block;
  font-size: 1.3em;
  color: #ffffff;
  margin-bottom: 8px;
}

.text-container p {
  line-height: 1.6;
  margin-bottom: 10px;
  color: #c0c0c0;
  font-size: 0.95em;
  text-align: justify;
}

.text-container i {
  color: #a0a0a0;
}

@media (max-width: 767px) {
  .text {
    flex-direction: column;
    align-items: center;
    padding-inline-end: 0;
  }

  .logo-container {
    margin-bottom: 15px;
    margin-right: 0;
  }

  .text-container {
    margin-left: 0;
    width: 100%;
  }

  .text-container b,
  .text-container p,
  .text-container div i {
    text-align: center;
  }
}

@media (min-width: 720px) {
  section {
    background-color: #1a1a1a;
    margin-bottom: 4em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    transition: 0.8s ease;
  }

  section:hover {
    box-shadow: 0px 4px 16px -1px #000000;
    transform: scale(1.01);
    transition: 0.3s ease-in-out;
  }

  .text {
    display: flex;
    max-width: 55em;
    margin: 2em;
    text-align: justify;
  }
}
</style>
