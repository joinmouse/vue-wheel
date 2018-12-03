<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
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
            default: 50
        },
        closeButton: {
            type: Object,
            default() {
                return {
                    text: '关闭',
                    callback: (toast) => {
                        toast.close()
                    }
                }
            }
        }
    },
    created() {
        console.log(this.closeButton)
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
        },
        onClickClose() {
            this.close()
            this.closeButton.callback()
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
.close {
    padding-left: 16px;
}
.line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
}
</style>