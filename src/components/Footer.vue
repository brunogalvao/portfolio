<template>
    <div class="row">
        <div class="col s10 offset-s1 m6 offset-m1 skillRedesocial">
            <a :href="twitter" target="_blank">
                <span class="twitter"></span>
            </a>
            <a :href="link" target="_blank">
                <span class="linkeDin"></span>
            </a>
            <a :href="dow" target="_blank">
                <span class="dow"></span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data ()  {
        return {
            twitter: 'https://twitter.com/brunogalvao',

            dow: 'https://1drv.ms/b/s!AthQo_z153icg587DYDbrdTBtBwMFQ?e=o7Hd2P',

            link: 'https://www.linkedin.com/in/bruno-galv%C3%A3o-8b9a0772/',
        }
    }
}
</script>

<style lang="sass" scoped>

.skillRedesocial 
    position: relative
    margin-bottom: 0px
    display: flex
    align-items: center
    margin-bottom: 0px
    margin-bottom: 0px
    bottom: 0px
    height: 80px
    a
        height: 100%
    span
        width: 1.4rem
        height: 100%
        display: flex
        justify-content: center
        margin-right: .5rem
        cursor: pointer
        transition: all .3s ease
        border: none
.twitter
    background: url('../assets/img/twitter.svg') no-repeat left center
    background-size: 100%
    &:hover
        background: url('../assets/img/twitterHover.svg') no-repeat left center
        background-size: 100%

.linkeDin
    background: url('../assets/img/linkeDin.svg') no-repeat center center
    background-size: 100%
    &:hover
        background: url('../assets/img/linkeDinHover.svg') no-repeat center
        background-size: 100%

.dow
    background: url('../assets/img/dow.svg') no-repeat center center
    background-size: 100%
    &:hover
        background: url('../assets/img/dowHover.svg') no-repeat center
        background-size: 100%
</style>