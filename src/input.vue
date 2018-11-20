<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
            @change="$emit('change', $event)"
            @input="$emit('input', $event)"
            @focus="$emit('focus', $event)"
            @blur="$emit('blur', $event)"
        >
        <template v-if="error">
            <icon name="setting" class="icon-error"></icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        name: 'ui-input',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
            }
        },
        components: {
            Icon
        }
    }
</script>

<style lang="scss" scoped>
    /*--button-height: 32px;*/
    /*--button-bg: white;*/
    /*--button-active-bg: #eee;*/
    /*--border-color: #999;*/
    /*--border-color-hover: #666;*/
    /*--border-radius: 4px;*/
    /*--font-size: 14px;*/
    /*--color: #333;*/
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-block;
        > input {
            height: $height;
            border: 1px solid $border-color;
            padding: 0 8px;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly]{
                border-color: #aaa;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {border-color: $red;}
            > .icon-error { fill: $red;}
            > .error-message { color: $red;}
        }
    }
</style>