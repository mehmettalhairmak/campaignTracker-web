import React from "react";
import CreateCampaignHeader from "@/components/create-campaign/header";
import RegionForm from "@/components/create-campaign/detail/region-form";
import TrackTypeForm from "@/components/create-campaign/detail/track-type-form";
import Button from "@/components/create-campaign/button";

function Detail() {
	return (
		<div className="flex flex-1 bg-base-white w-full h-full flex-col text-left text-[1rem] text-gray1 font-alata">
			{/* Header */}
			<CreateCampaignHeader currentPage="Detaylar" />
			<section className="flex flex-col items-center mt-[5.31rem] mx-[9.75rem]">
				<div className="flex flex-col">
					<RegionForm />
					<TrackTypeForm />

					<div className="flex flex-row justify-end mt-[2.6rem] gap-x-[0.63rem]">
						<Button title="Geri Dön" bgColor="bg-surface-surface-secondary" />
						<Button title="Devam Et" bgColor="bg-primary-600" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Detail;
