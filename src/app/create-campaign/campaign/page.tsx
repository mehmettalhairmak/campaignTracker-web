import NavigationButton from "@/components/create-campaign/navigation-button";
import CampaignFormLayout from "@/components/create-campaign/campaign/campaign-form-layout";
import CreateCampaignHeader from "@/components/create-campaign/header";
import React from "react";
import NavigationForm from "@/components/create-campaign/campaign/navigation-form";

function Campaign() {
	return (
		<div className="flex flex-1 bg-base-white w-full h-full flex-col text-left text-[1rem] text-gray1 font-alata">
			{/* Header */}
			<CreateCampaignHeader currentPage="Kampanyan" />
			<section className="flex flex-col items-center mt-[5.31rem] mx-[9.75rem]">
				<div className="flex flex-col">
					<CampaignFormLayout />

					<NavigationForm />
				</div>
			</section>
		</div>
	);
}

export default Campaign;
