<template>
    <div class="mc-home">
        <Presentation />
        <Cosmos />
        <Parcours />
        <Travaux />
        <Footer />
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
  components: {
    Presentation, Parcours, Footer, Cosmos, Travaux,
  },
  mounted() {
    if (/Mobi/.test(navigator.userAgent)) {
      this.$router.push({ name: 'mobile' });
    }
  },
};
</script>

<style lang="scss" scoped>
    .mc-home {}
</style>
