<script setup>
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <nav class="navbar bg-light fixed-top">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">SHOE CHASE</RouterLink>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
            >
                <span class="navbar-toggler-icon" />
            </button>
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                        SHOE CHASE
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <RouterLink
                                class="nav-link active"
                                aria-current="page"
                                to="/"
                                >Home</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/nyheter"
                                >NYHETER</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/cats"
                                >Cats API</RouterLink
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <RouterView />
</template>
<style scoped>
    .offcanvas-title {
        color: black;
    }

    .navbar-brand {
        color: black;
    }

    .navbar-toggler {
        background-color: antiquewhite;
    }
</style>
