<template>
    <div class="wh-tab-pane">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'WhTabPane',
    inject: ['eventBus'],

    props: {
        name: {
            type: String,
            required: true
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            console.log(name)
        })
    }
}
</script>

<style>
</style>