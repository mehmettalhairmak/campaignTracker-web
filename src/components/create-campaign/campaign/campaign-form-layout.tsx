"use client";

import React, { useEffect, useState } from "react";
import CampaignCard from "./campaign-card";
import CampaignDateCard from "./campaign-date-card";
import axiosInstance from "@/api";
import useRegionStore from "@/zustand/region";
import { Campaign, CampaignDate } from "@/models/CampaignModel";
import useCampaignStore from "@/zustand/campaign";

function CampaignFormLayout() {
	const { region } = useRegionStore();
	const { setCampaign, section, setCampaignDate } = useCampaignStore();

	const [totalCampaigns, setTotalCampaigns] = useState<Campaign[]>([]);
	const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
		null
	);

	const [totalCampaignsDate, setTotalCampaignsDate] = useState<CampaignDate[]>(
		[]
	);
	const [selectedCampaignDate, setSelectedCampaignDate] =
		useState<CampaignDate | null>(null);

	useEffect(() => {
		axiosInstance.get<Campaign[]>("get-packages").then((response) => {
			const filteredData = response.data.filter(
				(item) => item.currency === region
			);
			setTotalCampaigns(filteredData);
		});

		axiosInstance.get<CampaignDate[]>("get-dates").then((response) => {
			const filteredData = response.data.filter(
				(item) => item.currency === region
			);

			setTotalCampaignsDate(filteredData);
		});

		return () => {
			setTotalCampaigns([]);
			setSelectedCampaign(null);
		};
	}, []);

	useEffect(() => {
		if (totalCampaigns.length > 0) {
			const highestPricedCampaign = totalCampaigns.reduce((prev, current) => {
				return prev.price > current.price ? prev : current;
			});
			setSelectedCampaign(highestPricedCampaign);
		}
	}, [totalCampaigns]);

	useEffect(() => {
		if (totalCampaignsDate.length > 0) {
			const highestPricedCampaignDate = totalCampaignsDate.reduce(
				(prev, current) => {
					return prev.price > current.price ? prev : current;
				}
			);
			setSelectedCampaignDate(highestPricedCampaignDate);
		}
	}, [totalCampaignsDate]);

	useEffect(() => {
		if (selectedCampaign !== null) {
			setCampaign(selectedCampaign);
		} else {
			setCampaign(null);
		}
	}, [selectedCampaign]);

	useEffect(() => {
		if (selectedCampaignDate !== null) {
			setCampaignDate(selectedCampaignDate);
		} else {
			setCampaignDate(null);
		}
	}, [selectedCampaignDate]);

	if (section === "campaign_select") {
		return (
			<div className="rounded-3xl bg-base-white box-border w-[76rem] overflow-hidden flex flex-col items-start justify-start p-[1.5rem] gap-[1.5rem] border-[1px] border-solid border-surface-surface-secondary">
				<div className="w-[47.5rem] flex flex-col items-start justify-start">
					<div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem]">
						Senin için uygun olan paketi seç
					</div>
				</div>
				{totalCampaigns.map((campaign) => {
					return (
						<CampaignCard
							key={campaign.id}
							defaultChecked={
								selectedCampaign !== null && selectedCampaign.id === campaign.id
							}
							campaign={campaign}
							checked={
								selectedCampaign !== null && selectedCampaign.id === campaign.id
							}
							onChange={() => setSelectedCampaign(campaign)}
						/>
					);
				})}
			</div>
		);
	} else if (section === "campaign_date") {
		return (
			<div className="rounded-3xl bg-base-white box-border w-[76rem] overflow-hidden flex flex-col items-start justify-start p-[1.5rem] gap-[1.5rem] border-[1px] border-solid border-surface-surface-secondary">
				<div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
					<div className="relative leading-[1.25rem] font-medium">
						Güzel seçim! Şimdi kampanya görselini belirle
					</div>
					<div className="self-stretch relative text-[1.25rem] tracking-[-0.02em] leading-[1.88rem] font-semibold text-gray1">
						Tahmini başlangıç tarihini seç
					</div>
				</div>
				{totalCampaignsDate.map((campaignDate) => {
					return (
						<CampaignDateCard
							key={campaignDate.id}
							defaultChecked={
								selectedCampaignDate !== null &&
								selectedCampaignDate.id === campaignDate.id
							}
							campaignDate={campaignDate}
							checked={
								selectedCampaignDate !== null &&
								selectedCampaignDate.id === campaignDate.id
							}
							onChange={() => setSelectedCampaignDate(campaignDate)}
						/>
					);
				})}
			</div>
		);
	}
}

export default CampaignFormLayout;
