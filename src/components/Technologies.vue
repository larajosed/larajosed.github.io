<template>
    <section>
        <div class="container-technologies">
            <div class="container-column">
                <h1>Frontend</h1>
                <div class="icon-container">
                    <img class="icon" src="../assets/images/frontend/jquery.png" alt="JQUERY">
                    <img class="icon" src="../assets/images/frontend/angular.png" alt="ANGULAR">
                    <img class="icon" src="../assets/images/frontend/bootstrap.png" alt="BOOTSTRAP">
                    <img class="icon" src="../assets/images/frontend/vue.png" alt="VUE">
                    <img class="icon" src="../assets/images/frontend/d3.png" alt="D3">
                </div>
            </div>
            <div class="container-column">
                <h1>Backend</h1>
                <div class="icon-container">
                    <img class="icon" src="../assets/images/backend/ExpressJS.png" alt="EXPRESSJS">
                    <img class="icon" src="../assets/images/backend/nodejs.png" alt="NODEJS">
                    <img class="icon" src="../assets/images/backend/spring.png" alt="SPRING">
                    <img class="icon" src="../assets/images/backend/c.png" alt="C#">
                    <img class="icon" src="../assets/images/backend/php.png" alt="PHP">
                </div>
            </div>
            <div class="container-column">
                <h1>BBDD</h1>
                <div class="icon-container">
                    <img class="icon" src="../assets/images/bbdd/mysql.png" alt="MYSQL">
                    <img class="icon" src="../assets/images/bbdd/MongoDB.png" alt="MONGODB">
                </div>
            </div>
            <div class="container-column">
                <h1>Otros</h1>
                <div class="icon-container">
                    <img class="icon" src="../assets/images/otros/bamboo.png" alt="BAMBOO">
                    <img class="icon" src="../assets/images/otros/Bitbucket.png" alt="BITBUCKET">
                    <img class="icon" src="../assets/images/otros/JIRA.png" alt="JIRA">
                    <img class="icon" src="../assets/images/otros/nexus.png" alt="NEXUS">
                    <img class="icon" src="../assets/images/otros/sourcetree.png" alt="SOURCETREE">
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.container-technologies {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    display: -ms-flex;
    display: -webkit-flex;

}

.container-column {
    width: 50%;
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
    border: 1em solid rgb(255, 255, 255);
    background-color: #F1F1F1;
    display: flex;
}

.icon {
    width: 4em;
    margin-right: 1em;
    margin: 1em;
    display: inline-block;
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
}
</style>