<template>
    <div class="ui-button-group">
        <slot></slot>
    </div>
</template>

<script></script>

<style lang="scss">
    .ui-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .ui-button {
            border-radius: 0;
            margin-left: -1px;
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