<template>
    <WhLayout style="height: 40vh">
        <WhHeader class="item" style="height: 8vh">header</WhHeader>
        <WhLayout style="height: 24vh">
            <WhSider class="item">sider</WhSider>
            <WhContent class="item">content</WhContent>
        </WhLayout>
        <WhFooter class="item" style="height: 8vh">footer</WhFooter>
    </WhLayout>
</template>

<script>
import { WhHeader, WhLayout, WhContent, WhFooter, WhSider } from '../../../packages/Layout/index'

export default {
    components: {
        WhHeader, 
        WhLayout, 
        WhContent, 
        WhFooter, 
        WhSider
    }
}
</script>

<style scoped>
* {
    color: #fff;
    font-size: 20px;
}
.item {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>