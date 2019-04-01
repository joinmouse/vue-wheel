<template>
    <svg class="ui-icon" aria-hidden="true">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        props: {
            name: String,
            required: true
        }
    }
</script>

<style <style lang="scss" scoped>
    .icon {
       width: 1em;
       height: 1em;
   }
</style>
