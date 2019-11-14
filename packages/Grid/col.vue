<template>
    <div class="col" 
        :class="[span ? `col-${span}` : '', offset ? `offset-${offset}` : '']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'WhCol',
    props: {
        span: {
            type: [Number , String]
        },
        offset: {
            type: [Number , String]
        }
    }
}
</script>

<style scoped lang="scss">
.col {
    height: 100px;
    width: 50%;
    background: gray;
    border: 1px solid red;

    $class-span: col-;
    $class-offset: offset-;

    @for $n from 1 through 24 {
        &.#{$class-span}#{$n} {
            width: ($n / 24) * 100%;
        }
        &.#{$class-offset}#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }
}
</style>
