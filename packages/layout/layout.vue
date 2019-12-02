<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'WhLayout',
    data() {
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            if(vm.$options.name === 'WhSider') {
                this.layoutClass.hasSider = true
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.layout {
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    &.hasSider {
        flex-direction: row;
    }
}
</style>