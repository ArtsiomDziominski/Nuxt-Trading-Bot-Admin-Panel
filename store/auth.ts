import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { ENDPOINT, HEADER_PARAMETERS } from '~/const/request';
import { getHeadersRequest } from '~/utils/request';
import { userStore } from '~/store/user';
import { apiStore } from '~/store/api';
import { ruleLoginForm, rulePasswordForm } from '~/const/validation';
import { validationStore } from '~/store/validation';

export const authStore = defineStore('authStore', () => {
	const storeUser = userStore();
	const storeValidation = validationStore();
	const api = apiStore();
	const BURL = api.BURL;

	const userLogin: Ref<AUTH.ILogin> = ref({
		mail: '',
		password: '',
	});

	const userSignup: Ref<AUTH.ISignupMail> = ref({
		login: '',
		mail: '',
		password: '',
	});

	const errors: Ref<COMMON.Errors> = ref({
		mail: { message: '' },
		password: { message: '' },
	});

	const appendErrors = (error: COMMON.Errors): void => {
		errors.value = { ...errors.value, ...error };
	};

	const requestLogin = async (): Promise<void> => {
		const response = await axios.post(BURL + ENDPOINT.auth.login, userLogin.value, getHeadersRequest([HEADER_PARAMETERS.content]));
		if (response.data.success) await storeUser.saveToken(response.data.token);
	};

	const checkValidationLoginForm = (): boolean => {
		const validationRules = ruleLoginForm(userLogin.value.mail);
		const { isValid, error } = storeValidation.makeCheckRules('mail', validationRules);
		appendErrors(error);
		return isValid;
	};

	const checkValidationPasswordForm = (): boolean => {
		const validationRules = rulePasswordForm(userLogin.value.password);
		const { isValid, error } = storeValidation.makeCheckRules('password', validationRules);
		appendErrors(error);
		return isValid;
	};

	return {
		userLogin,
		userSignup,
		errors,
		requestLogin,
		checkValidationLoginForm,
		checkValidationPasswordForm,
	};
});
