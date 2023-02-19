<template>
    <div class="wrapper-footer">
        <footer class="bg-dark text-center text-white">
            <div class="container p-4 pb-0">
                <!-- Social media -->
                <section class="mb-4">
                    <!-- Twitter -->
                    <RouterLink
                        class="btn btn-dark btn-floating m-1"
                        style="background-color: #55acee"
                        to="#"
                        role="button"
                    >
                        <img
                            src="../assets/icons/twitter-19.png"
                            class="icon-socials"
                            alt="Twitter"
                    /></RouterLink>

                    <!-- Google -->
                    <RouterLink
                        class="btn btn-dark btn-floating m-1"
                        style="background-color: #dd4b39"
                        to="#"
                        role="button"
                        ><img
                            src="../assets/icons/google-19.png"
                            class="icon-socials"
                            alt="Twitter"
                    /></RouterLink>

                    <!-- Instagram -->
                    <RouterLink
                        class="btn btn-dark btn-floating m-1"
                        style="background-color: #ac2bac"
                        to="#"
                        role="button"
                        ><img
                            src="../assets/icons/instagram-19.png"
                            class="icon-socials"
                            alt="Twitter"
                    /></RouterLink>

                    <!-- Linkedin -->
                    <RouterLink
                        class="btn btn-dark btn-floating m-1"
                        style="background-color: #0082ca"
                        to="#"
                        role="button"
                        ><img
                            src="../assets/icons/linkedin-19.png"
                            class="icon-socials"
                            alt="Twitter"
                    /></RouterLink>
                    <!-- Github -->
                    <RouterLink
                        class="btn btn-dark btn-floating m-1"
                        style="background-color: #333333"
                        to="#"
                        role="button"
                        ><img
                            src="../assets/icons/github-19.png"
                            class="icon-socials"
                            alt="Twitter"
                    /></RouterLink>
                </section>
            </div>

            <div
                class="text-center p-3"
                style="background-color: rgba(0, 0, 0, 0.2)"
            >
                © 2023 Copyright:
                <a class="text-white" href="#">SomePage.com</a>
            </div>
        </footer>
    </div>
</template>
<style scoped>
    .btn {
        --bs-btn-border-radius: 4rem;
        --bs-btn-padding-y: 0.5rem;
        --bs-btn-padding-x: 0.75rem;
    }
    .btn img {
        margin-bottom: 3px;
    }
</style>
