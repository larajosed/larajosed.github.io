<template>
  <div class="container">
    <div class="titulo"><h1>EXPERIENCIA PROFESIONAL</h1></div>
  </div>
  <section>
    <div class="text">
      <div class="logo-container">
        <img class="icon" src="../assets/images/aspasia.png" alt="ASPASIA" />
      </div>
      <div class="text-container">
        <b>Desarrollador Full Stack Jr - Grupo Aspasia.</b>
        <p>
          Desarrollador full stack en varios proyectos de la compañía, en el
          sector de formación para empresas, organizaciones e instituciones.
          Resolución de incidencias, haciendo mantenimiento en herramientas
          existentes y evolutivos con nuevas funcionalidades en aplicaciones.
          Las tecnologias utilizadas son para el Frontend JQuery y para Backend
          PHP.
        </p>
        <div>
          <i>Jun. 2023 - Dic. 2023.</i>
          <br />
          <i>Madrid, España.</i>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="text">
      <div class="logo-container">
        <img class="icon" src="../assets/images/deimos.png" alt="DEIMOS" />
      </div>
      <div class="text-container">
        <b>Desarrollador Full Stack Jr - Elecnor Deimos.</b>
        <p>
          Desarrollador full stack en varios proyectos de la compañía, en el
          sector de transporte público. Desarrollo de aplicaciones en Frontend
          con Angular y Angular Material. En estas aplicaciones, utilicé también
          la librería D3.js para la confección de gráficas y esquemas de
          conexión.
        </p>
        <div>
          <i>Jun. 2022 - Nov. 2022</i>
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
}

section:hover {
  box-shadow: 0px 1px 8px -3px #333434;
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
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
  }

  section:hover {
    box-shadow: 0px 1px 8px -1px #97a7b3;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }

  .text {
    display: flex;
    max-width: 55em;
    margin: 2em;
    text-align: justify;
  }
}
</style>
