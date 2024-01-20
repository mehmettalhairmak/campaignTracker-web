export interface SpecialCampaign {
	data: {
		id: number;
		track_id: string | "";
		genres: string[] | null;
		region: string | null;
		package: string | null;
		start_date: string | null;
		created_at: string;
	};
}

export interface SpecialCampaignBody {
	id: number;
	campaign_data: {
		track_id: string;
		genres: string[];
		region: string;
		package: string;
		start_date: string;
	};
}
