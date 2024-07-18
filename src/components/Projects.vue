<template>
      <div class="container">
    <div class="titulo"><h1>PROYECTOS</h1></div>
  </div>
      <section>
        <div class="text">
            <div class="logo-container">
                <img class="icon" src="../assets/images/logonew.png" alt="NUTRITION DIGITAL ASSISTANT">
            </div>
            <div class="text-container">
                <b>Nutrition's Digital Assistant</b>
                <p>Nutrition's Digital Assistant es una aplicación para crear dietas personalizadas, se puede acceder como usuario o como administrador.</p>
                <p><b>Usuario:</b>  puede solicitar tu dieta personalizada y podrás observarla en el apartado mis dietas. Iniciar y cerrar sesión, ver su dieta el día y las veces que quieras.</p>
                <p><b>Administrador:</b> se encarga de ver las solicitudes de dietas pendientes, crear nuevas dietas, editar o eliminar dietas. Así como también crear o eliminar recetas.</p>
                   
                <p>Para el <b>Front end</b>, se desarrolla la aplicación con <b>Angular 17, JavaScript, CSS y Bootstrap.</b> 
                <p>El <b>Back end</b> se desarrolla con <b>Spring Boot</b> que es Framework para el desarrollo de aplicaciones y páginas webs con <b>Java</b> como lenguaje de programación y <b>Liquidbase</b> que es una librería Open Source, que nos permitirá realizar el seguimiento, gestión y aplicación de cambios en el modelo de datos.
                    Se realiza mediante la creación de script sql incrementales. Con lo que comenzamos con script de creación de tablas, script de inserción de datos y, a medida que avanza el desarrollo, se van creando scripts con las modificaciones oportunas que exige la tarea que está llevando a cabo. La carga de datos se hace mediante scrips ejecutados por el servidor de back-end.</p> 
                </p>
                <p>Para la <b>base de datos</b> utilice <b>MySQL</b> que es un sistema de base de datos relacionales</p>
            </div>
        </div>
    </section>
    <section>
        <div class="text">
            <div class="logo-container">
                <img class="icon" src="../assets/images/amStore.jpg" alt="AMSTORE">
            </div>
            <div class="text-container">
                <b>AM Store</b>
                <p> AM Store es una tienda online para la venta de ropa y complementos.
                <p> Para la parte pública de la tienda, se desarrolla una aplicación <b>Front end</b> con <b>Angular 12 y Angular
                    Material.</b></p>
                <p>Para la parte de back office (gestión de los pedidos, stock, gestión de catálogo) se cuenta con otra
                    aplicación de <b>Front end</b> desarrollada igualmente con <b>Angular 12 y Angular Material.</b></p>
                <p>Ambas aplicaciones front trabajan contra un <b>Back end</b> con una API Rest desarrollada con <b>Spring Boot</b> sobre
                    el <b>framework Shopizr</b> con una serie de servicios que permiten operaciones tales como la creación de
                    nuevos pedidos, registro de usuarios, gestión de catálogo, etc. sobre una <b>base de datos MySQL</b></p>
                </p>
            </div>
        </div>   </section>
    <section>
        <div class="text">
            <div class="logo-container">
                <img class="icon" src="../assets/images/aplicacion.jpg" alt="MYGYMAPP">
            </div>
            <div class="text-container">
                <b>MyGym App</b>
                <p>
                    Es una aplicación que permite consultar ejercicios y rutinas para entrenamiento de fitness con
                    referencias multimedia.
                </p>
                <p>La aplicación se compone de una aplicación de <b>Front end</b> desarrollada en <b>Angular 11</b>
                    con maquetación responsive con <b>Bootstrap.</b></p>
                    <p>El <b>Back end</b> fue desarrollado con <b>NodeJS</b> haciendo uso de <b>Express</b> para
                    exponer una API que permite consultar ejercicios y rutinas.</p>
                <p>Para la consulta de ejercicos y rutinas utlice una <b>base de datos MySQL.</b></p>
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
}

.text-container{
    font-weight: normal;
    font-family: sans-serif;
}

.titulo {
  text-align: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 15px;
  color: #5b5b5b;
  text-shadow: 1px 0px #dbd5d5, 0px 1px #c7c3c3, 0px 0px #bdb8b8, 0px 2px #c4bfbf;
  justify-content: center;
  display: flex;
  letter-spacing: 2px;
}

@media (min-width: 720px) {
    section {
        background-color: #F1F1F1;
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