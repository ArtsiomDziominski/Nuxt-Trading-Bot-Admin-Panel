<template>
  <GlobalLoading v-if="isLoading" />
  <NuxtLayout v-else>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false;
})
</script>

<style lang="scss">
.app {}
</style>
