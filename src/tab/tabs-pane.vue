<template>
    <div class="tabs-pane" v-if="active" :class="classes">
        <slot></slot>    
    </div>
</template>

<script>
export default {
    name: 'UITabsPane',
    inject: ['eventBus'],
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            active: false
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
        this.eventBus.$on('update:selected', (name) => {
            if(name === this.name) {
                // console.log(`pane ${this.name}我被选中了`)
                this.active = true
            }else {
                // console.log(`pane ${this.name}我没被选中了`)
                this.active = false
            }
        })
    }
}
</script>


<style lang="scss" scoped>
.tabs-pane {
    &.active {
        background: red;
    }
}
</style>
