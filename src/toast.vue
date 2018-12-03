<template>
    <div class="toast" ref="wrapper">
        <slot></slot>
        <div class="line" ref="line"></div>
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
                    callback: undefined
                }
            }
        }
    },
    created() {
        console.log(this.closeButton)
    },
    mounted() {
        this.updateStyles()
        this.execAutoClose()
    },
    methods: {
        updateStyles() {
            this.$nextTick(() => {
                this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
            })
        },
        execAutoClose() {
            if(this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        close() {
            this.$el.remove()
            this.$destroy()
        },
        onClickClose() {
            this.close()
            if(this.closeButton && typeof this.closeButton.callback === 'undefined') {
                this.closeButton.callback()
            }
        }
    }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
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
    min-height: $toast-min-height;
    font-size: 14px;
    line-height: 1.8;
    background: $toast-bg;
    color: white;
}
.close {
    padding-left: 16px;
    flex-shrink: 0;
}
.line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
}
</style>