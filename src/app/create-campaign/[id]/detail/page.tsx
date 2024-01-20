import React from "react";
import CreateCampaignHeader from "@/components/create-campaign/header";
import NavigationForm from "@/components/create-campaign/detail/navigation-form";
import DetailForm from "@/components/create-campaign/detail/detail-form";

function Detail() {
	return (
		<div className="flex flex-1 bg-base-white w-full h-full flex-col text-left text-[1rem] text-gray1 font-alata">
			{/* Header */}
			<CreateCampaignHeader currentPage="Detaylar" />
			<section className="flex flex-col items-center mt-[5.31rem] mx-[9.75rem]">
				<div className="flex flex-col">
					<DetailForm />

					<NavigationForm />
				</div>
			</section>
		</div>
	);
}

export default Detail;
