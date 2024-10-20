import { defineStore } from 'pinia';
import type { Ref, UnwrapRef } from 'vue';
import { apiStore } from '~/store/api';
import { ENDPOINT } from '~/const/request';
import type { BotStatus } from '~/const/bots';

export const gridBotsStore = defineStore('gridBotsStore', () => {
	const storeApi = apiStore();

	const gridBotsResponse = ref<GRID_BOTS.GridBotsResponse | null>(null);
	const isLoadingGridBotsList = ref(false);
	const isLoadingChangeWatchingGridBot = ref(false);
	const gridBotsRequestParams: Ref<UnwrapRef<GRID_BOTS.GridBotsRequestParams>> = ref({ offset: 0, limit: 10, currentPage: 1 });

	const gridBotsList = computed((): UnwrapRef<GRID_BOTS.GridBots[]> => {
		return gridBotsResponse.value?.items || [];
	});

	const gridBotsTotal = computed((): UnwrapRef<number> => {
		return gridBotsResponse.value?.totalItems || 0;
	});

	const gridBotsPages = computed((): UnwrapRef<number> => {
		return Math.ceil(gridBotsTotal.value / gridBotsRequestParams.value.limit);
	});

	const setGridBotsRequestParams = async (page: number, limit: number): Promise<void> => {
		gridBotsRequestParams.value.currentPage = page;
		gridBotsRequestParams.value.limit = limit;
		gridBotsRequestParams.value.offset = (page - 1) * limit;
		await requestGridBots();
	};

	const clearGridBotsParams = async (): Promise<void> => {
		gridBotsRequestParams.value = { offset: 0, limit: 10, currentPage: 1 };
	};

	const requestGridBots = async (): Promise<void> => {
		isLoadingGridBotsList.value = true;
		const query = `offset=${gridBotsRequestParams.value.offset}&limit=${gridBotsRequestParams.value.limit}`;
		gridBotsResponse.value = await storeApi.get(ENDPOINT.gridBots.get, query);
		isLoadingGridBotsList.value = false;
	};

	const requestChangeWatchingGridBot = async (symbol: string, apiId: string | undefined, status: BotStatus): Promise<void> => {
		if (!apiId) return;
		isLoadingChangeWatchingGridBot.value = true;
		try {
			const response = await storeApi.put(ENDPOINT.gridBots.watching, { symbol, apiId, status });
			if (response?.success) requestGridBots();
		}
		catch (e) {
			console.warn(e);
		}
		isLoadingChangeWatchingGridBot.value = false;
	};

	return {
		gridBotsList,
		gridBotsTotal,
		isLoadingGridBotsList,
		isLoadingChangeWatchingGridBot,
		requestChangeWatchingGridBot,
		requestGridBots,
		setGridBotsRequestParams,
	};
});
