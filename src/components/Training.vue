<template>
   <Section>
      <div class="text">
         <div class="logo-container">
            <img class="icon" src="../assets/images/ilerna.png" alt="ILERNA">
         </div>
         <div class="text-container">
            <b>Ilerna FP Online : Técnico Superior en Desarrollo de Aplicaciones Web.</b>
            <p>Actualmente aprendiendo a desarrollar, implantar, y mantener aplicaciones web,
               con independencia del modelo empleado y utilizando tecnologías específicas en en el frontend C#. Para el
               backend utiizando ExpressJs y NodeJs y en base de datos MySQL. Garantizando el acceso a los datos de forma
               segura y cumpliendo
               los criterios de accesibilidad, usabilidad y calidad exigidas en los estándares establecidos.
            </p>
            <div>
               <i>Sep. 2022 - Actualmente.</i>
               <br>
               <i>Madrid, España.</i>
            </div>

         </div>
      </div>
   </section>
   <section>
      <div class="text">
         <div class="logo-container">
            <img class="icon" src="../assets/images/idBootcamps.png" alt="IDBOOTCAMPS">
         </div>
         <div class="text-container">
            <b>Bootcamp: Programación y desarrollo web Full Stack</b>
            <p>Basándo en el lenguaje JavaScript, aprenderi a desenvolverme en cualquiera de las etapas
               que conlleva el desarrollo de una aplicación web gracias a uno de los stack más potentes actualmente, el
               stack
               MEAN, compuesto por las siguientes tecnologías: MongoDB, Express, Angular y NodeJS.</p>
            <div>
               <i>Sep 2021 - Ene. 2021 - 450 horas.</i>
               <br>
               <i>Madrid, España.</i>
            </div>
         </div>
      </div>
   </Section>
</template>

<style scoped>
section {
   width: 100%;
   display: flex;
   flex-wrap: wrap;
}

.icon {
   height: 4em;
   width: 4em;
   margin-right: 1em
}

.text {
   display: flex;
   margin-top: 2em;
   max-width: 35em;

}

@media (min-width: 720px) {
   section {
      margin-top: 4em;
      background-color: #F1F1F1;
      margin-bottom: 4em;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
   }

   .text {
      display: flex;
      max-width: 55em;
      margin: 2em;
      text-align: justify;
   }

   .logo-container {}

   .text-container {}
}
</style>