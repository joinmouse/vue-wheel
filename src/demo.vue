<template>
    <div>
        <ui-button>hello</ui-button>
    </div>
</template>

<script>
import Button from './button'

export default {
    components: {
        'ui-button': Button
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    --button-height: 32px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-color: #999;
    --border-color-hover: #666;
    --border-radius: 4px;
    --font-size: 14px;
    --color: #333;
}
body {
    font-size: var(--font-size);
}
#app {
    margin: 20px;
}
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.box {
    margin: 20px;
}
</style>