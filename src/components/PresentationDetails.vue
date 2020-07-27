<template>
    <div class="mc-presentation-details">
        <div>
            <img
                src="@/assets/map-location.png"
                alt="icon-location"
            />
            <span>Marseille</span>
        </div>
        <div>
            <img
                src="@/assets/megaphone.png"
                alt="icon-megaphone"
            />
            <span data-wenk="Vue Typescript Php">
                Lead dev <b>VTP</b>
            </span>
        </div>
        <div>
            <img
                src="@/assets/heart.png"
                alt="icon-heart"
            />
            <span>Passioné</span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mc-presentation-details {
    text-align: right;
    color: #d8dee9;
    font-size: 20px;
    letter-spacing: 0;

    div {
        height: 40px;
        line-height: 40px;
        margin-right: 30px;
    }

    img {
        margin-right: 10px;
        vertical-align: middle;
    }

    span {
        width: 136px;
        display: inline-block;
    }
}
</style>
