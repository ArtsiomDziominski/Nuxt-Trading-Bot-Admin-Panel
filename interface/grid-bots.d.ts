export interface GridBotsCryptoPair {
	params: {
		symbol: string;
		qty: number;
		price: number;
		side: string;
		qtyOpenOrders: number;
		step: number;
		decimals: number;
		strategy: string;
		stepRevers: string;
	};
	isActive: true;
	isProcessingOrders: false;
}

export interface GridBotsUser {
	id: string;
	login: string;
	roles: string[];
	untilSubscription: string;
}

export interface GridBotsApi {
	id: string;
	publicKey: string;
	secretKey: string;
}

export interface GridBots {
	cryptoPair: GridBotsCryptoPair[];
	user: GridBotsUser;
	api: GridBotsApi;
}

export interface GridBotsRequestParams {
	offset: number;
	limit: number;
	currentPage: number;
}

export interface GridBotsResponse {
	items: GridBots[];
	totalItems: number;
	totalGridBotsActive: number;
	totalGridBotsNotActive: number;
}

export as namespace GRID_BOTS;
