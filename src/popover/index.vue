<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'UIPopover',
    data() {
        return {
            visible: false
        }
    },
    methods: {
        onClick(event) {
            console.log(event.target)
            if(this.$refs.triggerWrapper.contains(event.target)) {
                console.log('vm 隐藏 popover')
                this.visible = !this.visible
                if(this.visible === true) {
                    this.onShow()
                }
            }
        },
        positionContent() {
            document.body.appendChild(this.$refs.contentWrapper)
            let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.screenX + 'px'
            this.$refs.contentWrapper.style.top = top + window.screenY +  'px'
        },
        listenToDocument() {
            let eventHandle = (e) => {
                if(!this.$refs.contentWrapper.contains(e.target)) {
                    this.visible = false
                    console.log('document 隐藏 popover')
                    document.removeEventListener('click', eventHandle)
                }
            }
            document.addEventListener('click', eventHandle)
        },
        onShow() {
            this.$nextTick(() => {
                this.positionContent()
                this.listenToDocument()
            })
        }
    }
}
</script>

<style scoped lang="scss">
.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper {
    position: absolute;
    transform: translateY(-100%);
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5)
}
</style>
