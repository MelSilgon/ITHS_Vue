<template>
    <!-- 3 shoe cards -->
    <div class="col">
        <div class="card">
            <img :src="func(news.img)" class="card-img-top" alt="Sko" />
            <div class="card-body">
                <h5 class="card-title">{{ news.title }}</h5>
                <p class="card-text">
                    {{ news.info }}
                </p>
                <div class="text-center">
                    <a href="#" class="btn btn-primary">Gå till nyheten</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        //Information att hämta från en annan komponent
        props: {
            //Går via ett objekt (news) för att hämtas in (blir news. )
            news: {
                required: true,
                type: Object
            },
            func: {
                type: Function,
                default() {
                    return 'Default function';
                }
            }
        }
    };
</script>
<style scoped>
    .card {
        margin-bottom: 20px;
        width: 18rem;
    }
    .btn-primary {
        color: black;
        background-color: #5ccbec;
        border-color: #5ccbec;
    }

    .btn-primary:hover {
        color: #58c6e7;
        background-color: white;
        border-color: #58c6e7;
    }
</style>
