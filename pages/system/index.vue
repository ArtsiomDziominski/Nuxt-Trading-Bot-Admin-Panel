<template>
	<SystemWS />
</template>

<script setup lang="ts">
import { systemStore } from '~/store/system';

const storeSystem = systemStore();

onMounted(() => {
	storeSystem.requestWS();
});
</script>

<style scoped lang="scss">

</style>
