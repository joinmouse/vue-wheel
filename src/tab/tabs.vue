<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'UITabs',
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal','vertical'].indexOf(value) > -1
            }
        }
    },
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        // 通知当前选中的tab
        this.eventBus.$emit('update:selected', this.selected)
    }
}
</script>


<style lang="scss" scoped>
.tabs {
    padding-top: 10px;
    padding-left: 5px;
}
</style>
