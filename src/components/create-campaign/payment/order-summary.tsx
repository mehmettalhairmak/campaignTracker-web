"use client";

import { formatDate } from "@/helpers/dateFormatter";
import useCampaignStore from "@/zustand/campaign";
import { useRouter } from "next/navigation";
import React from "react";

function OrderSummary() {
	const router = useRouter();

	const { campaign, campaignDate, setSection } = useCampaignStore();

	return (
		<>
			<div className="flex-1 flex flex-col items-start justify-start">
				<div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.5rem] gap-[1rem]">
					<div className="text-[1.13rem] leading-[1.75rem] font-medium text-gray1">
						Kampanya özetin
					</div>
					<div className="self-stretch flex flex-col items-start justify-start">
						<div className="self-stretch bg-base-white flex flex-row items-end justify-start gap-[0.75rem]">
							<div className="flex-1 flex flex-col items-start justify-start">
								<div className="flex flex-col items-start justify-start gap-[0.13rem]">
									<div className="leading-[1.25rem] font-medium">Tıklanma</div>
									<div className="text-[1rem] leading-[1.5rem] font-medium text-gray-900">
										{campaign?.click} tıklanma
									</div>
								</div>
							</div>
							<div className="rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[0.5rem] text-center">
								<div
									onClick={() => {
										setSection("campaign_select");
										router.push("/create-campaign/campaign");
									}}
									className="leading-[1.25rem] font-semibold hover: cursor-pointer"
								>
									Düzenle
								</div>
							</div>
						</div>
					</div>
					{campaignDate !== null && (
						<div className="self-stretch bg-base-white flex flex-row items-end justify-start gap-[0.75rem]">
							<div className="flex-1 flex flex-col items-start justify-start">
								<div className="flex flex-col items-start justify-start gap-[0.13rem]">
									<div className="leading-[1.25rem] font-medium">
										Başlangıç tarihi
									</div>
									<div className="text-[1rem] leading-[1.5rem] font-medium text-gray-900">
										{formatDate(campaignDate.date_range[0]) +
											"-" +
											formatDate(campaignDate.date_range[1])}
									</div>
								</div>
							</div>
							<div className="rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[0.5rem] text-center">
								<div
									onClick={() => {
										setSection("campaign_date");
										router.push("/create-campaign/campaign");
									}}
									className="leading-[1.25rem] font-semibold hover: cursor-pointer"
								>
									Düzenle
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default OrderSummary;
