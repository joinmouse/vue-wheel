<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
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
@import "var";
.wrapper {
    font-size: $font-size;
    display: inline-block;
    > input {
        height: $input-height;
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