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
            required: true
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

    mounted () {
        this.checkChildren();
        this.selectTab();
    },

    methods: {
        checkChildren () {
            if (this.$children.length === 0) {
                console && console.warn &&
                console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
            }
        },
        selectTab () {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'WhTabHeader') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'WhTabItem' && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
        }
    },
}
</script>