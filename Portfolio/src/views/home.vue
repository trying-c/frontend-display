<script setup lang="ts">
function showAlert() {
    alert('首页')
}
</script>

<template>
    <div>
        <n-button type="primary" size="medium" @click="showAlert">首页</n-button>
    </div>

</template>

<style lang="scss" scoped></style>