<template>
    <div class="wh-tab-header" ref="header">
        <slot></slot>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
export default {
    name: 'WhTabHeader',
    inject: ['eventBus'],

    mounted () {
        this.eventBus.$on('update:selected', (item, vm) => {
            this.updateLinePosition(vm)
        })
    },

    methods: {
        updateLinePosition (selectedVm) {
            let {width, left} = selectedVm.$el.getBoundingClientRect()
            let leftinit = this.$refs.header.getBoundingClientRect().left
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.left = `${left - leftinit}px`
        }
    }
}
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $item: #64C8C8;
    $border-color: #ddd;
    .wh-tab-header {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $item;
            transition: all 350ms;
        }
    }
</style>
