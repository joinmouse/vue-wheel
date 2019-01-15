<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" :class="{[`position-${position}`]:true}" v-if="visible">
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
    props: {
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'left', 'right'].indexOf(value) > -1
            }
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
            const {contentWrapper, triggerWrapper} = this.$refs
            document.body.appendChild(contentWrapper)
            let {width, height, top, left} = triggerWrapper.getBoundingClientRect()
            if (this.position === 'top') {
            contentWrapper.style.left = left + window.scrollX + 'px'
            contentWrapper.style.top = top + window.scrollY + 'px'
            } else if (this.position === 'bottom') {
            contentWrapper.style.left = left + window.scrollX + 'px'
            contentWrapper.style.top = top + height + window.scrollY + 'px'
            } else if (this.position === 'left') {
            contentWrapper.style.left = left + window.scrollX + 'px'
            let {height: height2} = contentWrapper.getBoundingClientRect()
            contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
            } else if (this.position === 'right') {
            contentWrapper.style.left = left + window.scrollX + width + 'px'
            let {height: height2} = contentWrapper.getBoundingClientRect()
            contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
            }
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
$border-color: #333;
$border-radius: 4px;
.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper {
    max-width: 20em;
    position: absolute;
    padding: .5em 1em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    // box-shadow: 0 0 3px rgba(0,0,0,0.5);
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
    background: white;
    word-break: break-all;
    &::before, &::after {
        display: block;
        content: '';
        border: 10px solid transparent;
        width: 0px;
        height: 0px;
        position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top-color: black;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-left-color: black;
        left: 100%;
      }
      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-right-color: black;
        right: 100%;
      }
      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
}
</style>
