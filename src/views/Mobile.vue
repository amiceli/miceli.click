<template lang="pug">
.mc-home--mobile
    .for--landscape-mode(v-if="isPortrait")
        div
            img(
                alt="mobile svg",
                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjNGM1NjZhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGRlZnM+PGcgaWQ9ImEiPjxwYXRoIGZpbGw9IiM0YzU2NmEiIHN0cm9rZT0ibm9uZSIgZD0iIE0gNjUuNjUgMjEuNTUgUSA2NS4zIDIxLjIgNjQuOCAyMS4yIDY0LjMgMjEuMiA2My45NSAyMS41NSBMIDYwLjIgMjUuMyBRIDYwLjE1IDI1LjM1IDYwLjEgMjUuNCA1OS44NSAyNS43IDU5Ljg1IDI2LjE1IDU5Ljg1IDI2LjIgNTkuODUgMjYuMjUgTCA1OS44NSAyNi4zNSBRIDU5Ljk1IDI2Ljc1IDYwLjIgMjcgNjAuMjUgMjcuMDUgNjAuMjUgMjcuMSA2MC4zIDI3LjEgNjAuMzUgMjcuMTUgTCA2My45NSAzMC43NSBRIDY0LjM1IDMxLjEgNjQuOCAzMS4xIDY1LjMgMzEuMSA2NS42NSAzMC43NSA2NiAzMC4zNSA2NiAyOS45IDY2IDI5LjQgNjUuNiAyOS4wNSBMIDYzLjg1IDI3LjMgUSA2NC4xNSAyNy4zIDY0LjQgMjcuMyA2OC42IDI3LjYgNzEuNDUgMzAuMSBMIDcxLjQ1IDMwLjE1IFEgNzUuMzUgMzMuNCA3NS4xNSAzOC44NSA3NS4xNSAzOS4zNSA3NS40NSAzOS43IDc1LjggNDAuMDUgNzYuMyA0MC4xIDc2LjggNDAuMSA3Ny4xNSAzOS44IDc3LjUgMzkuNDUgNzcuNTUgMzguOTUgNzcuODUgMzIuMyA3My4wNSAyOC4zIEwgNzMgMjguMyBRIDY5LjYgMjUuMyA2NC42IDI0LjkgTCA2NC41NSAyNC45IFEgNjQuMyAyNC45IDY0IDI0LjkgTCA2NS42NSAyMy4yNSBRIDY2IDIyLjkgNjYgMjIuNCA2NiAyMS45IDY1LjY1IDIxLjU1IE0gODQuNiA0OS40NSBRIDg0LjYgNDUuODUgODIuNzUgNDQuMSA4MSA0Mi4yNSA3Ny40IDQyLjI1IEwgNTcuNzUgNDIuMjUgNTcuNzUgMjIuNiBRIDU3Ljc1IDE1LjQgNTAuNTUgMTUuNCBMIDMwLjEgMTUuNCBRIDIyLjkgMTUuNCAyMi45IDIyLjYgTCAyMi45IDQyLjI1IDIyLjYgNDIuMjUgUSAxNS40IDQyLjI1IDE1LjQgNDkuNDUgTCAxNS40IDY5LjkgUSAxNS40IDc3LjEgMjIuNiA3Ny4xIEwgMjIuOSA3Ny4xIDIyLjkgNzcuNCBRIDIyLjkgODQuNiAzMC4xIDg0LjYgTCA1MC41NSA4NC42IFEgNTcuNzUgODQuNiA1Ny43NSA3Ny40IEwgNTcuNzUgNzcuMSA3Ny40IDc3LjEgUSA4NC42IDc3LjEgODQuNiA2OS45IEwgODQuNiA0OS40NSBNIDgxLjA1IDQ1LjggUSA4Mi4yIDQ3LjA1IDgyLjIgNDkuNDUgTCA4Mi4yIDY5LjkgUSA4Mi4yIDc0LjcgNzcuNCA3NC43IEwgNTcuNzUgNzQuNyA1Ny43NSA0NC42NSA3Ny40IDQ0LjY1IFEgNzkuOCA0NC42NSA4MS4wNSA0NS44IE0gNTAuNTUgMTcuOCBRIDU1LjM1IDE3LjggNTUuMzUgMjIuNiBMIDU1LjM1IDQyLjI1IDI1LjMgNDIuMjUgMjUuMyAyMi42IFEgMjUuMyAxNy44IDMwLjEgMTcuOCBMIDUwLjU1IDE3LjggTSAxNy44IDQ5LjQ1IFEgMTcuOCA0NC42NSAyMi42IDQ0LjY1IEwgMjIuOSA0NC42NSAyMi45IDc0LjcgMjIuNiA3NC43IFEgMTcuOCA3NC43IDE3LjggNjkuOSBMIDE3LjggNDkuNDUgTSAzMC4xIDgyLjIgUSAyNS4zIDgyLjIgMjUuMyA3Ny40IEwgMjUuMyA3Ny4xIDU1LjM1IDc3LjEgNTUuMzUgNzcuNCBRIDU1LjM1IDgyLjIgNTAuNTUgODIuMiBMIDMwLjEgODIuMiBNIDI1LjMgNDQuNjUgTCA1NS4zNSA0NC42NSA1NS4zNSA3NC43IDI1LjMgNzQuNyAyNS4zIDQ0LjY1IFoiPjwvcGF0aD48L2c+PC9kZWZzPjxnIHRyYW5zZm9ybT0ibWF0cml4KCAxLCAwLCAwLCAxLCAwLDApICI+PHVzZSB4bGluazpocmVmPSIjYSI+PC91c2U+PC9nPjwvc3ZnPg=="
            )
            p Pour une meilleur expérience, c'est plus sympa en mode paysage.

    slide(:steps="5")
        .step--1.is--step(v-if="step === 1")
            .step--1__wrap
                h1 Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.
                    br
                    small Confucius
                .step--1__details
                    div
                        img(
                            src="@/assets/map-location.png",
                            alt="icon-location"
                        )
                        span Marseille
                    div
                        img(src="@/assets/megaphone.png", alt="icon-megaphone")
                        span(data-wenk="Vue Typescript Php")
                            | Lead dev&nbsp;
                            b VTP
                    div
                        img(src="@/assets/heart.png", alt="icon-heart")
                        span Passion&eacute;

        .step--2.is--step(v-if="step === 2")
            img(src="@/assets/mobile-skill.png", alt="skill mobile version")
        .step--3.is--step(v-if="step === 3")
            img(src="@/assets/plan.png", alt="mon parcours")
        .step--4.is--step(v-if="step === 4")
            div.step--4__wrap
                h1
                    span {
                    | Dev le jour, dev la nuit
                    span }
                br
                p
                    | Quelques uns de mes projets
                a(href="https://developeracronym.co" rel="noopener noreferrer" target="_blank")
                    |    developeracronym.co
                br
                a(href='https://beat-time.netlify.app' target='_blank' rel='noopener noreferrer')
                    | beat-time.netlify.app
                br
                a(href='https://github.com/amiceli/mailparser' target='_blank' rel='noopener noreferrer')
                    | mailparser
                br
                p
                    | Si t&rsquo;as le temps, jette un oeil sur mon&nbsp;
                    a(href='https://github.com/amiceli' target='_blank' rel='noopener noreferrer')
                        | github
                        | .
                    br
                    |     Y a des outils en ligne de commande pour les dev, le terminal y a que &ccedil;a de vrai !
        .step--5.is--step(v-if="step === 5")
            a(v-if="!loading" href='https://letsignit.fr' rel='noopener noreferrer' target='_blank')
                img(src='~@/assets/footer.png' alt='footer image')

