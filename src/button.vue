<template>
    <button class="ui-button">按钮</button>
</template>

<script>
    export default {
        name: ''
    }
</script>

<style less="scss">
.ui-button {
    height: var(--button-height);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    font-size: var(--font-size);
    padding: 0 1em;
    &:hover{
        border-color: var(--border-color-hover)
    }
    &:active {
        background: var(--button-active-bg)
    }
    &:focus {
        outline: none;
    }
}
</style>
