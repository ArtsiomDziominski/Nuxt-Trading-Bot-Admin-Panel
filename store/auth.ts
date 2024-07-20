import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { BURL, ENDPOINT, HEADER_PARAMETERS } from '~/const/request';
import { getHeadersRequest } from '~/utils/request';
import { userStore } from '~/store/user';

export const authStore = defineStore('authStore', () => {
	const storeUser = userStore();

	const userLogin: Ref<AUTH.ILogin> = ref({
		mail: '',
		password: '',
	});

	const userSignup: Ref<AUTH.ISignupMail> = ref({
		login: '',
		mail: '',
		password: '',
	});

	const requestLogin = async (): Promise<void> => {
		const response = await axios.post(BURL + ENDPOINT.auth.login, userLogin.value, getHeadersRequest([HEADER_PARAMETERS.content]));
		if (response.data.success) await storeUser.saveToken(response.data.token);
	};

	const requestSignupMail = async (): Promise<void> => {
		const response = await axios.post(BURL + ENDPOINT.auth.signupMail, userSignup.value, getHeadersRequest([HEADER_PARAMETERS.content]));
		if (response.data.success) await storeUser.saveToken(response.data.token);
	};

	return {
		userLogin,
		userSignup,
		requestLogin,
		requestSignupMail,
	};
});
