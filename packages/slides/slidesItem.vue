<template>
    <transition name="slide">
        <div class="wh-slides-item">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'WhSlidesItem'
}
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
    transition: all 1s;
}
.slide-enter {
    transform: translateX(100%);
}
.slide-leave-to {
    transform: translateX(-100%);
}
</style>