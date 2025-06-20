<template>
  <div class="container">
    <div class="titulo">
      <h1>TECNOLOGÍAS</h1>
    </div>
  </div>
  <section>
    <div class="container-technologies">
      <div class="container-column">
        <h1>FRONTEND</h1>
        <div class="icon-container">
          <Popper hover content="JavasCript">
            <img
              class="icon"
              src="@/assets/images/frontend/JavasCript-logo.png"
              alt="JAVASCRIPT"
            />
          </Popper>
          <Popper hover content="Angular">
            <img
              class="icon"
              src="@/assets/images/frontend/angular.png"
              alt="ANGULAR"
            />
          </Popper>
          <Popper hover content="Bootstrap">
            <img
              class="icon"
              src="@/assets/images/frontend/bootstrap.png"
              alt="BOOTSTRAP"
            />
          </Popper>
          <Popper hover content="Jest">
            <img
              class="icon"
              src="@/assets/images/frontend/jest.png"
              alt="JEST"
            />
          </Popper>
          <Popper hover content="D3">
            <img class="icon" src="@/assets/images/frontend/d3.png" alt="D3" />
          </Popper>
        </div>
      </div>
      <div class="container-column">
        <h1>BACKEND</h1>
        <div class="icon-container">
          <Popper hover content="Java">
            <img
              class="icon"
              src="@/assets/images/backend/java.png"
              alt="Java"
            />
          </Popper>
          <Popper hover content="Spring">
            <img
              class="icon"
              src="@/assets/images/backend/spring-logo.png"
              alt="SPRING"
            />
          </Popper>
          <Popper hover content="JUnit">
            <img
              class="icon"
              src="@/assets/images/backend/junit.png"
              alt="JUNIT"
            />
          </Popper>
          <Popper hover content="Mockito">
            <img
              class="icon"
              src="@/assets/images/backend/mockito.png"
              alt="MOCKITO"
            />
          </Popper>
        </div>
      </div>
      <div class="container-column">
        <h1>BBDD</h1>
        <div class="icon-container">
          <Popper hover content="MySQL">
            <img
              class="icon"
              src="@/assets/images/bbdd/mysql.png"
              alt="MYSQL"
            />
          </Popper>

          <Popper hover content="MongoDB">
            <img
              class="icon"
              src="@/assets/images/bbdd/MongoDB.png"
              alt="MONGODB"
            />
          </Popper>
        </div>
      </div>
      <div class="container-column">
        <h1>OTROS</h1>
        <div class="icon-container">
          <Popper hover content="Git">
            <img class="icon" src="@/assets/images/otros/Git.png" alt="Git" />
          </Popper>
          <Popper hover content="Jira">
            <img class="icon" src="@/assets/images/otros/JIRA.png" alt="JIRA" />
          </Popper>
          <Popper hover content="Sourcetree">
            <img
              class="icon"
              src="@/assets/images/otros/sourcetree.png"
              alt="SOURCETREE"
            />
          </Popper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Popper from "vue3-popper";

export default defineComponent({
  components: {
    Popper,
  },
});
</script>

<style scoped>
:deep(.popper) {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #444444;
  --popper-theme-text-color: white;
  --popper-theme-border-width: 0px;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 12px;
  --popper-theme-box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.7);
}

.container-technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: #000000;
  padding: 20px;
}

.container-column {
  width: calc(50% - 15px);
  height: 200px;
  max-width: 400px;
  min-width: 280px;
  box-sizing: border-box;

  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 1px 8px -3px rgba(0, 0, 0, 0.5);
  transition: 0.8s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.container-column h1 {
  text-align: center;
  margin: 0 0 15px 0;
  color: #e0e0e0;
  font-size: 1.2em;
}

.icon-container {
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #2c2c2c;
  display: flex;
  transition: 0.8s ease;
  padding: 10px;
  border-radius: 6px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  flex-grow: 1;
  width: 100%;
  align-content: center;
}

.icon-container:hover {
  box-shadow: 0px 4px 16px -1px #000000;
  transform: scale(1.02);
  transition: 0.3s ease-in-out;
}

.icon {
  margin: 1em;
  display: inline-block;
  max-width: 4em;
  height: auto;
  filter: invert(100%);
  transition: 0.3s ease;
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

@media (max-width: 767px) {
  .container-column {
    width: 90%;
    height: auto;
    max-width: none;
  }
}

@media (min-width: 768px) {
  .container-column {
    width: calc(50% - 25px);
    height: 230px;
    max-width: 480px;
  }
}

@media (min-width: 1200px) {
  .container-technologies {
    max-width: 1100px;
    margin: 0 auto;
  }
}
</style>
