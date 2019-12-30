<template>
    <div class="wh-tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'WhTabs',
    
    props: {
        selected: {
            type: String,
            // required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].indexOf(value) >= 0
            }
        }
    },

    data() {
        // 借用Vue的evnetBus
        return {
            eventBus: new Vue()
        }
    },
    //关于provide和inject的使用 https://cn.vuejs.org/v2/api/#provide-inject
    provide() {
        return {
            eventBus: this.eventBus
        }
    },

    methods: {
          
    },
}
</script>