"use client";

import React from "react";
import NavigationButton from "../navigation-button";
import useCampaignStore from "@/zustand/campaign";
import useRegionStore from "@/zustand/region";

function NavigationForm() {
	const { region } = useRegionStore();
	const { campaign, setSection, section } = useCampaignStore();

	return (
		<div className="flex flex-row justify-end mt-[2.6rem] gap-x-[0.63rem]">
			<NavigationButton
				title="Geri Dön"
				onClick={
					section === "campaign_date"
						? () => setSection("campaign_select")
						: undefined
				}
				bgColor="bg-surface-surface-secondary"
			/>
			<NavigationButton
				title="Devam Et"
				disabled={campaign === null}
				onClick={
					section === "campaign_select"
						? region === "TRY"
							? () => setSection("campaign_date")
							: undefined
						: undefined
				}
				bgColor="bg-primary-600"
			/>
		</div>
	);
}

export default NavigationForm;
