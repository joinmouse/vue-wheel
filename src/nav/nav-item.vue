<template>
    <div class="u-nav-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'UNavItem',
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.u-nav-item {
    border: 1px solid #ccc;
    padding: 10px 20px;
}
</style>