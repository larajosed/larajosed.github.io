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
  --popper-theme-background-color-hover: #abababd1;
  --popper-theme-text-color: white;
  --popper-theme-border-width: 0px;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 12px;
  --popper-theme-box-shadow: 0 4px 15px -3px #abababd1;
}
.container-technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  display: -ms-flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
}

.container-column {
  width: 25%;
  margin-bottom: 5px;
  margin: 5px 5px 5px 5px;
}

.container-column h1 {
  align-items: center;
  text-align: center;
  margin: 0;
}

.icon-container {
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #f1f1f1;
  display: flex;
  transition: 0.8s ease;
}

.icon-container:hover {
  box-shadow: 0px 4px 16px -1px #97a7b3;
  transform: 0.5s;
}

.icon {
  margin-right: 1em;
  margin: 1em;
  display: inline-block;
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
  .icon-container {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1em;
  }

  .icon {
    max-height: 4em;
    max-width: 5em;
  }

  .container-column {
    flex-direction: column;
  }

  @media (max-width: 400px) {
    .container-technologies {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
    }
  }
}
</style>
