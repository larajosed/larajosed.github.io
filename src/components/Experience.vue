<script>
import BoxStructure from "./BoxStructure.vue";
import TitleStructure from "./TitleStructure.vue";
export default {
  name: "Experience",
  data() {
    return {
      arrExperience: [
         {
          logo: "images/pqtv.png",
          title: "Desarrollador Full Stack - Freelance",
          mainParagraph: [
            "<div class='responsibilities-section'><strong>Responsabilidades principales:</strong></div>",
            "<ul class='achievements-list'>" +
              "<li>Desarrollo y maquetación de interfaz de usuario responsive utilizando <strong>React</strong>.</li>" +
              "<li>Configuración y personalización del backend de gestión de contenido y catalogo utilizando WordPress con WooCommerce.</li>" +
              "<li>Diseñe toda la aplicación, creando prototipos funcionales desde cero utilizando Figma.</li>" +
              "<li>Gestión del entorno de desarrollo mediante contenedores (Docker).</li>" +
              "<li>Integracion de una pasarela de pago (Stripe) para procesar transacciones.</li>" +
              "</ul>",
            "<div class='tech-stack'><strong>Stack tecnológico:</strong> React · WordPress · WooCommerce · Figma · Docker · Stripe </div>",
          ],

          date: "Nov. 2025 - Ene. 2026",

          country: "Madrid, España",
        },
        {
          logo: "images/sngular-logo-vector.png",
          title: "Desarrollador Full Stack - Sngular",
          mainParagraph: [
            "<div class='responsibilities-section'><strong>Responsabilidades principales:</strong></div>",
            "<ul class='achievements-list'>" +
              "<li>Desarrollo de nuevas funcionalidades y mejora de componentes existentes utilizando <strong>Angular</strong>, <strong>Angular Material</strong> y <strong>Bootstrap</strong></li>" +
              "<li>Implementación de APIs REST con <strong>Spring Boot</strong> siguiendo principios SOLID y arquitectura limpia</li>" +
              "<li>Aplicación de metodología <strong>Test-Driven Development (TDD)</strong> con <strong>Jest</strong>, <strong>JUnit</strong> y <strong>Mockito</strong></li>" +
              "<li>Participación activa en ceremonias Scrum y gestión de tareas con <strong>Git</strong> y <strong>Trello</strong></li>" +
              "<li>Colaboración en revisiones de código y mejora continua del producto</li>" +
              "</ul>",
            "<div class='tech-stack'><strong>Stack tecnológico:</strong> Angular · Spring Boot · Jest · JUnit · Mockito · Git · Trello · Scrum · TDD</div>",
          ],

          date: "Mar. 2024 - Jun. 2024",

          country: "Madrid, España",
        },

        {
          logo: "images/aspasia.png",
          title: "Desarrollador Full Stack - Grupo Aspasia",
          mainParagraph: [
            "<div class='responsibilities-section'><strong>Responsabilidades principales:</strong></div>",
            "<ul class='achievements-list'>" +
              "<li>Análisis y toma de requisitos funcionales para propuestas de desarrollo en herramienta de gestión de formación para <strong>BENTELER Group</strong></li>" +
              "<li>Implementación de soluciones con <strong>jQuery</strong> y <strong>PHP</strong></li>" +
              "<li>Desarrollo de funcionalidades de exportación de datos en formato XLSX para integración con FUNDAE</li>" +
              "<li>Mantenimiento y mejora de aplicaciones web existentes</li>" +
              "</ul>",
            "<div class='tech-stack'><strong>Stack tecnológico:</strong> jQuery · PHP · MySQL · Excel/XLSX</div>",
          ],
          date: "Jun. 2023 - Dic. 2023",
          country: "Madrid, España",
        },
      ],
    };
  },
  components: {
    BoxStructure,
    TitleStructure,
  },
};
</script>

<template>
  <TitleStructure titleText="EXPERIENCIA PROFESIONAL"></TitleStructure>
  <BoxStructure
    :jsonData="item"
    v-for="item in arrExperience"
    :key="item.title"
  ></BoxStructure>
</template>

<style scoped>
:deep(.achievements-list) {
  list-style-type: none;
  padding-left: 0;
  margin: 10px 0;
}

:deep(.achievements-list li) {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
}

:deep(.achievements-list li::before) {
  content: "▹";
  position: absolute;
  left: 0;
  color: #4a9eff;
  font-weight: bold;
  font-size: 1.2em;
}

:deep(.responsibilities-section) {
  margin-top: 15px;
  margin-bottom: 8px;
  color: #ffffff;
  font-size: 1.05em;
}

:deep(.tech-stack) {
  margin-top: 15px;
  padding: 12px;
  background-color: rgba(74, 158, 255, 0.08);
  border-left: 3px solid #4a9eff;
  border-radius: 4px;
  font-size: 0.95em;
  color: #e0e0e0;
}

:deep(.tech-stack strong) {
  color: #4a9eff;
}

:deep(strong) {
  color: #ffffff;
  font-weight: 600;
}
</style>
