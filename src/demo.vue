<template>
    <div>
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

        <popover class="poppver">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <button>点我</button>
        </popover>
        <popover position="left">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <button>点我</button>
        </popover>
        <popover position="right">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <button>点我</button>
        </popover>
        <popover position="bottom">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <button>点我</button>
        </popover>
        
        <div>
            <popover trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <button>点我</button>
            </popover>
            <popover position="left" trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <button>点我</button>
            </popover>
            <popover position="right" trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <button>点我</button>
            </popover>
            <popover position="bottom" trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <button>点我</button>
            </popover>
        </div>
    </div>
</template>

<script>
import Tabs from './tab/tabs'
import TabsHead from './tab/tabs-head'
import TabsItem from './tab/tabs-item'
import TabsBody from './tab/tabs-body'
import TabsPane from './tab/tabs-pane'
import Popover from './popover/index'

export default {
    name: 'Demo',
    data () {
        return {
            selectedTab: 'woman'
        }
    },
    components: {
        Tabs, TabsHead, TabsItem, TabsBody, TabsPane, Popover
    }
}
</script>


<style <style lang="scss" scoped>
.popover {
    margin-top: 100px;
    margin-left: 50px;
}
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