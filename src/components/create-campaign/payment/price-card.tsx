"use client";

import React, { useEffect } from "react";
import useCampaignStore from "@/zustand/campaign";
import { useParams, usePathname } from "next/navigation";
import axiosInstance from "@/api";
import { CampaignDate } from "@/models/CampaignModel";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";
import { formatDate } from "@/helpers/dateFormatter";

function PriceCard() {
	const pathname = usePathname();
	const params = useParams();

	const [campaign, setCampaign] = React.useState<{
		id: string;
		name: string;
		click: number;
		price: number;
		description: string;
		currency: string;
	} | null>(null);
	const [campaignDate, setCampaignDate] = React.useState<
		CampaignDate | null | "NULL"
	>(null);

	useEffect(() => {
		axiosInstance
			.get<SpecialCampaign>(`get-campaign?id=${params.id as string}`)
			.then((response: any) => {
				axiosInstance.get(`get-packages`).then((responsePackages) => {
					const filteredData = responsePackages.data.filter(
						(item: any) => item.id === response.data.data.package
					);
					console.log("filtered data", filteredData[0]);
					setCampaign(filteredData[0]);
				});

				if (
					response.data.data.start_date === "NULL" ||
					response.data.data.start_date === null
				) {
					setCampaignDate("NULL");
				} else {
					axiosInstance
						.get<CampaignDate[]>(`get-dates`)
						.then((responseDates) => {
							console.log("campaign date data", responseDates.data);
							console.log("campaign date", response.data.data);

							const filteredData = responseDates.data.filter(
								(item) =>
									formatDate(item.date_range[0]) ===
									formatDate(response.data.data.start_date!)
							);
							console.log(filteredData[0]);
							setCampaignDate(filteredData[0]);
						});
				}
			});
	}, [pathname]);

	const calculateCost = (): number => {
		let campaignCost = 0;
		let campaignDateCost = 0;

		if (campaign !== null) {
			campaignCost = campaign.price;
		}

		if (campaignDate !== null && campaignDate !== "NULL") {
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
						{campaignDate !== null && campaignDate !== "NULL" ? (
							campaignDate.price > 0 ? (
								<div className="self-stretch flex flex-row items-start justify-between">
									<div className="leading-[1.25rem]">Tarih</div>
									<div className="leading-[1.25rem]">
										{campaignDate?.price}{" "}
										{campaignDate?.currency === "USD" ? "$" : "₺"}
									</div>
								</div>
							) : (
								<></>
							)
						) : (
							<></>
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
