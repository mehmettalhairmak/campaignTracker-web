"use client";

import axiosInstance from "@/api";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";
import useCampaignStore from "@/zustand/campaign";
import useGenreeStore from "@/zustand/genree";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select from "react-select";

function GenreeInputForm() {
	const { genres, setGenres } = useGenreeStore();
	const { storedCampaign, setStoredCampaign } = useCampaignStore();

	const pathname = usePathname();

	const params = useParams();

	const [initializeScreen, setInitializeScreen] = useState<boolean>(true);
	const [genresOptions, setGenresOptions] = useState<
		{ value: string; label: string }[]
	>([]);

	useEffect(() => {
		axiosInstance
			.get<SpecialCampaign>(`/get-campaign?id=${params.id as string}`)
			.then((response) => {
				setStoredCampaign(response.data);

				if (initializeScreen) {
					console.log(response.data.data);
					if (response.data.data.genres !== null) {
						if (response.data.data.genres.length !== 0) {
							setGenres(
								response.data.data.genres.map((genre) => {
									return {
										value: genre,
										label: genre,
									};
								})
							);
						} else {
							setGenres([]);
						}
					}
				}
			});

		axiosInstance.get("track-genres").then((response) => {
			setGenresOptions(
				response.data.map((genre: string) => {
					return {
						value: genre,
						label: genre,
					};
				})
			);
		});
	}, [pathname]);

	useEffect(() => {
		if (initializeScreen === false) {
			if (genres !== null) {
				if (genres.length !== 0) {
					const body = {
						id: storedCampaign?.data.id,
						campaign_data: {
							track_id: storedCampaign?.data.track_id,
							genres: genres.map((genre) => genre.value),
							region: storedCampaign?.data.region,
							package: storedCampaign?.data.package,
							start_date: storedCampaign?.data.start_date,
						},
					};
					axiosInstance
						.post("/update-campaign", body)
						.then((response) => {
							console.log(response.data);
							setStoredCampaign(response.data);
						})
						.catch((err) => {
							console.error("update campaign error on track-form", err);
						});
				}
			}
		}
	}, [genres, initializeScreen === false]);

	return (
		<div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-center text-[0.88rem] text-gray-400">
			<Select
				isMulti
				name="colors"
				options={genresOptions}
				onChange={(value) => {
					setInitializeScreen(false);
					setGenres([...value]);
				}}
				placeholder="Tür seç"
				className="self-stretch rounded-lg flex flex-row items-center justify-start py-[1rem]"
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						flex: 1,
					}),
				}}
			/>
		</div>
	);
}

export default GenreeInputForm;
