<template>
    <div>
        <WhTabs class="tabs" :selected="selectedTab">
            <WhTabHeader>
                <WhTabItem name="1">科技</WhTabItem>
                <WhTabItem name="2">财经</WhTabItem>
                <WhTabItem name="3">体育</WhTabItem>
            </WhTabHeader>
            <WhTabBody>
                <WhTabPane name="1">科技相关咨询</WhTabPane>
                <WhTabPane name="2">财经相关咨询</WhTabPane>
                <WhTabPane name="3">体育相关咨询</WhTabPane>
            </WhTabBody>
        </WhTabs>
    </div>
</template>

<script>
export default {
    name: 'tab',
    data() {
        return {
            selectedTab: '1'
        }
    }
}
</script>

<style scoped>
.tabs {
    padding: 20px;
}
</style>