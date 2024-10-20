import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import { setCookie } from '~/utils/cookie';
import { COOKIES_TOKEN } from '~/const/const';
import { ENDPOINT } from '~/const/request';
import { apiStore } from '~/store/api';

export const userStore = defineStore('userStore', () => {
	const api = apiStore();

	const user: Ref<USER.User> = ref({
		mail: '',
		login: '',
	});

	const userToken: Ref<string> = ref('');

	const isAuthenticated = computed(() => !!userToken.value);

	const saveToken = async (token: string): Promise<void> => {
		userToken.value = token;
		setCookie(COOKIES_TOKEN, token, 10);
	};

	const requestSetUser = async (): Promise<void> => {
		try {
			const response = await api.get(ENDPOINT.auth.user);
			if (response?.success) user.value = response?.data;
		}
		catch (e) {
			if ((e as any)?.response?.data) deleteUserToken();
		}
	};

	const deleteUserToken = (): void => {
		document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		userToken.value = '';
	};

	return {
		user,
		userToken,
		isAuthenticated,
		saveToken,
		requestSetUser,
		deleteUserToken,
	};
});
