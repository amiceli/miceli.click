<template>
    <div class="mc-backend">
        <div class="for--border"></div>
        <div class="for--php">
            <img
                src="@/assets/php.png"
                alt="php logo"
            />
        </div>
        <div class="for--lumen">
            <img
                src="@/assets/lumen.png"
                alt="lumen logo"
            />
        </div>
        <div class="for--laravel">
            <img
                src="@/assets/laravel.png"
                alt="laravel logo"
            />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import "~@/components/Cosmos/mixin";

@keyframes spin {
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
}

.mc-backend {
    @include circle(220px);
    @include hoverable();

    border: 1px solid #d8dee9;
    position: absolute;
    top: 406px;
    right: 573px;
    transform: rotate(360deg);
    transition: all linear 1s;
    animation: spin 10s infinite linear;

    .for--php {
        @include logo(92px);
        @include absoluteCenter();
    }

    .for--lumen {
        @include logo(46px);

        right: 25px;
    }

    .for--laravel {
        @include logo(65px);

        right: -10px;
        top: 131px;
    }
}
</style>
