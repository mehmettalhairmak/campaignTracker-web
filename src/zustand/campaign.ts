import { Campaign, CampaignDate } from "@/models/CampaignModel";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";
import { create } from "zustand";

type State = {
	specialCampaign: number | null;
	campaign: Campaign | null;
	campaignDate: CampaignDate | null;
	section: "campaign_select" | "campaign_date";
};

type Actions = {
	setSpecialCampaign: (qty: number | null) => void;
	setCampaign: (qty: Campaign | null) => void;
	setCampaignDate: (qty: CampaignDate | null) => void;
	setSection: (qty: "campaign_select" | "campaign_date") => void;
};

const useCampaignStore = create<State & Actions>((set) => ({
	specialCampaign: null,
	campaign: null,
	campaignDate: null,
	section: "campaign_select",
	setSpecialCampaign: (qty: number | null) =>
		set((state) => ({ specialCampaign: qty })),
	setCampaign: (qty: Campaign | null) => set((state) => ({ campaign: qty })),
	setCampaignDate: (qty: CampaignDate | null) =>
		set((state) => ({ campaignDate: qty })),
	setSection: (qty: "campaign_select" | "campaign_date") =>
		set((state) => ({ section: qty })),
}));

export default useCampaignStore;
