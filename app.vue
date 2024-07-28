<template>
	<GlobalLoading v-if="isLoading" />
	<NuxtLayout v-else>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import { userStore } from '~/store/user';

const storeUser = userStore();

const isLoading = ref(true);

onMounted(() => {
	storeUser.requestSetUser();
	isLoading.value = false;
});
</script>

<style lang="scss">
.app {}
</style>
