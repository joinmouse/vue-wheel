<template>
    <button class="wh-button" :class="[type ? `wh-button-${type}`: '']">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'WhButton',
    props: {
        type: {
            type: String,
            default: '',
        }
    }
}
</script>


<style lang="scss" scoped>
.wh-button {
    margin: 0 5px;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    color: rgba(0,0,0,0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    box-shadow: 0 2px 0 rgba(0,0,0,0.015);
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.015);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
}
.wh-button, .wh-button:active, .wh-button:focus {
    outline: 0;
}

.wh-button-primary {
    background: #64C8C8;
    color: #fff;
}
</style>