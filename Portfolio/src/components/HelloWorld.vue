<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <n-gradient-text type="warning">
    <h1>{{ msg }}</h1>
  </n-gradient-text>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
