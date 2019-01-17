<template>
    <div class="items">
        <div class="left">
            <div class="label" v-for="item in items" :key="item.id" @click="leftSelected = item">
                <p>{{item.name}}</p>
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
.items {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
        border: 1px solid red;
    }
    .right {
        margin-left: -1px
    }
}
</style>
