<template>
    <div class="mc-travaux">
        <h1>
            <span>{</span>
            Dev le jour, dev la nuit
            <span>}</span>
        </h1>

        <h2>
            <a
                href="https://developeracronym.co"
                target="_blank"
                rel="noopener noreferrer"
            >
                developeracronym.co
            </a>
        </h2>
        <p>
            En trainant sur Linkedin j’ai vu des développeurs avec des postes comme développeur MEAN ou MERN. <br>
            Et me je me suis dit pourquoi j’en aurais pas moi aussi ? <br>
            Voilà comment est né ce projet.
        </p>
        <h2>
            <a
                href="https://beat-time.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
            >
                beat-time.netlify.app
            </a>
        </h2>
        <p>
            Ce site propose une horloge assez particulière, elle repose sur le
            <a
                href="https://www.wikiwand.com/fr/Heure_Internet"
                target="_blank"
                rel="noopener noreferrer"
            >
                temps internet
            </a>.
            <br>
            En gros, 1 jour vaut 1000 beats.
        </p>
        <h2>
            <a
                href="https://github.com/amiceli/mailparser"
                target="_blank"
                rel="noopener noreferrer"
            >
                mailparser
            </a>
        </h2>
        <p>
            Un outil qui permet de récupérer la signature d’un mail depuis un fichier EML. <br>
            D’ailleurs si tu veux des signature hyper classes pour tes mails, viens chez
            <a
                href="https://letsignit.fr"
                target="_blank"
                rel="noopener noreferrer"
            >Letsignit</a>.
            <br>
            Y a pas mieux !
        </p>
        <h2>
            Et c’est pas tout
        </h2>
        <p>
            Si t’as le temps, jette un oeil sur mon
            <a
                href="https://github.com/amiceli"
                target="_blank"
                rel="noopener noreferrer"
            >
                github
            </a>.
            <br>
            Y a des outils en ligne de commande pour les dev, le terminal y a que ça de vrai !
        </p>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mc-travaux {
    position: relative;
    margin-bottom: 100px;

    h1 {
        font-size: 40px;
        letter-spacing: 0;
        text-align: center;
        margin-top: 110px;
        margin-bottom: 100px;

        span {
            font-family: "Fira Code";
            font-size: 60px;
            letter-spacing: 0;
            font-weight: 300;
            vertical-align: middle;
        }
    }

    h2 {
        margin-left: 90px;
        font-size: 40px;
        letter-spacing: 0;
    }

    a {
        text-decoration: none;
        font-weight: bold;
    }

    p {
        margin-left: 144px;
        font-size: 24px;
        letter-spacing: 0;
        line-height: 32px;
    }
}
</style>

<style lang="scss" scoped>
@media (prefers-color-scheme: light) {
    .mc-travaux {

        h1 {
            color: #2e3440;

            small {
                color: #d8dee9;
            }
        }

        h2 {
            color: #2e3440;
        }

        a {
            color: #3B4252;
        }

        p {
            color: #4C566A;
        }
    }
}
@media (prefers-color-scheme: dark) {
    .mc-travaux {

        h1 {
            color: #d8dee9;

            small {
                color: #d8dee9;
            }
        }

        h2 {
            color: #d8dee9;
        }

        a {
            color: #d8dee9;
        }

        p {
            color: #81a1c1;
        }
    }
}
</style>
