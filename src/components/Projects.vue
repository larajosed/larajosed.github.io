<template>
    <section>
        <div class="text">
            <div class="logo-container">
                <img class="icon" src="../assets/images/amStore.jpg" alt="AMSTORE">
            </div>
            <div class="text-container">
                <b>AM Store</b>
                <p> AM Store es una tienda online para la venta de ropa y complementos.
                <p> Para la parte pública de la tienda, se desarrolla una aplicación front end con Angular 12 y Angular
                    Material.</p>
                <p>Para la parte de back office (gestión de los pedidos, stock, gestión de catálogo) se cuenta con otra
                    aplicación de Frontend desarrollada igualmente con Angular 12 y Angular Material.</p>
                <p>Ambas aplicaciones front trabajan contra un Backend con una API Rest desarrollada con Spring Boot sobre
                    el framework Shopizr con una serie de servicios que permiten operaciones tales como la creación de
                    nuevos pedidos, registro de usuarios, gestión de catálogo, etc. sobre una BBDD MySQL.</p>
                </p>
            </div>
        </div>
    </section>
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
                <p>La aplicación se compone de una aplicación de front desarrollada en Angular 11
                    con maquetación responsive con Bootstrap y un back desarrollado con NodeJS haciendo uso de Express para
                    exponer una API que permite consultar ejercicios y rutinas de una base de datos MySQL.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
}

.icon {
    width: 4em;
    margin-right: 1em;
    display: inline-block;
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