<template>
    <div class="mc-presentation">
        <img
            src="@/assets/profile.png"
            alt="profile photo"
            class="mc-presentation__profile"
        />
        <h1>
            Choisissez un travail que vous aimez et vous
            n'aurez pas à travailler un seul jour de votre vie.
            <br>
            <small>
                Confucius
            </small>
        </h1>
        <div class="mc-presentation__details">
            <PresentationDetails />
        </div>
        <div class="mc-presentation__continue">
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

.mc-presentation {
    &__continue {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    &__details {
        margin-top: 130px;
    }

    &__profile {
        height: 150px;
        width: 150px;
        display: block;
        margin-top: 104px;
        margin-bottom: 104px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 150px;
        animation: 1s pulse linear;
    }

    h1 {
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
            position: absolute;
            right: 50px;
            bottom: -59px;
        }
    }
}
</style>

<style lang="scss" scoped>
@media (prefers-color-scheme: light) {
    .mc-presentation {
        &__details {
            color: #2e3440;

            i {
                color: #2E3440;
            }
        }

        h1 {
            color: #2e3440;

            small {
                color: #5e81ac;
            }
        }
    }
}
@media (prefers-color-scheme: dark) {
    .mc-presentation {
        &__details {
            color: #d8dee9;
        }

        h1 {
            color: #d8dee9;

            small {
                color: #5e81ac;
            }
        }
    }
}
</style>
