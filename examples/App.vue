<template>
    <div>
        <WhRow class="row">
            <WhCol class="item" span="12">content1</WhCol>
            <WhCol class="item" span="12">conrtent2</WhCol>
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
        <WhRow class="row" gutter="20">
            <WhCol>content1</WhCol>
            <WhCol>content2</WhCol>
            <WhCol>content3</WhCol>
        </WhRow>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
.row {
    margin-top: 20px;
    .item {
        border-left: 1px solid red;
    }
}
</style>