---
title: Collapse 手风琴
---

### Collapse 手风琴
手风琴组件

### 使用文档
对复杂的区域进行分组和隐藏，保持页面的整洁

### 代码演示

1、可以同时展开多个面板

<collapse-demo></collapse-demo>

```html
<template>
    <WhCollapse :selected.sync="selectTab">
        <WhCollapseItem title="标题1" name="1">内容1xxxxx</WhCollapseItem>
        <WhCollapseItem title="标题2" name="2">内容2xxxxx</WhCollapseItem>
        <WhCollapseItem title="标题3" name="3">内容3xxxxx</WhCollapseItem>
    </WhCollapse>
</template>

<script>
export default {
    name: 'collapse',
    data() {
        return {
            selectTab: ['1']
        }
    }
}
</script>
```

2、每次只打开一个面板

<collapse-single-demo></collapse-single-demo>

```html
<template>
    <WhCollapse :selected.sync="selectTab" single>
        <WhCollapseItem title="标题1" name="1">内容1xxxxx</WhCollapseItem>
        <WhCollapseItem title="标题2" name="2">内容2xxxxx</WhCollapseItem>
        <WhCollapseItem title="标题3" name="3">内容3xxxxx</WhCollapseItem>
    </WhCollapse>
</template>

<script>
export default {
    name: 'collapse',
    data() {
        return {
            selectTab: ['1']
        }
    }
}
</script>
```