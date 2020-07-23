<template>
    <div class="mc-footer">
        <div class="mc-footer__lang">
            <b>
                FR
            </b>
            Langue maternelle, trop facile
            <b>
                IT
            </b>
            se non parliamo di lavoro, va bene
            <b>
                EN
            </b>
            If we speak technical, no problem
        </div>
        <div class="mc-footer__end">
            <a
                href="https://letsignit.fr"
                target="_blank"
            >
                <img
                    src="~@/assets/footer.png"
                    alt="footer image"
                />
            </a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mc-footer {
    &__lang {
        text-align: center;
        margin-top: 100px;
        font-size: 20px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 27px;
        height: 30px;
        line-height: 30px;
        width: 100%;

        b {
            padding-left: 25px;
            padding-right: 25px;
            display: inline-block;
            vertical-align: middle;
            font-size: 24px;
        }
    }

    &__end {
        margin-top: 100px;
        height: 390px;
        width: 100%;
        background-color: #111111;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 700px;
        }
    }
}
</style>

<style lang="scss" scoped>
@media (prefers-color-scheme: light) {
    .mc-footer {
        color : #3B4252;
    }
}
@media (prefers-color-scheme: dark) {
    .mc-footer {
        color: #d8dee9;
    }
}
</style>
