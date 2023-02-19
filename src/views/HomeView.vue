<script setup>
    import HeroImg from '../components/HeroImg.vue';
    import MainShoes from '../components/MainShoes.vue';
</script>

<template>
    <!-- Hero Image -->
    <HeroImg />
    <!--- Title: new shoes --->
    <h2 class="titleCards">{{ newsTitle }}</h2>

    <!-- Shoe Cards -->
    <div id="news">
        <div class="container">
            <div class="row align-items-start">
                <main-shoes
                    :func="getImgUrl"
                    v-for="shoe in shoes"
                    :key="shoe.id"
                    :news="shoe"
                />
            </div>
        </div>
    </div>
    <div class="button-wrapper">
        <RouterLink to="/nyheter">
            <input
                class="btn btn-primary"
                type="button"
                value="Se flera nyheter ->"
        /></RouterLink>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsTitle: 'Nytt bland sneakers',
                //Array med shoes
                shoes: []
            };
        },
        /*skapar ny komponent i Homeview filen, döper om den till (kebab-case) och hämtar in (PascalCase) */
        components: { 'main-shoes': MainShoes },
        mounted() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                const res = await fetch('main-new-shoes.json');
                const result = await res.json();
                this.shoes = result;
            },
            getImgUrl(a) {
                return new URL(`../assets/img/${a}`, import.meta.url).href;
            }
        }
    };
</script>

<style scoped>
    #news {
        display: flex;
        justify-content: center;
        margin-top: 5vh;
        margin-bottom: 2vh;
    }
    .titleCards {
        display: flex;
        justify-content: center;
        margin-top: 10vh;
        text-transform: uppercase;
    }

    .btn-primary {
        font-size: 1.2rem;
        font-weight: bold;
        padding: 1rem 10rem;
        color: black;
        background-color: #a4ca4c;
        border-color: #a4ca4c;
    }

    .btn-primary:hover {
        color: black;
        background-color: #9abe46;
        border-color: #9abe46;
    }
</style>
