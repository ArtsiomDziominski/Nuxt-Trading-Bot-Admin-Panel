import { storeToRefs } from 'pinia';
import { userStore } from '~/store/user';
import { COOKIES_TOKEN } from '~/const/const';
import { getCookie } from '~/utils/cookie';

export default defineNuxtRouteMiddleware((to, from) => {
	if (import.meta.client) {
		const storeUser = userStore();
		const { isAuthenticated, userToken } = storeToRefs(storeUser);

		userToken.value = getCookie(COOKIES_TOKEN) || '';

		if (!isAuthenticated.value) return navigateTo('/login');
	}
});
