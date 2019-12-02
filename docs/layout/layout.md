---
title: Layout 布局
---

### Layout 布局
协助进行页面级整体布局

#### 组件概述
- WhLayout: 布局容器，可嵌套。
- WhHeader: 顶部布局，只能放在Layout中。
- WhSider: 侧边栏，自带默认样式及基本功能，只能放在Layout中。
- WhContent: 内容部分，自带默认样式，只能放在Layout中。
- Footer: 底部布局，自带默认样式，只能放在Layout中。

### 代码演示
<br>
<layout-demo></layout-demo>

```js
<WhLayout>
    <WhHeader>header</WhHeader>
    <WhContent>content</WhContent>
    <WhFooter>footer</WhFooter>
</WhLayout>
```

<layout-sider-demo></layout-sider-demo>

```js
<WhLayout>
    <WhHeader>header</WhHeader>
    <WhLayout>
        <WhSider>sider</WhSider>
        <WhContent>content</WhContent>
    </WhLayout>
    <WhFooter>footer</WhFooter>
</WhLayout>
```
