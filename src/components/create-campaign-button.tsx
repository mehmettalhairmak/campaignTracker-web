"use client";

import axiosInstance from "@/api";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";
import useCampaignStore from "@/zustand/campaign";
import { useRouter } from "next/navigation";
import React from "react";

export default function CreateCampaignButton() {
	const { setSpecialCampaign } = useCampaignStore();

	const router = useRouter();

	return (
		<button
			onClick={() => {
				axiosInstance
					.get<SpecialCampaign>("create-campaign")
					.then((response) => {
						setSpecialCampaign(response.data.data.id);
						router.push("/create-campaign/track");
					})
					.catch((error) => console.error("create-campaign error", error));
			}}
			className="rounded-lg bg-primary-primary-default w-[13.44rem] h-[3.06rem] flex flex-row items-center justify-center py-[0.5rem] px-[0.75rem] box-border cursor-pointer"
		>
			<div className="leading-[1.38rem] text-[1.25rem] text-base-white no-underline">
				Kampanya Olustur
			</div>
		</button>
	);
}
