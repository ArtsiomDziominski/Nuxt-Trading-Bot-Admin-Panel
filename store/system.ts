import { defineStore } from 'pinia';
import { ENDPOINT } from '~/const/request';
import { apiStore } from '~/store/api';

export const systemStore = defineStore('systemStore', () => {
	const api = apiStore();

	const isLoaderSystemWSList = ref<boolean>(false);
	const systemWSList = ref<SYSTEM.SystemWS[]>([]);

	const requestWS = async (): Promise<void> => {
		isLoaderSystemWSList.value = true;
		try {
			const response = await api.get(ENDPOINT.system.ws.get);
			if (response.success) systemWSList.value = response?.data?.wsList || [];
		}
		catch (e) {
			console.log('errorRequestWS');
		}

		isLoaderSystemWSList.value = false;
	};

	return {
		isLoaderSystemWSList,
		systemWSList,
		requestWS,
	};
});
