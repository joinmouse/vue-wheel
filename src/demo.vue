<template>
    <div>
        <!--
            <tabs selected="selectedTab" @update:selected="selectedTab = $event">
        -->
        <tabs :selected.sync="selectedTab">
            <tabs-head>
                <tabs-item name="woman">美女</tabs-item>
                <tabs-item name="finance">财经</tabs-item>
                <tabs-item name="sports">体育</tabs-item>
            </tabs-head>
            <tabs-body>
                <tabs-pane name="woman">美女相关咨询</tabs-pane>
                <tabs-pane name="finance">财经相关咨询</tabs-pane>
                <tabs-pane name="sports">体育相关咨询</tabs-pane>
            </tabs-body>
        </tabs>
    </div>
</template>

<script>
import Tabs from './tab/tabs'
import TabsHead from './tab/tabs-head'
import TabsItem from './tab/tabs-item'
import TabsBody from './tab/tabs-body'
import TabsPane from './tab/tabs-pane'

export default {
    name: 'Demo',
    data () {
        return {
            selectedTab: 'sports'
        }
    },
    components: {
        Tabs, TabsHead, TabsItem, TabsBody, TabsPane
    }
}
</script>


<style <style lang="scss" scoped>

</style>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    --button-height: 32px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-color: #999;
    --border-color-hover: #666;
    --border-radius: 4px;
    --font-size: 14px;
    --color: #333;
}
body {
    font-size: var(--font-size);
}
#app {
    margin: 20px;
}
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.box {
    margin: 20px;
}
</style>