<template>
  <section>
    <div class="container-img">
      <img src="../assets/images/foto.jpg" alt="FOTO">
    </div>
    <div class="text">
      <p> Profesional en continua formación y con experiencia en el desarrollo de aplicaciones web full-stack.</p>
      <p>Soy una persona resolutiva, acostumbrada a trabajar por proyectos y orientada a resultados.</p>
      <p>Mis motivaciones profesionales son aportar valor a los proyectos a través del trabajo en equipo, así como
        continuar
        desarrollándome profesionalmente.</p>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 1em;

}

.text {
  text-align: justify;
  max-width: 35em;
  padding: 1em;
}

.container.img {
  max-width: 6em;
  max-height: 8em;
}

@media (min-width: 720px) {
  section {
    margin-top: 4em;
    background-color: #F1F1F1;
    align-items: center;
  }

  .text {
    max-width: 55em;
    margin: 2em;
  }

  .container-img {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
