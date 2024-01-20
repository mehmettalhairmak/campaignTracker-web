"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import axiosInstance from "@/api";
import { TrackItem } from "@/models/TrackModel";
import useTrackStore from "@/zustand/track";
import { useParams, usePathname } from "next/navigation";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";

function TrackForm() {
	const { track, setTrack } = useTrackStore();

	const pathname = usePathname();

	const params = useParams();

	const [initializeScreen, setInitializeScreen] = useState<boolean>(true);
	const [storedCampaign, setStoredCampaign] = useState<SpecialCampaign>();
	const [trackInput, setTrackInput] = useState<string>("");
	const [trackOptions, setTrackOptions] = useState<
		{ value: string; label: string }[]
	>([]);

	useEffect(() => {
		axiosInstance
			.get<SpecialCampaign>(`/get-campaign?id=${params.id as string}`)
			.then((response) => {
				setStoredCampaign(response.data);

				if (initializeScreen) {
					if (response.data.data.track_id === "NULL") {
						setTrack("NULL");
					} else {
						if (response.data.data.track_id !== "") {
							axiosInstance
								.get(`/get-on-spotify?id=${response.data.data.track_id}`)
								.then((response) => {
									setTrack({
										value: response.data.id,
										label: response.data.name,
									});
								});
						}
					}
				}
			})
			.catch((err) => {
				console.error("get stored campaign error on track-form", err);
			});
	}, [params.id, pathname]);

	useEffect(() => {
		if (trackInput !== "") {
			axiosInstance
				.get(`search-on-spotify?q=${trackInput}`)
				.then((response) => {
					const tracks = response.data.tracks.items.map((track: TrackItem) => {
						return {
							value: track.id,
							label: track.name,
						};
					});
					setTrackOptions(tracks);
				});
		}
	}, [trackInput]);

	useEffect(() => {
		if (initializeScreen === false) {
			if (track !== null) {
				const body = {
					id: storedCampaign?.data.id,
					campaign_data: {
						track_id: track !== "NULL" ? track.value : "NULL",
						genres: storedCampaign?.data.genres,
						region: storedCampaign?.data.region,
						package: storedCampaign?.data.package,
						start_date: storedCampaign?.data.start_date,
					},
				};

				console.log(body);

				console.log("track", track);

				axiosInstance.post("/update-campaign", body).then((response) => {
					console.log("updated campaign", response.data);
				});
			}
		}
	}, [setTrack, track, initializeScreen === false]);

	const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInitializeScreen(false);
		if (e.target.checked) {
			setTrack("NULL");
		} else {
			setTrack(null);
		}
	};

	return (
		<div className="rounded-3xl bg-base-white box-border w-[76rem] p-[1.5rem] gap-[1.5rem] border-[1px] border-solid border-surface-surface-secondary">
			<div className="self-stretch flex flex-col items-start justify-start gap-[0.13rem]">
				<div className="self-stretch tracking-[-0.02em] leading-[1.5rem]">
					Parçanı seç
				</div>
				<div className="text-[0.88rem] tracking-[-0.02em] leading-[1.25rem] text-gray-500">
					Kampanyayı oluşturmak istediğin parçayı seç.
				</div>
			</div>
			<div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-center text-[0.88rem] text-gray-400">
				<Select
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							flex: 1,
						}),
					}}
					value={track}
					isDisabled={track === "NULL"}
					onChange={(value) => {
						setInitializeScreen(false);
						setTrack(value);
					}}
					options={trackOptions}
					inputValue={trackInput}
					onInputChange={(value) => setTrackInput(value)}
					placeholder="Spotify'da ara"
					className="self-stretch rounded-lg flex flex-row items-center justify-start py-[1rem]"
				/>
				<div className="flex flex-row items-center justify-start gap-[0.5rem] text-left text-gray-700">
					<input
						type="checkbox"
						checked={track === "NULL"}
						onChange={checkboxOnChange}
						className="rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300"
					/>
					<div className="tracking-[-0.02em] leading-[1.25rem]">
						Parçam yayında değil
					</div>
				</div>
			</div>
		</div>
	);
}

export default TrackForm;
