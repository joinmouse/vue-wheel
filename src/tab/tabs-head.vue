<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UITabsHead',
    inject: ['eventBus'],
    created() {
        console.log('tab给tab-head的eventBus')
        console.log(this.eventBus)
    }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$border-color: #ddd;
.tabs-header {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid $border-color;
    > .actions-wrapper {
        margin-left: auto;
    }
}
</style>
