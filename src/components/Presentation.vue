<template>
    <div class="ac-presentation">
        <img
            src="@/assets/profile.png"
            alt="profile photo"
            class="ac-presentation__profile"
        />
        <h1>
            Choisissez un travail que vous aimez et vous
            n'aurez pas à travailler un seul jour de votre vie.
            <br>
            <small>
                Confucius
            </small>
        </h1>
        <div class="ac-presentation__details">
            <PresentationDetails />
        </div>
        <div class="ac-presentation__continue">
            <img
                src="@/assets/mouse.png"
                alt="mouse icon"
            />
        </div>
    </div>
</template>

<script>
import PresentationDetails from '@/components/PresentationDetails.vue';

export default {
  components: { PresentationDetails },
};
</script>

<style lang="scss" scoped>
@keyframes pulse {
    from {
        transform: scale3d(1, 1, 1);
    }

    50% {
        transform: scale3d(1.2, 1.2, 1.2);
    }

    to {
        transform: scale3d(1, 1, 1);
    }
}

.ac-presentation {

    &__continue {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    &__details {
        margin-top: 200px;
    }

    &__profile {
        height: 150px;
        width: 150px;
        background: white;
        display: block;
        margin-top: 134px;
        margin-bottom: 134px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 150px;
        animation: 1s pulse linear;
    }

    h1 {
        color: #d8dee9;
        width: 923px;
        margin-left: auto;
        margin-right: auto;
        font-size: 40px;
        text-align: center;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 53px;
        position: relative;
        margin-top: 0;
        margin-bottom: 0;

        small {
            color: #5e81ac;
            position: absolute;
            right: 50px;
            bottom: -59px;
        }
    }
}
</style>
