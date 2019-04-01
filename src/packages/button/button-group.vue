<template>
    <div class="ui-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            for(let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if(name !== 'button') {
                    console.warn(`ui-button-group 的子元素应该全都是 ui-button, 但你写的是${name}`)
                }
            }
        }
    }
</script>

<style lang="scss">
    .ui-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .ui-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-buttom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>