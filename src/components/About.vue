<template>
  <section>
    <div class="container-img">
      <img src="../assets/images/foto.jpg" alt="FOTO">
    </div>
    <div class="text">
      <p> Profesional en continua formación y con experiencia en el desarrollo de aplicaciones web full-stack.</p>
      <p>Soy una persona resolutiva, con muchas ganas de aprender y crecer a nivel profesional. Acostumbrado a trabajar por proyectos y orientada a resultados.</p>
      <p>Actualmente me encuentro terminando mis estudios de un grado superior en desarrollo de aplicaciones web.</p>
      <p>Me encantaría tener la oportunidad de iniciarme como desarrollador junior y ser parte de un equipo del que pueda nutrirme, aprender y seguir potenciando mis conocimientos. Crecer en él, tanto personal como profesionalmente y aportar todas mis ganas. Asumir cada reto que se ponga por delante, juntos alcanzar todos y cada uno de los objetivos.</p>
      <p>Mis motivaciones profesionales son aportar valor a los proyectos a través del trabajo en equipo, así como continuar desarrollándome profesionalmente como desarrollador web full-stack.</p>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0em 1em 1em 1em;
  margin-top: 1em;
}

.text {
  text-align: justify;
  max-width: 35em;
  padding: 1em;
}

.container-img {
  max-width: 10em;
  
}

@media (min-width: 720px) {
  section {
    margin-top: 4em;
    background-color: #F1F1F1;
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
