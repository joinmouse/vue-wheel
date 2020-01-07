<template>
    <WhSlides>
        <WhSlidesItem>
            <div class="box">1</div>
        </WhSlidesItem>
        <WhSlidesItem>
            <div class="box">2</div>
        </WhSlidesItem>
        <WhSlidesItem>
            <div class="box">3</div>
        </WhSlidesItem>
    </WhSlides>
</template>

<script>
export default {
    name: 'slides'
}
</script>

<style lang="scss" scoped>
.box {
    width: 200px;
    height: 150px;
    background: #ddd;
    border: 1px solid red;
}
</style>