import Button from "@/components/create-campaign/button";
import CampaignCard from "@/components/create-campaign/campaign/campaign-card";
import CampaignFormLayout from "@/components/create-campaign/campaign/campaign-form-layout";
import StartDateCard from "@/components/create-campaign/campaign/start-date-card";
import CreateCampaignHeader from "@/components/create-campaign/header";
import React from "react";

function Campaign() {
	return (
		<div className="flex flex-1 bg-base-white w-full h-full flex-col text-left text-[1rem] text-gray1 font-alata">
			{/* Header */}
			<CreateCampaignHeader currentPage="Kampanyan" />
			<section className="flex flex-col items-center mt-[5.31rem] mx-[9.75rem]">
				<div className="flex flex-col">
					<CampaignFormLayout />

					<div className="flex flex-row justify-end mt-[2.6rem] gap-x-[0.63rem]">
						<Button title="Geri Dön" bgColor="bg-surface-surface-secondary" />
						<Button title="Devam Et" bgColor="bg-primary-600" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Campaign;
