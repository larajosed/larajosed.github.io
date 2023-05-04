<template>
    <section>
        <div class="text">
            <div class="logo-container">
                <img class="icon" src="../assets/images/deimos.png" alt="DEIMOS">
            </div>
            <div class="text-container">
                <b>Desarrollador Full Stack Jr - Elecnor Deimos.</b>
                <p> Desarrollador full stack en varios proyectos de la compañía, en el sector de transporte público.
                    Desarrollo de aplicaciones en front end con Angular y
                    Angular Material. En estas aplicaciones, utilicé también la librería D3.js para la confección de
                    gráficas y esquemas de conexión.
                </p>
                <div>
                    <i>Jun. 2022 - Ene. 2023</i>
                    <br>
                    <i>Madrid, España.</i>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="text">
            <div class="logo-container">
                <img class="icon" src="../assets/images/amStore.jpg" alt="AMSTORE">
            </div>
            <div class="text-container">
                <b>Desarrollador Full Stack - AM Store</b>
                <p> AM Store es una tienda online para la venta de ropa y complementos.
                    Para la parte pública de la tienda, se desarrolla una aplicación front end con Angular 12 y Angular
                    Material.
                    Para la parte de back office (gestión de los pedidos, stock, gestión de catálogo) se cuenta con otra
                    aplicación de front end desarrollada igualmente con Angular 12 y Angular Material.
                    Ambas aplicaciones front trabajan contra un back end con una API Rest desarrollada con Spring Boot sobre
                    el framework Shopizr con una serie de servicios que permiten operaciones tales como la creación de
                    nuevos pedidos, registro de usuarios, gestión de catálogo, etc. sobre una BBDD MySQL.
                </p>
                <div>
                    <i>Feb. 2022 - Jun. 2022</i>
                    <br>
                    <i>Madrid, España.</i>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="text">
            <div class="logo-container">
                <img class="icon" src="../assets/images/MyGym.jpg" alt="MYGYMAPP">
            </div>
            <div class="text-container">
                <b>Desarrollador Full Stack - MyGym App</b>
                <p> Es una aplicación que permite consultar ejercicios y rutinas para entrenamiento   de   fitness   con    referencias    multimedia. La aplicación se compone de una aplicación de front desarrollada en Angular 11 con maquetación responsive con Bootstrap y un back desarrollado con NodeJS haciendo uso de Express para exponer una API que permite consultar ejercicios y rutinas de una base de datos MySQL.
                </p>
                <div>
                    <i>Dic. 2021 - Feb. 2022</i>
                    <br>
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

.icon {
    height: 4em;
    width: 4em;
    margin-right: 1em;
    margin-left: 0.5em;
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
}</style>