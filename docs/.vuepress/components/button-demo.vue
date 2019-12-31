<template>
    <div>
        <WhButton>默认按钮</WhButton>
        <WhButton type="primary">主要按钮</WhButton>
    </div>
</template>

<script>
import WhButton from '../../../packages/button/button'

export default {
    components: {
        WhButton
    }
}
</script>

<style lang="scss" scoped>
div {
    margin-top: 20px;
}
button {
    margin-right: 10px;
}
</style>