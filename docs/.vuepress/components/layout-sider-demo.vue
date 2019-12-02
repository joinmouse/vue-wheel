<template>
    <WhLayout style="height: 40vh">
        <WhHeader style="height: 8vh">header</WhHeader>
        <WhLayout style="height: 24vh">
            <WhSider>sider</WhSider>
            <WhContent>content</WhContent>
        </WhLayout>
        <WhFooter style="height: 8vh">footer</WhFooter>
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
</style>