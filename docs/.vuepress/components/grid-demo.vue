<template>
    <div>
        <WhRow>
            <WhCol>content1</WhCol>
            <WhCol>content2</WhCol>
        </WhRow>
    </div>
</template>

<script>
import WhRow from '../../../packages/Grid/row'
import WhCol from '../../../packages/Grid/col'


export default {
    components: {
        WhRow,
        WhCol
    }
}
</script>

<style lang="scss" scoped>
div {
    margin-top: 10px;
}
</style>