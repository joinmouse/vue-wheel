<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'UIToast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 5
        }
    },
    mounted() {
        if(this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay * 1000)
        }
    },
    methods: {
        close() {
            this.$el.remove()
            this.$destroy()
        }
    }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);

.toast {
    display: flex;
    align-items: center;
    padding: 0 16px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    height: $toast-height;
    font-size: 14px;
    line-height: 1.8;
    background: $toast-bg;
    color: white;
}
</style>