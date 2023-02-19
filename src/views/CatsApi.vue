<template>
    <div>
        <!--- https://api.artic.edu/docs/ --->
        <h1>This is a Cat API page</h1>
    </div>

    <div v-if="cats !== null" id="card-wrapper">
        <div class="container text-center">
            <div class="row row-cols-auto">
                <div v-for="cat in cats" :key="cat.id" class="col">
                    <div class="card">
                        <a :href="artAdress + cat.id"
                            ><img
                                :src="
                                    imgAdressBegin + cat.image_id + imgAdressEnd
                                "
                                class="card-img-top"
                                :alt="cat.thumbnail.alt_text"
                        /></a>
                        <div class="card-body">
                            <h5 class="card-title">
                                <a :href="artAdress + cat.id">{{
                                    cat.title
                                }}</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Fetch more Button -->

    <div v-if="removeBtn == false" class="button-wrapper">
        <input
            @click="fetchMoreCats"
            class="btn btn-primary"
            type="button"
            value="Klicka här för att hämta in flera katter!"
        />
    </div>
</template>

<script>
    export default {
        created() {
            const url =
                'https://api.artic.edu/api/v1/artworks/' +
                'search?q=cat&query[term][is_public_domain]=true&limit=2' +
                '&fields=id,title,image_id,thumbnail';
            fetch(url)
                .then((response) => response.json())
                .then((result) => {
                    this.cats = result.data;
                    this.removeBtn = false;
                });
        },
        data() {
            return {
                cats: null,
                artAdress: 'https://www.artic.edu/artworks/',
                imgAdressBegin: 'https://www.artic.edu/iiif/2/',
                imgAdressEnd: '/full/400,/0/default.jpg',
                removeBtn: null
            };
        },
        methods: {
            async fetchMoreCats() {
                const url =
                    'https://api.artic.edu/api/v1/artworks/' +
                    'search?q=cat&query[term][is_public_domain]=true&limit=10' +
                    '&fields=id,title,image_id,thumbnail';

                const res = await fetch(url);
                const result = await res.json();
                this.cats = await result.data;
                this.removeBtn = true;
            }
        }
    };
</script>
<style scoped>
    #card-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 8vh;
        margin-bottom: 5vh;
    }

    h1 {
        margin-top: 10vh;
        text-align: center;
    }
    .row {
        justify-content: center;
    }
    .card {
        width: 450px;
        margin-bottom: 20px;
    }

    img h5 {
        display: flex;
        justify-content: center;
        margin-top: 10vh;
    }
</style>
