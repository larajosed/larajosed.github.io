<template>
  <div class="container">
    <div class="titulo">
      <h1>FORMACIÓN</h1>
    </div>
  </div>
  <Section>
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
  </Section>
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

<style scoped>
section {
  width: 100%;
  margin-bottom: 30px;
}

section:hover {
  box-shadow: 0px 1px 8px -3px #333434;
}

.icon {
  width: 4em;
  margin-right: 1em;
  display: inline-block;
}

.text {
  display: flex;
  max-width: 35em;
  padding-inline-end: 1em;
  text-align: justify;
  font-family: sans-serif;
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
@media (min-width: 720px) {
  section {
    background-color: #f1f1f1;
    margin-bottom: 4em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    transition: 0.8s ease;
  }

  section:hover {
    box-shadow: 0px 4px 16px -1px #97a7b3;
    transform: 0.5s;
  }

  .text {
    display: flex;
    max-width: 55em;
    margin: 2em;
    text-align: justify;
  }
}
</style>
