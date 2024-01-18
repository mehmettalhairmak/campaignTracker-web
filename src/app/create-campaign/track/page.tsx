"use client";

import React from "react";
import CreateCampaignHeader from "@/components/create-campaign/header";
import TrackForm from "@/components/create-campaign/track/track-form";
import NavigationButton from "@/components/create-campaign/navigation-button";
import useTrackStore from "@/zustand/track";

function Track() {
	const { track } = useTrackStore();

	return (
		<div className="flex flex-1 bg-base-white w-full h-full flex-col text-left text-[1rem] text-gray1 font-alata">
			{/* Header */}
			<CreateCampaignHeader currentPage="Parçan" />

			<section className="flex justify-center mt-[5.31rem] mx-[9.75rem]">
				<div className="flex flex-col">
					<TrackForm />

					<div className="flex flex-row justify-end mt-[2.6rem] gap-x-[0.63rem]">
						<NavigationButton
							title="Geri Dön"
							bgColor="bg-surface-surface-secondary"
						/>
						<NavigationButton
							title="Devam Et"
							bgColor="bg-primary-600"
							disabled={track === null ? true : false}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Track;
