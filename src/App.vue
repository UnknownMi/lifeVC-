<template>
    <div id="app">
        <v-header></v-header>

        <div>内容</div>
        <div>内容2</div>

        <v-footer></v-footer>
    </div>
</template>

<script>
    import header from './components/header/header.vue'
    import footer from './components/footer/footer.vue'

    export default {
        components:{
            'v-header': header,
            'v-footer': footer
        }
    }
</script>

<style>

</style>
