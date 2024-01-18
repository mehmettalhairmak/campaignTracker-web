"use client";

import axiosInstance from "@/api";
import { useRouter } from "next/navigation";
import React from "react";

export default function CreateCampaignButton() {
	const router = useRouter();

	return (
		<button
			onClick={() => {
				axiosInstance.get("create-campaign").then((response) => {});
				router.push("/create-campaign/track");
			}}
			className="rounded-lg bg-primary-primary-default w-[13.44rem] h-[3.06rem] flex flex-row items-center justify-center py-[0.5rem] px-[0.75rem] box-border cursor-pointer"
		>
			<div className="leading-[1.38rem] text-[1.25rem] text-base-white no-underline">
				Kampanya Olustur
			</div>
		</button>
	);
}
