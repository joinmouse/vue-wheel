<template>
    <div class="tabs-header">
        <slot></slot>    
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
.tabs-header {
    display: flex;
    height: $tab-height;
    border: 1px solid red;
    justify-content: flex-start;
    align-items: center;
}
</style>
