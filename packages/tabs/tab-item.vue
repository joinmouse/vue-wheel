<template>
    <div class="wh-tab-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'WhTabItem',
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
        classes () {
            return {
                active: this.active
            }
        }
    },
    created () {
        if (this.eventBus) {
            this.eventBus.$on('update:selected', (name) => {
                if(name === this.name) {
                    this.active = true
                }else {
                    this.active = false
                }
            })
        }
    },
    methods: {
        onClick () {
            this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
            this.$emit('click', this)
        }
    }
}
</script>

<style lang="scss" scoped>
    $item: #64C8C8;
    $disabled-text-color: grey;
    .wh-tab-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color: $item;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>