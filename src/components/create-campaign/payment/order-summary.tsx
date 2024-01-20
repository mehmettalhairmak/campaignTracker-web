"use client";

import axiosInstance from "@/api";
import { formatDate } from "@/helpers/dateFormatter";
import { CampaignDate } from "@/models/CampaignModel";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";
import useCampaignStore from "@/zustand/campaign";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function OrderSummary() {
	const router = useRouter();

	const pathname = usePathname();
	const params = useParams();

	const { setSection, setStoredCampaign } = useCampaignStore();
	const [campaign, setCampaign] = React.useState<{
		id: string;
		name: string;
		click: number;
		price: number;
		description: string;
		currency: string;
	} | null>(null);
	const [campaignDate, setCampaignDate] = React.useState<CampaignDate | null>();

	useEffect(() => {
		axiosInstance
			.get<SpecialCampaign>(`get-campaign?id=${params.id as string}`)
			.then((response) => {
				setStoredCampaign(response.data);

				axiosInstance.get("get-packages").then((responsePackages) => {
					const filteredData = responsePackages.data.filter(
						(item: any) => item.id === response.data.data.package
					);
					setCampaign(filteredData[0]);
				});

				if (
					response.data.data.start_date !== "NULL" &&
					response.data.data.start_date !== null
				) {
					axiosInstance
						.get<CampaignDate[]>("get-dates")
						.then((responseDates): void => {
							const filteredData = responseDates.data.filter(
								(item) =>
									formatDate(item.date_range[0]) ===
									formatDate(response.data.data.start_date!)
							);
							console.log(filteredData[0]);
							setCampaignDate(filteredData[0]);
						});
				}
			})
			.catch((err) => {
				console.error("get stored campaign error on track-form", err);
			});
	}, [pathname]);

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
										router.push(`/create-campaign/${params.id}/campaign`);
									}}
									className="leading-[1.25rem] font-semibold hover: cursor-pointer"
								>
									Düzenle
								</div>
							</div>
						</div>
					</div>
					{campaignDate !== null && campaignDate !== undefined && (
						<div className="self-stretch bg-base-white flex flex-row items-end justify-start gap-[0.75rem]">
							<div className="flex-1 flex flex-col items-start justify-start">
								<div className="flex flex-col items-start justify-start gap-[0.13rem]">
									<div className="leading-[1.25rem] font-medium">
										Başlangıç tarihi
									</div>
									<div className="text-[1rem] leading-[1.5rem] font-medium text-gray-900">
										{formatDate(campaignDate?.date_range[0]) +
											"-" +
											formatDate(campaignDate?.date_range[1])}
									</div>
								</div>
							</div>
							<div className="rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[0.5rem] text-center">
								<div
									onClick={() => {
										setSection("campaign_date");
										router.push(`/create-campaign/${params.id}/campaign`);
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
