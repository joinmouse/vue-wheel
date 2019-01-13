<template>
    <div class="tabs-pane" v-if="active" :class="classes">
        <slot></slot>    
    </div>
</template>

<script>
export default {
    name: 'UITabsPane',
    inject: ['eventBus'],
    data() {
        return {
            active: false
        }
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    created() {
        // name是this.eventBus.$emit传入的值
        this.eventBus.$on('update:selected', (name) => {
            if(name === this.name) {
                this.active = true
            }else {
                this.active = false
            }
        })
    }
}
</script>


<style lang="scss" scoped>
.tabs-pane {
    padding: .8em;
    &.active {
        font-size: 16px;   
    }
}
</style>
