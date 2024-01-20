"use client";

import axiosInstance from "@/api";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";
import useRegionStore from "@/zustand/region";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function RegionCheckboxForm() {
	const { region, setRegion } = useRegionStore();

	const pathname = usePathname();

	const params = useParams();

	const [initializeScreen, setInitializeScreen] = useState<boolean>(true);
	const [storedCampaign, setStoredCampaign] = useState<SpecialCampaign>();
	const [trCheckboxStatus, setTrCheckboxStatus] = useState<boolean>(false);
	const [usCheckboxStatus, setUsCheckboxStatus] = useState<boolean>(false);

	useEffect(() => {
		axiosInstance
			.get<SpecialCampaign>(`/get-campaign?id=${params.id as string}`)
			.then((response) => {
				setStoredCampaign(response.data);
				if (initializeScreen) {
					if (response.data.data.region === "TRY") {
						setTrCheckboxStatus(true);
					} else if (response.data.data.region === "USD") {
						setUsCheckboxStatus(true);
					} else {
						setTrCheckboxStatus(false);
						setUsCheckboxStatus(false);
					}
				}
			})
			.catch((err) => {
				console.error("get stored campaign error on track-form", err);
			});
	}, [pathname]);

	useEffect(() => {
		if (initializeScreen === false) {
			if (trCheckboxStatus) {
				setRegion("TRY");
			} else if (usCheckboxStatus) {
				setRegion("USD");
			} else {
				setRegion(null);
			}
		}
	}, [trCheckboxStatus, usCheckboxStatus, initializeScreen === false]);

	useEffect(() => {
		if (initializeScreen === false) {
			if (region !== null) {
				const body = {
					id: storedCampaign?.data.id,
					campaign_data: {
						track_id: storedCampaign?.data.track_id,
						genres: storedCampaign?.data.genres,
						region: region,
						package: storedCampaign?.data.package,
						start_date: storedCampaign?.data.start_date,
					},
				};

				console.log(body);

				console.log("region", region);

				axiosInstance.post("/update-campaign", body).then((response) => {
					console.log("updated campaign", response.data);
				});
			}
		}
	}, [region]);

	const trCheckboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInitializeScreen(false);
		setTrCheckboxStatus(e.target.checked);
		if (e.target.checked) {
			setUsCheckboxStatus(false);
		}
	};

	const usCheckboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInitializeScreen(false);
		setUsCheckboxStatus(e.target.checked);
		if (e.target.checked) {
			setTrCheckboxStatus(false);
		}
	};

	return (
		<div className="flex-1 w-[73rem] flex flex-row items-start justify-start gap-[1.25rem] text-gray-900">
			<div className="flex-1 flex flex-row">
				<input
					id="checkbox_tr"
					type="checkbox"
					checked={trCheckboxStatus}
					onChange={trCheckboxOnChange}
					className="hidden peer/checkbox_tr"
				/>
				<label
					htmlFor="checkbox_tr"
					className="flex-1 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.5rem] pr-[0.75rem] pl-[0.5rem] border-[1px] border-solid border-gray-300 peer-checked/checkbox_tr:border-primary-600"
				>
					Türkiye
				</label>
			</div>
			<div className="flex-1 flex flex-row">
				<input
					id="checkbox_us"
					type="checkbox"
					checked={usCheckboxStatus}
					onChange={usCheckboxOnChange}
					className="hidden peer/checkbox_us"
				/>
				<label
					htmlFor="checkbox_us"
					className="flex-1 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.5rem] pr-[0.75rem] pl-[0.5rem] border-[1px] border-solid border-gray-300 peer-checked/checkbox_us:border-primary-600"
				>
					Global
				</label>
			</div>
		</div>
	);
}

export default RegionCheckboxForm;
