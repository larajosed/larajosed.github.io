<template>
  <div class="container">
    <div class="titulo">
      <h1>EXPERIENCIA PROFESIONAL</h1>
    </div>
  </div>
  <section>
    <div class="text">
      <div class="logo-container">
        <img
          class="icon"
          src="../assets/images/sngular-logo-vector.png"
          alt="SNGULAR"
        />
      </div>
      <div class="text-container">
        <b>Desarrollador Full Stack Trainee - Sngular.</b>
        <p>
          Como desarrollador full stack, contribuí al desarrollo integral de una
          aplicación, donde realicé mejoras y evolutivos en funcionalidades
          existentes, además de construir nuevos componentes desde cero. En el
          frontend, utilicé Angular, Angular Material, Bootstrap y Jest. Para el
          backend, trabajé con Spring Boot, JUnit y Mockito. Apliqué Test-Driven
          Development (TDD) en mis tareas, gestioné el control de versiones con
          Git y utilicé Trello para la gestión de tareas, siguiendo metodologías
          ágiles como Scrum.
        </p>
        <div>
          <i>Mar. 2025 - Jun. 2025.</i>
          <br />
          <i>Madrid, España.</i>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="text">
      <div class="logo-container">
        <img class="icon" src="../assets/images/aspasia.png" alt="ASPASIA" />
      </div>
      <div class="text-container">
        <b>Desarrollador Full Stack Jr - Grupo Aspasia.</b>
        <p>
          Como desarrollador full stack, participé en varios proyectos dentro
          del sector de la formación para empresas, organizaciones e
          instituciones. Mis responsabilidades incluyeron el mantenimiento y
          desarrollo de nuevas funcionalidades en una herramienta de gestión de
          formación para empresas y la implementación de mejoras en diversas
          aplicaciones. Para el frontend, utilicé jQuery, y para el backend,
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
          En mi experiencia como desarrollador full stack, participé en varios
          proyectos, enfocándome principalmente en el desarrollo de aplicaciones
          para el frontend. Utilicé Angular y Angular Material, y fui
          responsable tanto de la resolución de incidencias como de la creación
          de nuevas funcionalidades. Para la visualización de datos complejos,
          como gráficas y esquemas de conexión, integré la potente librería
          D3.js en las aplicaciones.
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
  margin-bottom: 30px;
}

section:hover {
  box-shadow: 0px 1px 8px -3px #333434;
  transition: 1s;
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
