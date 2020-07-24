<template>
    <div class="mc-parcours">
        <img
            src="@/assets/plan.png"
            alt="mon parcours"
            class="for--dark"
        />
        <img
            src="@/assets/plan-light.png"
            alt="mon parcours"
            class="for--light"
        />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mc-parcours {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 20px;

    img {
        width: 80%;
    }
}
</style>

<style lang="scss" scoped>
@media (prefers-color-scheme: light) {
    .mc-parcours .for--dark {
        display: none;
    }
}
@media (prefers-color-scheme: dark) {
    .mc-parcours .for--light {
        display: none;
    }
}
</style>
