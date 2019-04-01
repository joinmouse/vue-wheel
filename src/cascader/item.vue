<template>
    <div class="items">
        <div class="left">
            <div class="label" v-for="item in items" :key="item.id" @click="leftSelected = item">
                <p>{{item.name}}<span v-if="item.children"> > </span></p>
            </div>
        </div>
        <div class="right" v-if="rightItems">
           <UICascaderItem :items="rightItems"></UICascaderItem>   
        </div>
    </div>
</template>

<script>
export default {
    name: 'UICascaderItem',
    data() {
        return {
            leftSelected: null
        }
    },
    props: {
        items: {
            type: Array
        }
    },
    computed: {
        rightItems() {
            if(this.leftSelected && this.leftSelected.children) {
                return this.leftSelected.children
            }else {
                return null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../var";
.items {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
        box-shadow: $box-shadow;
        padding: .3em 0;
    }
    .right {
        margin-left: -1px;
        border-left: 1px solid $border-color;
    }
    .label {
        padding: .3em 1em;
    }
}
</style>
