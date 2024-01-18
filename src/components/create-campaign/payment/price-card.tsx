"use client";

import React from "react";
import useCampaignStore from "@/zustand/campaign";

function PriceCard() {
	const { campaign, campaignDate } = useCampaignStore();

	const calculateCost = (): number => {
		let campaignCost = 0;
		let campaignDateCost = 0;

		if (campaign !== null) {
			campaignCost = campaign.price;
		}

		if (campaignDate !== null) {
			campaignDateCost = campaignDate.price;
		}

		return campaignCost + campaignDateCost;
	};

	return (
		<>
			<div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] gap-[1rem] border-b-[1px] border-solid border-gray-200">
				<div className="self-stretch tracking-[-0.02em] leading-[1.5rem] font-semibold">
					Ödeme detayları
				</div>
				<div className="self-stretch flex flex-col items-start justify-start text-[0.88rem]">
					<div className="self-stretch flex flex-col items-start justify-start">
						{campaign !== null && (
							<div className="self-stretch flex flex-row items-start justify-between">
								<div className="leading-[1.25rem]">Paket</div>
								<div className="leading-[1.25rem]">
									{campaign?.price} {campaign?.currency === "USD" ? "$" : "₺"}
								</div>
							</div>
						)}
						{campaignDate !== null && (
							<div className="self-stretch flex flex-row items-start justify-between">
								<div className="leading-[1.25rem]">Tarih</div>
								<div className="leading-[1.25rem]">
									{campaignDate?.price}{" "}
									{campaignDate?.currency === "USD" ? "$" : "₺"}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="self-stretch flex flex-row items-start justify-between text-[0.88rem]">
				<div className="leading-[1.25rem] font-semibold">Toplam</div>
				<div className="leading-[1.25rem] font-semibold">
					{calculateCost()} {campaign?.currency === "USD" ? "$" : "₺"}
				</div>
			</div>
		</>
	);
}

export default PriceCard;