</template>

<script>
import { Slideshow } from 'eagle.js';

export default {
  mixins: [Slideshow],
  data() {
    return { isPortrait: true, loading: true };
  },
  mounted() {
    this.isPortrait = ![-90, 90].includes(window.orientation);
    this.step = 4;

    window.addEventListener('orientationchange', () => {
      this.isPortrait = ![-90, 90].includes(window.orientation);
    });
  },
  watch: {
    step() {
      if (this.step === 5) {
        setTimeout(() => {
          this.loading = false;
        }, 300);
      }
    },
  },
};
</script>

<style lang="scss">
.eg-slide-content,
.eg-slide {
    height: 100%;
    width: 100%;
}
</style>
<style lang="scss" scoped>
@mixin flexAlign() {
    display: flex;
    align-items: center;
    justify-content: center;
}
.mc-home--mobile {
    height: 100%;
    width: 100%;

    .for--profile {
        width: 100px;
    }

    .for--landscape-mode {
        position: fixed;
        top: 20px;
        left: 20px;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        background: #3b4252;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 255;

        div {
            display: inline-block;
            text-align: center;
        }

        img {
            width: 80%;
        }

        p {
            color: #d8dee9;
        }
    }

    .is--step {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .step--2 {
        @include flexAlign();

        img {
            height: 90%;
        }
    }

    .step--3 {
        @include flexAlign();

        img {
            width: 90%;
        }
    }

    .step--1 {
        @include flexAlign();

        &__wrap {
            display: inline-block;
            text-align: center;
        }

        &__details {
            position: absolute;
            bottom: 10px;
            width: 100%;

            div {
                display: inline-block;
                width: 200px;
                color: #d8dee9;
                font-size: 20px;

                img {
                    margin-right: 10px;
                    vertical-align: middle;
                }
            }
        }

        h1 {
            text-align: center;
            font-size: 22px;
            padding-left: 120px;
            padding-right: 120px;
            color: #d8dee9;

            small {
                font-size: 20px;
                color: #5e81ac;
            }
        }
    }

    .step--5 {
        @include flexAlign();

        background : black;
        text-align: center;

        a {
            display: inline-block;
        }

        img {
            width: 70%;
        }
    }

    .step--4 {
        @include flexAlign();

        &__wrap {
            display: inline-block;
            text-align: center;
        }

        a {
            color: #d8dee9 !important;
            text-decoration: none;
        }

        p {
            color: #d8dee9;
            grid-template: 16px;
            font-weight: bold;
            margin-bottom: 20px;
            display: block;
        }

        h1 {
            font-size: 20px;
            letter-spacing: 0;
            text-align: center;
            margin-top: 10px;
            margin-bottom: 10px;
            color: #d8dee9;

            span {
                font-family: "Fira Code";
                font-size: 30px;
                letter-spacing: 0;
                font-weight: 300;
                vertical-align: middle;
                position: relative;
                margin-left: 5px;
                margin-right: 5px;
                top: -2px;
            }
        }
    }
}
</style>
