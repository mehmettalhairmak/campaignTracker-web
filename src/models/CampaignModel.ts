export interface Campaign {
	click: number;
	currency: "TRY" | "USD";
	description: string;
	id: string;
	name: string;
	price: number;
}

export interface CampaignDate {
	currency: "TRY" | "USD";
	date_range: [string, string];
	description: string;
	id: string;
	name: string;
	price: number;
}
