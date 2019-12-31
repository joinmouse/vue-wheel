<template>
    <WhLayout style="height: 40vh">
        <WhHeader class="item" style="height: 8vh">header</WhHeader>
        <WhContent class="item" style="height: 24vh">content</WhContent>
        <WhFooter class="item" style="height: 8vh">footer</WhFooter>
    </WhLayout>
</template>

<script>
import { WhHeader, WhLayout, WhContent, WhFooter } from '../../../packages/Layout/index'

export default {
    components: {
        WhHeader, 
        WhLayout,
        WhContent, 
        WhFooter
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