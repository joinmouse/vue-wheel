<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'WhHeader'
}
</script>

<style lang="scss" scoped>
.header {
    height: 100px;
    background: #64C8E8;
}
</style>