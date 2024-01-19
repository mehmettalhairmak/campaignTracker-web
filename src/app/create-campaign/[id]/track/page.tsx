"use client";

import React from "react";
import CreateCampaignHeader from "@/components/create-campaign/header";
import TrackForm from "@/components/create-campaign/track/track-form";
import NavigationForm from "@/components/create-campaign/track/navigation-form";

function Track({ params }: { params: { id: string } }) {
	return (
		<div className="flex flex-1 bg-base-white w-full h-full flex-col text-left text-[1rem] text-gray1 font-alata">
			{/* Header */}
			<CreateCampaignHeader currentPage="Parçan" />

			<section className="flex justify-center mt-[5.31rem] mx-[9.75rem]">
				<div className="flex flex-col">
					<TrackForm />
					<NavigationForm id={params.id} />
				</div>
			</section>
		</div>
	);
}

export default Track;
