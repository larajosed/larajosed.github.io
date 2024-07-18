<template>
  <div class="container">
    <div class="titulo"><h1>SOBRE MI</h1></div>
  </div>
  <section>
    <div class="container-img">
      <img src="../assets/images/foto.jpg" alt="FOTO" />
    </div>
    <div class="text">
      <p>
        Profesional en continua formación y con experiencia en el desarrollo de
        aplicaciones web full-stack.
      </p>
      <p>
        Soy una persona resolutiva, con muchas ganas de aprender y crecer a
        nivel profesional. Acostumbrado a trabajar por proyectos y orientada a
        resultados.
      </p>
      <p>
        Actualmente me encuentro terminando mis estudios de un grado superior en
        desarrollo de aplicaciones web.
      </p>
      <p>
        Me encantaría tener la oportunidad de iniciarme como desarrollador
        junior y ser parte de un equipo del que pueda nutrirme, aprender y
        seguir potenciando mis conocimientos. Crecer en él, tanto personal como
        profesionalmente y aportar todas mis ganas. Asumir cada reto que se
        ponga por delante, juntos alcanzar todos y cada uno de los objetivos.
      </p>
      <p>
        Mis motivaciones profesionales son aportar valor a los proyectos a
        través del trabajo en equipo, así como continuar desarrollándome
        profesionalmente como desarrollador web full-stack.
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
}

section:hover {
  box-shadow: 0px 1px 8px -3px #333434;
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}

.text {
  text-align: justify;
  max-width: 35em;
  padding: 1em;
  font-family: sans-serif;
}

.container-img {
  max-width: 10em;
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
