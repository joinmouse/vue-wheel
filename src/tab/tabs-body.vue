<template>
    <div class="tabs-body">
        <slot></slot>    
    </div>
</template>

<script>
export default {
    name: 'UITabsBody',
    inject: ['eventBus'],
    created() {
        console.log('tab给tab-body的eventBus')
        console.log(this.eventBus)
    }
}
</script>


<style lang="scss" scoped>
.tabs-body {

}
</style>
