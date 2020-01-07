<template>
    <WhCollapse :selected.sync="selectTab">
        <WhCollapseItem title="标题1" name="1">内容1xxxxx</WhCollapseItem>
        <WhCollapseItem title="标题2" name="2">内容2xxxxx</WhCollapseItem>
        <WhCollapseItem title="标题3" name="3">内容3xxxxx</WhCollapseItem>
    </WhCollapse>
</template>

<script>
import { WhCollapse, WhCollapseItem } from '../../../packages/collapse/index'

export default {
    name: 'collapse',
    data() {
        return {
            selectTab: ['1']
        }
    },
    components: {
        WhCollapse, WhCollapseItem
    }
}
</script>