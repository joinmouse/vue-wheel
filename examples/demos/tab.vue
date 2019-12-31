<template>
    <div>
        <WhTabs :selected="selected">
            <WhTabHeader>
                <WhTabItem name="1" selected>科技</WhTabItem>
                <WhTabItem name="2">财经</WhTabItem>
                <WhTabItem name="3">体育</WhTabItem>
            </WhTabHeader>
            <WhTabBody>
                <WhTabPane name="1">科技相关</WhTabPane>
                <WhTabPane name="2">财经相关</WhTabPane>
                <WhTabPane name="3">体育相关</WhTabPane>
            </WhTabBody>
        </WhTabs>
    </div>
</template>

<script>
export default {
    name: 'tab',
    data() {
        return {
            selected: '1'
        }
    }
}
</script>