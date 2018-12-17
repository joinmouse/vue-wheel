<template>
    <div class="tabs">
        <slot></slot>
        <slot name="actions"></slot>  
    </div>
</template>

<script>
export default {
    name: 'UITabs',
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal','vertical'].indexOf(value) > -1
            }
        }
    },
    created() {
        this.$emit('update:selected')
    }
}
</script>


<style lang="scss" scoped>
.tabs {

}
</style>
