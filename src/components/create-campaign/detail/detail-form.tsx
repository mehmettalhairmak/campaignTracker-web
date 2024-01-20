"use client";

import React, { useEffect, useState } from "react";
import useRegionStore from "@/zustand/region";
import { useParams, usePathname } from "next/navigation";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";
import axiosInstance from "@/api";
import Select from "react-select";
import useGenreeStore from "@/zustand/genree";

function DetailForm() {
	const { region, setRegion } = useRegionStore();
	const { genres, setGenres } = useGenreeStore();

	const pathname = usePathname();

	const params = useParams();

	const [initializeScreen, setInitializeScreen] = useState<boolean>(true);
	const [storedCampaign, setStoredCampaign] = useState<SpecialCampaign>();
	const [trCheckboxStatus, setTrCheckboxStatus] = useState<boolean>(false);
	const [usCheckboxStatus, setUsCheckboxStatus] = useState<boolean>(false);

	const [genresOptions, setGenresOptions] = useState<
		{ value: string; label: string }[]
	>([]);

	useEffect(() => {
		axiosInstance
			.get<SpecialCampaign>(`/get-campaign?id=${params.id as string}`)
			.then((response) => {
				setStoredCampaign(response.data);
				if (initializeScreen) {
					if (response.data.data.region === "TRY") {
						setRegion("TRY");
						setTrCheckboxStatus(true);
					} else if (response.data.data.region === "USD") {
						setRegion("USD");
						setUsCheckboxStatus(true);
					} else {
						setRegion(null);
						setTrCheckboxStatus(false);
						setUsCheckboxStatus(false);
					}

					console.log("response.data.data.genres", response.data.data.genres);
					if (response.data.data.genres !== null) {
						if (response.data.data.genres.length > 0) {
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
					} else {
						setGenres([]);
					}
				}
			})
			.catch((err) => {
				console.error("get stored campaign error on track-form", err);
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
		<>
			<div className="flex-1 rounded-3xl bg-base-white box-border w-[75.88rem] overflow-hidden flex flex-col items-start justify-start p-[1.5rem] gap-[1.5rem] border-[1px] border-solid border-surface-surface-secondary">
				<div className="self-stretch flex flex-col items-start justify-start gap-[0.13rem]">
					<div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem]">
						Bölgeni seç
					</div>
					<div className="relative text-[0.88rem] tracking-[-0.02em] leading-[1.25rem] text-gray-500">
						Kampanyayı yayınlamak istediğin bölgeyi seç.
					</div>
				</div>
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
			</div>
			<div className="rounded-3xl bg-base-white box-border w-[76rem] flex flex-col items-start justify-start p-[1.5rem] mt-[2.75rem] gap-[1.5rem] border-[1px] border-solid border-surface-surface-secondary">
				<div className="self-stretch flex flex-col items-start justify-start gap-[0.13rem]">
					<div className="self-stretch tracking-[-0.02em] leading-[1.5rem]">
						Parçanın türünü seç
					</div>
					<div className="text-[0.88rem] tracking-[-0.02em] leading-[1.25rem] text-gray-500">
						Seçtiğin parçanın türlerini belirle.
					</div>
				</div>
				<div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-center text-[0.88rem] text-gray-400">
					<Select
						isMulti
						name="colors"
						options={genresOptions}
						value={genres}
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
			</div>
		</>
	);
}

export default DetailForm;
