<template>
    <div class="mc-home">

        <div
            class="mc-home__mobile"
            v-if="isMobile"
        >
            <div>
                <img
                    src="https://media.giphy.com/media/3Wr5JYzWRuA2k/source.gif"
                    alt=""
                >
                <br>
                Version mobile en cours de dev !
            </div>
        </div>

        <div
            class="mc-home__konami"
            v-if="showKonami"
        >
            <div
                class="mc-home__konami__close"
                @click="showKonami = false"
            >
                fermer
            </div>
            <div class="mc-home__konami__img">
                <img
                    src="~@/assets/mb-ux.jpg"
                    alt="L'UX qui m'a aidé à faire le design de ce site"
                />
            </div>
            <div class="mc-home__konami__content">
                <h2>
                    Tu as découvert mon secret !
                </h2>
                <p>
                    Je te présente
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/morgane-breand/"
                        rel="noopener noreferrer"
                    >
                        Morgane Bréand
                    </a>
                    <br>
                    Une amie <b>Designer graphique / UX</b>
                    à qui on doit le design de ce site web !
                    <br />
                    Elle a même eu la patience de m'initié à <b>Sketch</b> !

                </p>
                <div class="shareon">
                    <a
                        class="linkedin"
                        target="_blank"
                        href="https://www.linkedin.com/in/morgane-breand/"
                        rel="noopener noreferrer"
                    ></a>
                </div>
            </div>
        </div>

        <Presentation v-if="!isMobile" />
        <Cosmos v-if="!isMobile" />
        <Parcours v-if="!isMobile" />
        <Travaux v-if="!isMobile" />
        <Footer v-if="!isMobile" />
    </div>
</template>

<script>
import Presentation from '@/components/Presentation.vue';
import Parcours from '@/components/Parcours.vue';
import Footer from '@/components/Footer.vue';
import Cosmos from '@/components/Cosmos.vue';
import Travaux from '@/components/Travaux.vue';
import Konami from 'konami';

export default {
  name: 'Home',
  data() {
    return { isMobile: false, showKonami: false };
  },
  components: {
    Presentation,
    Parcours,
    Footer,
    Cosmos,
    Travaux,
  },
  mounted() {
    this.isMobile = /Mobi/.test(navigator.userAgent);
    // eslint-disable-next-line no-new
    new Konami(() => {
      this.showKonami = true;
      window.scrollTo({ top: 0, left: 0 });
      // eslint-disable-next-line import/no-unresolved
      new Audio(require('@/assets/alert.mp3')).play();
    });
  },
};
</script>

<style lang="scss" scoped>
@mixin fixedCard() {
    position: fixed;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3b4252;
    z-index: 255;
    top: 10px;
    left: 10px;
}
.mc-home {
    &__mobile {
        @include fixedCard();

        div {
            display: inline-block;
            text-align: center;
            color: #eceff4;
            img {
                margin-bottom: 20px;
                border-radius: 6px;
            }
        }
    }
    &__konami {
        @include fixedCard();

        &__img {
            flex: 1 4 auto;
            text-align: right;
            box-sizing: border-box;
            padding-right: 50px;
            border-right: 1px #eceff4 solid;

            img {
                width: 50%;
                max-width: 500px;
                border-radius: 10px;
                filter: grayscale(0%);
                transition : all 0.4s linear;

                &:hover {
                    filter: grayscale(100%);
                }
            }
        }

        &__close {
            position: absolute;
            top: 20px;
            right: 20px;
            text-transform: uppercase;
            color: #eceff4;
            cursor: pointer;
            padding: 4px;
            border-radius: 6px;

            &:hover {
                background: #2e3440;
            }
        }

        &__content {
            flex: 3 4 auto;
            border-left: 1px #eceff4 solid;
            box-sizing: border-box;
            padding-left: 50px;
            color: #eceff4;

            p {
                line-height: 30px;
            }

            b {
                color: #81a1c1;
            }

            a {
                font-weight: bold;
                color: #81a1c1;
                text-decoration: none;
            }

            h2 {
                color: #d8dee9;
            }
        }
    }
}
</style>
