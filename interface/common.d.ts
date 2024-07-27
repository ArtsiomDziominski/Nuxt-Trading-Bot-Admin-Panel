export interface Error {
	message: string;
	options?: { [key: string]: string | number };
}

export interface Errors {
	[key: string]: Error;
}

export as namespace COMMON;
