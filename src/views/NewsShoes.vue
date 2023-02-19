<script setup>
    import SearchField from '../components/SearchField.vue';
</script>

<template>
    <SearchField />
    <!-- 10 shoe cards -->

    <div v-if="shoeList !== null">
        <div id="shoe-list">
            <div class="row row-cols-3">
                <div class="col" v-for="shoe in shoeList" :key="shoe.id">
                    <div class="card">
                        <img
                            :src="getImgUrl(shoe.img)"
                            class="card-img-top"
                            alt="Sko"
                        />
                        <div class="card-body">
                            <h5 class="card-title">{{ shoe.title }}</h5>
                            <p class="card-text">
                                {{ shoe.info }}
                            </p>
                            <div class="text-center">
                                <a href="#" class="btn btn-primary"
                                    >Lägg i varukorg</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Loading...</div>
</template>

<script>
    export default {
        created() {
            fetch('news-shoe-list.json')
                .then((response) => response.json())
                .then((result) => {
                    this.shoeList = result;
                });
        },
        data() {
            return {
                shoeList: null
            };
        },
        methods: {
            getImgUrl(a) {
                return new URL(`../assets/img/${a}`, import.meta.url).href;
            }
        }
    };
</script>
<style scoped>
    .card {
        margin: 20px 30px;
        width: 18rem;
    }

    .col {
        width: 20rem;
    }

    .row {
        display: flex;
        justify-content: center;
    }

    #shoe-list {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10vh;
        margin: 10vh 15vw;
    }

    .btn-primary {
        background-color: rgb(99, 76, 202);
        border-color: rgb(99, 76, 202);
    }

    .btn-primary:hover {
        color: rgb(99, 76, 202);
        background-color: rgb(255, 255, 255);
        border-color: rgb(99, 76, 202);
    }
</style>
