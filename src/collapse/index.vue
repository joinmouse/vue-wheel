<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'UICollapse',
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
.collapse {
    border: 1px solid $grey;
    border-radius: 4px;
}
</style>
