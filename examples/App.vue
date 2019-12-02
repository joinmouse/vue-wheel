<template>
    <div class="wrapper">
        <div class="nav">
            <p><router-link to="/button">Go to Button-Demo</router-link></p>
            <p><router-link to="/bar">Go to Bar</router-link></p>
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
.wrapper {
    display: flex;
    justify-content: flex-start;
    .nav {
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid red;
    }
}

.row {
    margin-top: 20px;
    .item {
        border-left: 1px solid red;
    }
}
</style>