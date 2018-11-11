<template>
    <button class="ui-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <ui-icon class="icon" v-if="icon && !loading" :name="icon"></ui-icon>
        <ui-icon class="loading icon" v-if="loading" name="loading"></ui-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {},
            loading: {
              type: Boolean,
              default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                   return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style lang="scss">
.ui-button {
    height: var(--button-height);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    font-size: var(--font-size);
    padding: 0 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover{ border-color: var(--border-color-hover)}
    &:active { background: var(--button-active-bg)}
    &:focus { outline: none;}
    > .icon { order: 1; margin-right: .3em;}
    > .content { order: 2;}
    &.icon-right {
        > .icon { order: 2; margin-right: 0; margin-left: .3em}
        > .content { order: 1;}
    }
    .loading {
        animation: spin 1s infinite linear;
    }
}


@keyframes spin {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
}
</style>
