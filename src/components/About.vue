<template>
  <section>
    <div class="container-img">
      <img src="../assets/images/foto.jpg" alt="FOTO">
    </div>
    <div class="text">Soy una persona luchadora que le gusta asumir nuevos retos, con
      ganas siempre de avanzar y crecer,
      por eso he decidido entrar en el
      sector de la tecnología y
      convertirme en un Desarrollador
      web.

      Me encantaría tener la
      oportunidad de formar parte de un
      equipo del que pueda nutrirme,
      aprender y seguir potenciando mis
      conocimientos.</div>
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

.container.img{
max-width: 6em;
max-height: 8em;
}

@media (min-width: 720px) {
  section {
    margin-top: 4em;
    background-color: #F1F1F1;
  }

  .text {
    max-width: 55em;
    margin: 2em;
  }
  .container-img{
display: flex;
flex-wrap: wrap;
justify-content: center;
  }
}
</style>
