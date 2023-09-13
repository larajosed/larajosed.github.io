<template>
        <section>
        <div class="text">
            <div class="logo-container">
                <img class="icon" src="../assets/images/aspasia.png" alt="ASPASIA">
            </div>
            <div class="text-container">
                <b>Desarrollador Full Stack Jr - Grupo Aspasia.</b>
                <p> Desarrollador full stack en varios proyectos de la compañía, en el sector de formación para empresas, organizaciones e instituciones.
                    Resolución de incidencias, haciendo mantenimiento en herramientas existentes y evolutivos con nuevas funcionalidades en aplicaciones. Las tecnologias utilizadas son para el Frontend JQuery y para Backend PHP.
                </p>
                <div>
                    <i>Jun. 2023 - Actualmente</i>
                    <br>
                    <i>Madrid, España.</i>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="text">
            <div class="logo-container">
                <img class="icon" src="../assets/images/deimos.png" alt="DEIMOS">
            </div>
            <div class="text-container">
                <b>Desarrollador Full Stack Jr - Elecnor Deimos.</b>
                <p> Desarrollador full stack en varios proyectos de la compañía, en el sector de transporte público.
                    Desarrollo de aplicaciones en Frontend con Angular y
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
}</style>