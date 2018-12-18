<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>    
    </div>
</template>

<script>
export default {
    name: 'UITabsItem',
    inject: ['eventBus'],
    data() {
        return {
            active: false
        }
    },
    props: {
        name: String,
        required: true
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            if(name === this.name) {
                // console.log(`${this.name}我被选中了`)
                this.active = true
            }else {
                // console.log(`${this.name}我没被选中了`)
                this.active = false
            }
        })
    },
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    methods: {
        xxx() {
            this.eventBus.$emit('update:selected', this.name)
        }
    }
}
</script>


<style lang="scss" scoped>
.tabs-item {
    flex-shrink: 0;
    padding: 0 3em;
    &.active {
        background: red;
    }
}
</style>
