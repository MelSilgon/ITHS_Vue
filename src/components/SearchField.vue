<template>
    <div id="page-wrap">
        <div id="search-wrapper">
            <div class="input-group">
                <!---v-model-->
                <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    v-model="searchInput"
                />
                <button
                    @click="onSubmit"
                    type="button"
                    class="btn btn-outline-primary"
                    :disabled="searchInput.length === 0"
                >
                    search
                </button>
            </div>
            <div class="search-message">
                <p v-if="searchMessage !== null">{{ searchMessage }}</p>
                <p v-else>Sök bland kategorin</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                searchInput: '',
                searchMessage: null
            };
        },
        methods: {
            onSubmit(event) {
                this.searchMessage = 'Visar sökningar för: ' + this.searchInput;
                console.log(this.searchMessage);
                event.preventDefault();
            }
        }
    };
</script>

<style scoped>
    #search-wrapper {
        margin: 0 25vw;
    }

    #page-wrap {
        margin-top: 15vh;
    }

    .search-message {
        margin-top: 5px;
    }
</style>
