<template>
	<GlobalLoading v-if="isLoading" />
	<NuxtLayout v-else>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTheme } from 'vuetify';
import { userStore } from '~/store/user';
import { localStorageKeyTheme } from '~/const/theme';

const storeUser = userStore();
const { userToken, isAuthenticated } = storeToRefs(storeUser);
const theme = useTheme();

const isLoading = ref(false);

onMounted(() => storeUser.requestSetUser());

await useAsyncData('app', (app) => {
	const cookie = app?.ssrContext?.event.node.req.headers?.cookie || '';
	const cookieArray = cookie.split(';');
	const cookieObject: Record<string, string> = {};
	cookieArray.forEach((c) => {
		const cookArray = c.split('=');
		cookieObject[cookArray[0].trim()] = cookArray[1];
	});

	userToken.value = cookieObject?.['token'];
	theme.global.name.value = cookieObject?.[localStorageKeyTheme] || 'dark';

	return Promise.allSettled([
		isAuthenticated.value && storeUser.requestSetUser(),
	]);
});
</script>

<style lang="scss">
.app {
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
}
</style>
