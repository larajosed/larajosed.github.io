<template>
   <Section>
      <div class="text">
         <div class="logo-container">
            <img class="icon" src="../assets/images/ilerna.png" alt="ILERNA">
         </div>
         <div class="text-container">
            <b>Ilerna FP: Técnico Superior en Desarrollo de Aplicaciones Web.</b>
            <p>Actualmente desarrollando, implantando, y manteniendo aplicaciones web,
               con independencia del modelo empleado y utilizando tecnologías específicas. Para el
               backend utiizando ExpressJs y NodeJs y en base de datos MySQL. Garantizando el acceso a los datos de
               forma
               segura y cumpliendo los criterios de accesibilidad, usabilidad y calidad exigidas en los estándares
               establecidos.
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
            <b>ID Bootcamp: Programación y desarrollo web Full Stack.</b>
            <p>Basádo en el lenguaje JavaScript, aprendi a desenvolverme en cualquiera de las etapas
               que conlleva el desarrollo de una aplicación web gracias a uno de los stack más potentes actualmente, el
               stack MEAN, compuesto por las siguientes tecnologías: MongoDB, Express, Angular y NodeJS.</p>
            <div>
               <i>Sep 2021 - Ene. 2021 - 450 horas.</i>
               <br>
               <i>Madrid, España.</i>
            </div>
         </div>
      </div>
   </Section>
   <section>
      <div class="text">
         <div class="logo-container">
            <img class="icon" src="../assets/images/UPEL.jpg" alt="IDBOOTCAMPS">
         </div>
         <div class="text-container">
            <b>Universidad Pedagogica Experimental Libertador: Profesor de Educación Fisíca.</b>
            <p>Entre las tareas destacan programar, organizar y coordinar actividades deportivas; supervisar grupos;
               entrenar al
               alumnado en diferentes disciplinas deportivas y motivarlo para que mejore su rendimiento físico en centros
               educativos, institutos o universidades.</p>
            <div>
               <i>Maturin, Venezuela.</i>
            </div>
         </div>
      </div>
   </Section>
</template>

<style scoped>
section {
   width: 100%;
}

.icon {
   max-height: 3em;
   max-width: 4em;
   margin: 1em;
   height: auto;
   width: auto;
   display: inline-block;
   object-fit: contain;
}

.text {
   display: flex;
   margin-top: 2em;
   max-width: 35em;
   padding-inline-end: 1em;
   text-align: justify;
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
}
</style>