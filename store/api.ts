import axios from 'axios';
import { defineStore } from 'pinia';
import { getHeadersRequest } from '~/utils/request';
import { ErrorCodes, HEADER_PARAMETERS } from '~/const/request';
import { userStore } from '~/store/user';

export const apiStore = defineStore('apiStore', () => {
	const storeUser = userStore();
	const config = computed(() => useRuntimeConfig());
	const BURL = computed(() => config.value.public.API_URL);
	const router = useRouter();

	const get = async (endpoint: string, query: string = ''): Promise<any> => {
		try {
			const response = await axios.get(BURL.value + endpoint + '?' + query, getHeadersRequest([HEADER_PARAMETERS.content, HEADER_PARAMETERS.authorization, HEADER_PARAMETERS.accept]));
			if (response?.data?.success) return response.data;
			return response.data;
		}
		catch (e) {
			const error = e?.response?.data?.error;
			if (error?.errorCode === ErrorCodes.notAuth || error?.errorCode === ErrorCodes.notAdmin) {
				storeUser.deleteUserToken();
				await router.push('/login');
			}
			return e?.response?.data;
		}
	};

	return {
		BURL,
		get,
	};
});
