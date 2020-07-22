<template>
    <div class="mc-frontend" >
        <div class="for--border"></div>

        <div class="for--typescript">
            <img
                src="@/assets/typescript.png"
                alt="typescript logo"
            >
        </div>

        <div class="for--javascript">
            <img
                src="@/assets/javascript.png"
                alt="javascript logo"
            >
        </div>
        <div class="for--angular">
            <img
                src="@/assets/angular.png"
                alt="angular logo"
            >
        </div>
        <div class="for--vue">
            <img
                src="@/assets/vue.png"
                alt="vue logo"
            >
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
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.mc-frontend {
    @include circle(220px);
    @include hoverable();

    border: 1px solid #d8dee9;
    right: -20px;
    top: 30px;
    position: absolute;
    transform: rotate(0deg);
    transition: all linear 1s;
    animation : spin 10s infinite linear;

    .for--typescript {
        @include logo(64px);
    }

    .for--javascript {
        @include logo(92px);
        @include absoluteCenter();
    }

    .for--angular {
        @include logo(48px);

        right: 0;
        top: 20px;
    }

    .for--vue {
        @include logo(72px);

        bottom: 0;

        // &__details {
        //     position: absolute;
        //     // outline : 1px red solid;
        //     left: 100%;
        //     top: -25px;
        //     height: 17px;
        //     display: inline-flex;

        //     img:not(.for--arow) {
        //         margin-right: 5px;
        //     }

        //     .for--arrow {
        //         top: calc(100% - 5px);
        //         right: 100%;
        //         position: absolute;
        //     }
        // }
    }
}
</style>
