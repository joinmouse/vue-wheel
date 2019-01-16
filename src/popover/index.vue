<template>
    <div class="popover" ref="popover">
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
        },
        trigger: {
            type: String,
            default: 'click',
            validator(value) {
                return ['click', 'hover'].indexOf(value) > -1
            }
        }
    },
    computed: {
        openEvent() {
            if(this.trigger === 'click') {
                return 'click'
            }else {
                return 'mouseenter'
            }
        },
        closeEvent() {
            if(this.trigger === 'click') {
                return 'click'
            }else {
                return 'mouseleave'
            }
        }
    },
    mounted() {
        this.addPopoverListeners()
    },
    methods: {
        addPopoverListeners(){
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        removePopoverListeners(){
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        putBackContent(){
            const {contentWrapper, popover} = this.$refs
            if(!contentWrapper){return}
            popover.appendChild(contentWrapper)
        },
        positionContent () {
            const {contentWrapper, triggerWrapper} = this.$refs
            document.body.appendChild(contentWrapper)
            const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
            const {height: height2} = contentWrapper.getBoundingClientRect()
            let positions = {
            top: {top: top + window.scrollY, left: left + window.scrollX,},
            bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
            left: {
                top: top + window.scrollY + (height - height2) / 2,
                left: left + window.scrollX
            },
            right: {
                top: top + window.scrollY + (height - height2) / 2,
                left: left + window.scrollX + width
            },
            }
            contentWrapper.style.left = positions[this.position].left + 'px'
            contentWrapper.style.top = positions[this.position].top + 'px'
        },
        onClickDocument (e) {
            const {popover, contentWrapper} = this.$refs
            if (popover && (popover === e.target || popover.contains(e.target))) { return }
            if (contentWrapper && (contentWrapper === e.target || contentWrapper.contains(e.target))) { return }
            this.close()
        },
        open () {
            this.visible = true
            this.$nextTick(() => {
                this.positionContent()
                document.addEventListener('click', this.onClickDocument)
            })
        },
        close () {
            this.visible = false
            document.removeEventListener('click', this.onClickDocument)
        },
        onClick (event) {
            if (this.$refs.triggerWrapper.contains(event.target)) {
                if (this.visible === true) {
                    this.close()
                } else {
                    this.open()
                }
            }
        }
    },
    
    beforeDestroy() {
        this.putBackContent()
        this.removePopoverListeners()
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
        border-bottom: none;
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
        border-top: none;
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
        border-right: none;
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
        border-left: none;
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
