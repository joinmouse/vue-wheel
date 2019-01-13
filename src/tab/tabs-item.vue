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
        name: String|Number,
        required: true
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
                this.active = true
            }else {
                this.active = false
            }
        })
    },
    methods: {
        xxx() {
            console.log(this.name)
            this.eventBus.$emit('update:selected', this.name)
        }
    }
}
</script>


<style lang="scss" scoped>
.tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
        color: blue;
        border-bottom: 1px solid blue;
    }
}
</style>
