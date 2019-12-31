<template>
    <div class="col-wrapper" :class="[span ? `col-${span}` : '', offset ? `offset-${offset}` : '']">
        <div class="col"  :style="gutter ? colStyle : ''">
            <slot></slot>
        </div>
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
    },
    data() {
        return {
            gutter: 0
        }
    },
    computed: {
        colStyle() {
            return {
                marginLeft: this.gutter / 2 + 'px',
                marginRight: this.gutter / 2 + 'px',
            }
        }
    }
}
</script>

<style scoped lang="scss">
.col-wrapper {
    width: 50%;
    .col {
        background: #64C8C8;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center
    }

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
