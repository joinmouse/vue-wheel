<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'WhContent'
}
</script>

<style lang="scss" scoped>
.content  {
    flex-grow: 1;
    background: #ddd;
}
</style>