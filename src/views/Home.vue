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

export default {
  name: 'Home',
  data() {
    return { isMobile: false };
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
  },
};
</script>

<style lang="scss" scoped>
.mc-home {
    &__mobile {
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

        div {
            display: inline-block;
            text-align: center;
            color: #eceff4;

            img {
                margin-bottom: 20px;
                border-radius : 6px;
            }
        }
    }
}
</style>
