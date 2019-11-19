---
title: Grid 栅格
---

### Grid 栅格
24 栅格系统

#### 概述
布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。

- 通过`row`在水平方向建立一组`col`
- 内容应当放置于`col`内
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，四个等宽的列可以使用 <Col span={6} /> 来创建


<grid-demo></grid-demo>


### 基础用法
```js
<WhRow class="row">
    <WhCol span="12">content1</WhCol>
    <WhCol span="12">conrtent2</WhCol>
</WhRow>
<WhRow class="row">
    <WhCol span="8">content1</WhCol>
    <WhCol span="8">conrtent2</WhCol>
    <WhCol span="8">conrtent3</WhCol>
</WhRow>
<WhRow class="row">
    <WhCol span="6">content1</WhCol>
    <WhCol span="6">conrtent2</WhCol>
    <WhCol span="6">content3</WhCol>
    <WhCol span="6">conrtent4</WhCol>
</WhRow>
```

### 布局间有空隙gutter

<grid-gutter-demo></grid-gutter-demo>

```js
<WhRow class="row" gutter="20">
    <WhCol>content1</WhCol>
    <WhCol>content2</WhCol>
    <WhCol>content3</WhCol>
</WhRow>
```
