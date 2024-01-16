"use client";

import React, { useState } from "react";
import CampaignCard from "./campaign-card";
import StartDateCard from "./start-date-card";

function CampaignFormLayout() {
	const [selectedCampaign, setSelectedCampaign] = useState<any | null>(null);

	return (
		<>
			{selectedCampaign === null ? (
				<div className="rounded-3xl bg-base-white box-border w-[76rem] overflow-hidden flex flex-col items-start justify-start p-[1.5rem] gap-[1.5rem] border-[1px] border-solid border-surface-surface-secondary ">
					<div className="w-[47.5rem] flex flex-col items-start justify-start">
						<div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem]">
							Senin için uygun olan paketi seç
						</div>
					</div>
					<CampaignCard />
				</div>
			) : (
				<div className="rounded-3xl box-border w-[76rem] h-[21.5rem] overflow-hidden flex flex-col items-center justify-start pt-[1.5rem] px-[1.5rem] pb-[4.06rem] gap-[1.5rem] text-gray-500 font-text-s-regular border-[1px] border-solid border-gray-200">
					<div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
						<div className="relative leading-[1.25rem] font-medium">
							Güzel seçim! Şimdi kampanya görselini belirle
						</div>
						<div className="self-stretch relative text-[1.25rem] tracking-[-0.02em] leading-[1.88rem] font-semibold text-gray1">
							Tahmini başlangıç tarihini seç
						</div>
					</div>
					<div className="self-stretch flex flex-col items-center justify-start gap-[0.75rem] text-primary-600">
						<StartDateCard />
						<StartDateCard />
					</div>
				</div>
			)}
		</>
	);
}

export default CampaignFormLayout;
