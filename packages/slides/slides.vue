<template>
    <div class="wh-slides">
        <div class="wh-slides-window">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhSlides',
    mounted() {
        console.log(this.$el.children)
    }
}
</script>

<style lang="scss" scoped>
.wh-slides {
    border: 1px solid black;
}
</style>