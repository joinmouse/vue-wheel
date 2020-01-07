<template>
    <WhTabs class="wrapper" :selected="selected">
        <WhTabHeader>
            <WhTabItem name="tab1">科技</WhTabItem>
            <WhTabItem name="tab2">财经</WhTabItem>
            <WhTabItem name="tab3">体育</WhTabItem>
        </WhTabHeader>
        <WhTabBody>
            <WhTabPane name="tab1">科技相关咨询</WhTabPane>
            <WhTabPane name="tab2">财经相关咨询</WhTabPane>
            <WhTabPane name="tab3">体育相关咨询</WhTabPane>
        </WhTabBody>
    </WhTabs>
</template>

<script>
import { WhTabs, WhTabHeader, WhTabBody, WhTabItem, WhTabPane} from '../../../packages/tabs/index'

export default {
    name: 'tab',
    data() {
        return {
            selected: 'tab1'
        }
    },
    components: {
        WhTabs, WhTabHeader, WhTabBody, WhTabItem, WhTabPane
    }
}
</script>

<style scoped>
.wrapper {
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>