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

.text-container {
  margin-left: 25px;
}

.text-container i {
  color: #a0a0a0;
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
