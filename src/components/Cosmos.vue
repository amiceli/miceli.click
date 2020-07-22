<template>
    <div class="mc-cosmos">
        <div class="mc-cosmos__design">
            <div class="el-solar">
                <div class="el-center">
                    ${}
                </div>

                <div class="el-solar__wrap" >
                    <div class="for--perl">
                        <div class="for--perl__logo" >
                            <img
                                src="@/assets/perl.png"
                                alt="perl logo"
                            >
                        </div>

                    </div>
                    <div class="for--sketch">
                        <div class="for--sketch__logo" >
                            <img
                                src="@/assets/sketch.png"
                                alt="sketch logo"
                            >
                        </div>
                    </div>

                    <div class="for--frontend">
                        <Frontend />
                    </div>
                    <div class="for--backend">
                        <Backend />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Frontend from './Cosmos/Frontend.vue';
import Backend from './Cosmos/Backend.vue';

export default {
  components: {
    Frontend,
    Backend,
  },
  data() {
    return {
      rotate: 0,
      blockRotate: false,
      interval: null,
    };
  },
  methods: {
    getTransform() {
      return {
        transform: `rotate(${this.rotate}deg)`,
      };
    },
    getReverseTransform() {
      return {
        transform: `rotate(${-this.rotate}deg)`,
      };
    },
    hover(planet) {
      this.$store.commit('hovered', { planet });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/components/Cosmos/mixin";

$radial: 724.77px / 2;

@mixin rotateElement($speed, $animationName) {
    height: 724.77px;
    width: 47px;
    position: absolute;
    top: 0;
    left: $radial - (47px /2);
    transform: rotate(0deg);

    @keyframes #{$animationName} {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    animation: #{$animationName} $speed linear infinite;
}

.mc-cosmos {
    padding-bottom: 100px;
    margin-top: 100px;
    zoom: 0.9;
    position: relative;

    &__design {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        height: 726px;
        width: 952px;

        .el-solar {
            @include circle(727px);

            box-sizing: border-box;
            border: 1px solid rgba(94, 129, 172, 0.5);
            position: relative;
            margin: auto;

            &__wrap {
                width: 100%;
                height: 100%;
                transform: rotate(0deg);
                transition: all 1s linear;

                &:hover {
                    animation: none;
                }
            }
        }

        .for--perl {
            @include rotateElement(10s, 'perlSpin');

            &__logo {
                @include logo(47px);

                top: -25px;
            }
        }

        .for--sketch {
            @include rotateElement(20s, 'sketchSpin');

            &__logo {
                @include logo(47px);

                top: -25px;
            }
        }

        .el-center {
            @include circle(263px);

            background-color: #1e2229;
            opacity: 1;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            text-align: center;
            font-size: 92px;
            color: #88bfd0;
            letter-spacing: 0;
            line-height: 263px;
            font-family: "Fira Code";
            transform: rotate(0deg);
        }
    }
}
</style>
