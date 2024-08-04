export interface Error {
	message: string;
	options?: { [key: string]: string | number };
}

export interface Errors {
	[key: string]: Error;
}

export interface DataTableServerLoadItems {
	page: number;
	itemsPerPage: number;
	sortBy: [];
	groupBy: [];
	search: string;
}

export as namespace COMMON;
