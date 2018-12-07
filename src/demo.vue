<template>
    <div>
        <slides>
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
        </slides>
    </div>
</template>

<script>
import Slides from './slides'

export default {
    'slides': Slides
}
</script>

<style>
* {
    padding: 0;
    maring: 0;
    box-sizing: border-box;
}
.box {
    width: 200px;
    height: 150px;
    background: #ccc;
    border: 1px solid red;
}
</style>