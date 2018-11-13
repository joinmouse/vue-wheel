<template>
    <svg class="ui-icon" aria-hidden="true">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        props: ['name']
    }
</script>

<style>
   .ui-icon {
       width: 1em;
       height: 1em;
   }
</style>