<template>
    <div class="mc-rotate" :style="getRotateStyle()">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    degrees: { type: Number, required: true },
    interval: { type: Number, required: true },
    blockRotate: { type: Boolean, required: true },
  },
  mounted() {
    setInterval(() => {
      if (!this.blockRotate) {
        this.currentDegrees += this.degrees;
      }
    }, this.interval);
  },
  data() {
    return {
      currentDegrees: 0,
    };
  },
  methods: {
    getRotateStyle() {
      return {
        transform: `rotate(${this.currentDegrees}deg)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.mc-rotate {
    transition: all linear 1s;
    transform: rotate(0deg);
    display: inline-flex;
    position: relative;
}
</style>
