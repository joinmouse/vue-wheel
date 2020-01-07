<template>
    <div class="wrapper">
        <div class="nav">
            <router-link to="/button">WhButton组件</router-link>
            <router-link to="/grid">WhGrid组件</router-link>
            <router-link to="/tab">WhTab组件</router-link>
            <router-link to="/collapse">WhCollapse手风琴组件</router-link>
            <router-link to="/slides">WhSlides轮播组件</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.wrapper {
    margin: 50px 100px;
    padding: 20px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 240px;
        height: 100%;
        z-index: -1000;
        border-right: 1px solid #ddd;
    }
    .nav {
        width: 280px;
        a {
            padding: 10px;
            display: block;
        }
    }
}


.row {
    margin-top: 20px;
    .item {
        border-left: 1px solid red;
    }
}
</style>