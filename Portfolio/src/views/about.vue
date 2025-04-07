<script setup lang="ts">
function showAlert() {
    alert('about')
}
</script>

<template>
    <n-button type="primary" size="medium" @click="showAlert">关于</n-button>

</template>

<style lang="scss" scoped></style>