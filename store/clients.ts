import { defineStore } from 'pinia';
import type { Ref, UnwrapRef } from 'vue';
import { apiStore } from '~/store/api';
import { ENDPOINT } from '~/const/request';

export const usersStore = defineStore('usersStore', () => {
	const storeApi = apiStore();

	const clientResponse: Ref<UnwrapRef<CLIENT.ClientResponse | null>> = ref(null);
	const isLoadingClientList: Ref<UnwrapRef<boolean>> = ref(false);
	const clientRequestParams: Ref<UnwrapRef<CLIENT.ClientRequestParams>> = ref({ offset: 0, limit: 10, currentPage: 1 });

	const clientList = computed((): UnwrapRef<CLIENT.Client[]> => {
		return clientResponse.value?.items || [];
	});

	const clientTotal = computed((): UnwrapRef<number> => {
		return clientResponse.value?.totalItems || 0;
	});

	const clientPages = computed((): UnwrapRef<number> => {
		return Math.ceil(clientTotal.value / clientRequestParams.value.limit);
	});

	const setClientsRequestParams = async (page: number, limit: number): Promise<void> => {
		clientRequestParams.value.currentPage = page;
		clientRequestParams.value.limit = limit;
		clientRequestParams.value.offset = (page - 1) * limit;
		await requestClients();
	};

	const clearClientsParams = async (): Promise<void> => {
		clientRequestParams.value = { offset: 0, limit: 10, currentPage: 1 };
	};

	const requestClients = async (): Promise<void> => {
		isLoadingClientList.value = true;
		const query = `offset=${clientRequestParams.value.offset}&limit=${clientRequestParams.value.limit}`;
		clientResponse.value = await storeApi.get(ENDPOINT.clients.get, query);
		isLoadingClientList.value = false;
	};

	return {
		clientList,
		isLoadingClientList,
		clientTotal,
		clientPages,
		setClientsRequestParams,
		clearClientsParams,
		requestClients,
	};
});
