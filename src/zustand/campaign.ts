import { Campaign, CampaignDate } from "@/models/CampaignModel";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";
import { create } from "zustand";

type State = {
	campaign: Campaign | null;
	storedCampaign: SpecialCampaign | null;
	campaignDate: CampaignDate | null;
	section: "campaign_select" | "campaign_date";
};

type Actions = {
	setCampaign: (qty: Campaign | null) => void;
	setStoredCampaign: (qty: SpecialCampaign | null) => void;
	setCampaignDate: (qty: CampaignDate | null) => void;
	setSection: (qty: "campaign_select" | "campaign_date") => void;
};

const useCampaignStore = create<State & Actions>((set) => ({
	campaign: null,
	storedCampaign: null,
	campaignDate: null,
	section: "campaign_select",
	setCampaign: (qty: Campaign | null) => set((state) => ({ campaign: qty })),
	setStoredCampaign: (qty: SpecialCampaign | null) =>
		set((state) => ({ storedCampaign: qty })),
	setCampaignDate: (qty: CampaignDate | null) =>
		set((state) => ({ campaignDate: qty })),
	setSection: (qty: "campaign_select" | "campaign_date") =>
		set((state) => ({ section: qty })),
}));

export default useCampaignStore;
