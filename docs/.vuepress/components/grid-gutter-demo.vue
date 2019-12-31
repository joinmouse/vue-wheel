<template>
    <div>
        <WhRow class="row" gutter="20">
            <WhCol span="12">content1</WhCol>
            <WhCol span="12">conrtent2</WhCol>
        </WhRow>
        <WhRow class="row" gutter="20">
            <WhCol span="8">content1</WhCol>
            <WhCol span="8">conrtent2</WhCol>
            <WhCol span="8">conrtent3</WhCol>
        </WhRow>
        <WhRow class="row" gutter="20">
            <WhCol span="6">content1</WhCol>
            <WhCol span="6">conrtent2</WhCol>
            <WhCol span="6">content3</WhCol>
            <WhCol span="6">conrtent4</WhCol>
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
.row {
    margin-top: 20px;
}
</style>