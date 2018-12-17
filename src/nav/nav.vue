<template>
    <div class="u-nav">
        <slot></slot>    
    </div>
</template>

<script>
export default {
    name: 'UNav',
    props: {
        selected: {
            type: Array,
            default: () => []
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.item.forEach(vm => {
            console.log(vm.name)
        })
    },
    computed: {
        item() {
            return this.$children.filter(vm => vm.$options.name === "UNavItem")
        }
    }
}
</script>

<style lang="scss" scoped>
.u-nav {
    display: flex;
    border: 1px solid red;
}
</style>
