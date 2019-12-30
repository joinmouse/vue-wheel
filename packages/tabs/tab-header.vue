<template>
    <div class="wh-tab-header">
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
            console.log(vm.$el.getBoundingClientRect())
            this.updateLinePosition(vm)
        })
    },

    methods: {
        updateLinePosition (selectedVm) {
            let {width, left} = selectedVm.$el.getBoundingClientRect()
            // let {left: left2} = this.$refs.head.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            // this.$refs.line.style.left = `${left - left2}px`
        }
    }
}
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $blue: blue;
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
            border-bottom: 1px solid $blue;
            transition: all 350ms;
        }
    }
</style>
