"use client";

import axiosInstance from "@/api";
import { SpecialCampaignBody } from "@/models/SpecialCampaignModel";
import useCampaignStore from "@/zustand/campaign";
import useGenreeStore from "@/zustand/genree";
import useRegionStore from "@/zustand/region";
import useTrackStore from "@/zustand/track";
import { AxiosResponse } from "axios";
import React, { useEffect } from "react";

function PaymentButton() {
	const { track } = useTrackStore();
	const { genres } = useGenreeStore();
	const { region } = useRegionStore();
	const { campaign, campaignDate, specialCampaign } = useCampaignStore();

	const onClick = () => {
		let body: SpecialCampaignBody;
		if (track !== null && track !== "NULL") {
			body = {
				id: 67,
				campaign_data: {
					track_id: track.id,
					genres: genres!,
					package: campaign!.id,
					start_date: campaignDate?.date_range[0]!,
					region: region!,
				},
			};
		} else if (track === "NULL") {
			body = {
				id: specialCampaign!,
				campaign_data: {
					track_id: "NULL",
					genres: genres!,
					package: campaign!.id,
					start_date: campaignDate?.date_range[0]!,
					region: region!,
				},
			};
		}
		axiosInstance
			.post("update-campaign", body!)
			.then((response) => {
				axiosInstance
					.get("get-campaign?id=" + response.data.data.id)
					.then((response) => {
						alert(JSON.stringify(response.data));
					});
			})
			.catch((error) => console.error("update campaign error", error));
	};

	return (
		<div
			onClick={onClick}
			className="flex flex-col items-start justify-start text-center text-[0.88rem] text-base-white hover:cursor-pointer"
		>
			<div className="rounded-lg bg-primary-600 w-[22rem] overflow-hidden flex flex-row items-center justify-center py-[0.63rem] px-[1rem] box-border gap-[0.5rem]">
				<div className="leading-[1.25rem] font-semibold">Ödemeye geç</div>
			</div>
		</div>
	);
}

export default PaymentButton;
