<template>
    <WhLayout style="height: 40vh">
        <WhHeader style="height: 8vh">header</WhHeader>
        <WhContent style="height: 24vh">content</WhContent>
        <WhFooter style="height: 8vh">footer</WhFooter>
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
</style>