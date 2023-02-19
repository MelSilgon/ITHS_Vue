<!-- <script></script> ---->

<template>
    <div id="wrapper-hero">
        <img
            src="../assets/img/heroimg.jpg"
            class="img-fluid"
            alt="Ny sko från Leebok"
        />
        <div class="centered">
            <div class="textBoxClr">
                <!-- If heroTitle is undefined show welcome instead and remove button -->
                <h1 v-if="!heroTitle">{{ welcome }}</h1>
                <h1 v-else>{{ heroTitle }}</h1>
                <button
                    v-if="heroTitle"
                    type="button"
                    class="btn btn-primary btn-lg"
                >
                    Läs mer om skon här
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                welcome: 'Välkommen!',
                //Renaming
                heroTitle: 'Nyhet från Leebook'
            };
        }
    };
</script>

<style scoped>
    #wrapper-hero img {
        margin-top: 50px;
        height: auto;
        overflow-x: hidden;
    }

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }

    .textBoxClr {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 2rem 3rem;
        border-radius: 10px;
    }

    .btn-lg {
        margin-top: 20px;
        background-color: #990c2f;
        border-color: #990c2f;
    }

    .btn-lg:hover {
        background-color: #720633;
        border-color: #720633;
    }
</style>
