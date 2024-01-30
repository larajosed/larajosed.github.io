<template>
    <section>
        <div class="container-technologies">
            <div class="container-column">
                <h1>FRONTEND</h1>
                <div class="icon-container">
                    <Popper hover content="JQuery">
                        <img class="icon" src="../assets/images/frontend/jquery.png" alt="JQUERY">
                    </Popper>
                    <Popper hover content="Angular">
                        <img class="icon" src="../assets/images/frontend/angular.png" alt="ANGULAR">
                    </Popper>
                    <Popper hover content="Bootstrap">
                        <img class="icon" src="../assets/images/frontend/bootstrap.png" alt="BOOTSTRAP">
                    </Popper>
                    <Popper hover content="Vue">
                        <img class="icon" src="../assets/images/frontend/vue.png" alt="VUE">
                    </Popper>
                    <Popper hover content="D3">
                        <img class="icon" src="../assets/images/frontend/d3.png" alt="D3">
                    </Popper>
                </div>
            </div>
            <div class="container-column">
                <h1>BACKEND</h1>
                <div class="icon-container">
                    <Popper hover content="Express js">
                        <img class="icon" src="../assets/images/backend/ExpressJS.png" alt="EXPRESSJS">
                    </Popper>
                    
                    <Popper hover content="Node js">
                        <img class="icon" src="../assets/images/backend/nodejs.png" alt="NODEJS">
                    </Popper>
                    
                    <Popper hover content="Spring">
                        <img class="icon" src="../assets/images/backend/spring.png" alt="SPRING">
                    </Popper>
                    
                    <Popper hover content="C#">
                        <img class="icon" src="../assets/images/backend/c.png" alt="C#">
                    </Popper>
                   
                    <Popper hover content="Php">
                        <img class="icon" src="../assets/images/backend/php.png" alt="PHP">
                    </Popper>
                    
                </div>
            </div>
            <div class="container-column">
                <h1>BBDD</h1>
                <div class="icon-container">
                    <Popper hover content="MySQL">
                        <img class="icon" src="../assets/images/bbdd/mysql.png" alt="MYSQL">
                    </Popper>
                    
                    <Popper hover content="MongoDB">
                        <img class="icon" src="../assets/images/bbdd/MongoDB.png" alt="MONGODB">
                    </Popper>
                    <Popper hover content="Oracle">
                        <img class="icon" src="../assets/images/bbdd/oracle.png" alt="ORACLE">
                    </Popper>
                    
                </div>
            </div>
            <div class="container-column">
                <h1>OTROS</h1>
                <div class="icon-container">
                    <Popper hover content="Bamboo">
                        <img class="icon" src="../assets/images/otros/bamboo.png" alt="BAMBOO"> 
                    </Popper>
                    
                    <Popper hover content="Bitbucket">
                        <img class="icon" src="../assets/images/otros/Bitbucket.png" alt="BITBUCKET">
                    </Popper>
                    
                    <Popper hover content="Jira">
                        <img class="icon" src="../assets/images/otros/JIRA.png" alt="JIRA"> 
                    </Popper>
                    
                    <Popper hover content="Nexus">
                        <img class="icon" src="../assets/images/otros/nexus.png" alt="NEXUS">  
                    </Popper>
                    
                    <Popper hover content="Sourcetree">
                        <img class="icon" src="../assets/images/otros/sourcetree.png" alt="SOURCETREE">
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

:deep(.popper){
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #abababd1;
  --popper-theme-text-color: white;
  --popper-theme-border-width: 0px;
  --popper-theme-border-radius:6px;
  --popper-theme-padding: 12px;
  --popper-theme-box-shadow: 0 4px 15px -3px #abababd1;

}
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
    margin-bottom: 5px;
}    

.container-column h1 {
    align-items: center;
    text-align: center;
    margin: 0;
    margin-top: 25px;
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