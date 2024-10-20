export enum Strategy {
	MARTINGALE = 'MARTINGALE',
	DEFAULT = 'DEFAULT',
}

export enum BotTypes {
	Limit = 'LIMIT',
	Market = 'MARKET',
}

export const BotCreateTitle = {
	[Strategy.DEFAULT]: 'Сеточный бот',
	[Strategy.MARTINGALE]: 'Сеточный бот "Мартингейл"',
};

export enum BotStatus {
	Start = 'START',
	Stop = 'STOP',
	Pause = 'PAUSE',
}

export enum BotSide {
	Buy = 'BUY',
	Sell = 'SELL',
}

export enum BotActive {
	Active = 'Active',
	NotActive = 'Not active',
}
