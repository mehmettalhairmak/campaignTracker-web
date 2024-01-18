import { Item } from "@/models/TrackModel";
import { create } from "zustand";

type State = {
	campaign: string | null;
	section: "campaign_select" | "campaign_date";
};

type Actions = {
	setCampaign: (qty: string | null) => void;
	setSection: (qty: "campaign_select" | "campaign_date") => void;
};

const useCampaignStore = create<State & Actions>((set) => ({
	campaign: null,
	section: "campaign_select",
	setCampaign: (qty: string | null) => set((state) => ({ campaign: qty })),
	setSection: (qty: "campaign_select" | "campaign_date") =>
		set((state) => ({ section: qty })),
}));

export default useCampaignStore;
