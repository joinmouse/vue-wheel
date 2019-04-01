<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <item :items="dataSource"></item>
        </div>
    </div>
</template>

<script>
import Item from './item'

export default {
    name: 'UICascader',
    components: {
        Item
    },
    data() {
        return {
            popoverVisible: false,
            level1Selected: ''
        }
    },
    props: {
        dataSource: {
            type: Array,
            required: true
        }
    },
    computed: {
        level2Item() {
            if(this.level1Selected.children) {
                return this.level1Selected.children
            }else {
                return []
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../var";
.cascader {
    margin-left: 200px;
    .trigger {
        border: 1px solid black;
        height: 32px;
        width: 100px;
    }
    .popover {
        display: flex;
        height: 200px;
        background: #fff;
    }
}
</style>
