<template>
    <button 
        class="ui-button" 
        :class="{[`icon-${iconPosition}`]: true}" 
        @click="$emit('click')">
            <Icon class="icon" v-if="icon && !loading" :name="icon"></Icon>
            <Icon class="loading icon" v-if="loading" name="loading"></Icon>
            <div class="content">
                <slot></slot>
            </div>
    </button>
</template>

<script>
    import Icon from '../icon/icon'

    export default {
        components: {
            Icon
        },

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
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$box-shadow: 0 2px 10px rgba(0,0,0,0.1);
$box-shadow-color: rgba(0,0,0,0.5);

.ui-button {
    height: $button-height;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    font-size: 14px;
    padding: 0 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover{ border-color: $border-color-hover}
    &:active { background: $button-active-bg}
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
