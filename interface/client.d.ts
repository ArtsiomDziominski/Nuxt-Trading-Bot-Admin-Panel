export interface Client {
	login: string;
	mail: string;
}

export interface ClientResponse {
	items: Client[];
	totalItems: number;
}

export interface ClientRequestParams {
	offset: number;
	limit: number;
	currentPage: number;
}

export as namespace CLIENT;
