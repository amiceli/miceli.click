<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&display=swap");

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Exo", sans-serif;
    overflow-x: hidden;
}
</style>

<style lang="scss">
    @media (prefers-color-scheme: dark) {
        html {
            background: #2e3440;
        }
    }

    @media (prefers-color-scheme: light) {
        html {
            background: #fff;
        }
    }

    #app {
        height: 100%;
    }
</style>
