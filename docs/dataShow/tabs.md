---
title: Tabs 标签页
---

### Tabs 标签页
选项卡切换组件


### 使用文档
1、组件 WhTabHeader、WhTabBody 只能是组件 WhTabs 的子组件

2、组件 WhTabItem 只能是组件 WhHeader 的子组件

3、组件 WhTabPane 只能是组件 WhBody 的子组件

4、WhTabItem、WhTabPane需要传一致的name(必填), 使其一一对应

### 代码演示

1、经典tab栏切换

<tabs-demo></tabs-demo>

```js
<template>
    <WhTabs :selected="selected">
        <WhTabHeader>
            <WhTabItem name="tab1" selected>科技</WhTabItem>
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
export default {
    name: 'tab',
    data() {
        return {
            selected: 'tab1'
        }
    }
}
</script>
```