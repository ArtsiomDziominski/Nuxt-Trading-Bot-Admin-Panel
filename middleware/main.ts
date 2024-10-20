import { storeToRefs } from 'pinia';
import { userStore } from '~/store/user';
import { getCookie } from '~/utils/cookie';
import { COOKIES_TOKEN } from '~/const/const';

export default defineNuxtRouteMiddleware((to, from) => {
	if (process.client) {
		const storeUser = userStore();
		const { isAuthenticated, userToken } = storeToRefs(storeUser);

		userToken.value = getCookie(COOKIES_TOKEN) || '';

		if (!isAuthenticated.value) return navigateTo('/login');
		else return navigateTo('/clients');
	}
});
