<template>
    <div id="app" class="text-center">
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <header class="masthead mb-auto">
                <div class="inner">
                    <a to="/">
                        <router-link to="/">
                            <h3 class="masthead-brand">IAS Emulator</h3>
                        </router-link>
                    </a>
                    <div id="nav" class="my-2 my-md-0 mr-md-3 nav nav-masthead justify-content-center">
                        <router-link class="p-2" to="/">Home</router-link>
                        <router-link class="p-2" to="/docs">Documentação</router-link>
                    </div>
                </div>
            </header>
            <main class="inner cover">
                <router-view/>
            </main>
            <footer class="mastfoot mt-3">
                <div class="inner">
                    <p>Criado por <a target="_blank" href="https://baraus.dev">Bruno de Araújo</a>.</p>
                </div>
            </footer>
        </div>
    </div>
</template>

<style>

</style>
