"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import axiosInstance from "@/api";
import { TrackItem, Tracks } from "@/models/TrackModel";
import useTrackStore from "@/zustand/track";
import { usePathname } from "next/navigation";

function TrackForm() {
	const { track, setTrack } = useTrackStore();

	const pathname = usePathname();

	const [trackInput, setTrackInput] = useState<string | null>("");
	const [trackResults, setTrackResults] = useState<TrackItem[] | null>(null);
	const [checkboxStatus, setCheckboxStatus] = useState<boolean>(false);
	const [trackOptions, setTrackOptions] = useState<
		{ value: string; label: string }[]
	>([]);
	const [trackValue, setTrackValue] = useState<{
		value: string;
		label: string;
	} | null>(null);

	//* Set Track on Page Focus
	useEffect(() => {
		if (track !== null && track !== "NULL") {
			setTrackValue({
				value: track.id,
				label: track.name,
			});
		} else if (track === "NULL") {
			setCheckboxStatus(true);
		}
	}, [pathname]);

	//* Search Track on Spotify Handler
	useEffect(() => {
		if (trackInput === null || trackInput === "") {
			setTrackOptions([]);
		} else {
			axiosInstance
				.get<Tracks>(`search-on-spotify?q=${trackInput}`)
				.then((response) => {
					const trackItem = response.data.tracks.items.map(
						(item: TrackItem) => {
							return {
								value: item.id,
								label: item.name,
							};
						}
					);
					setTrackResults(response.data.tracks.items);
					setTrackOptions([...trackItem]);
				})
				.catch((error) => {
					console.error("Search on spotify error: ", error);
				});
		}
	}, [trackInput]);

	//* Get Track on Spotify Handler
	useEffect(() => {
		if (trackValue !== null && trackResults !== null) {
			const currentTrack = trackResults.find(
				(track) => track.id === trackValue.value
			);
			setTrack(currentTrack!);
		} else {
			setTrack("NULL");
		}
	}, [trackValue]);

	useEffect(() => {
		if (checkboxStatus) {
			setTrack("NULL");
		} else if (checkboxStatus === false && trackValue === null) {
			setTrack(null);
		}
	}, [checkboxStatus]);

	//* Checkbox Handler
	const checkboxOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCheckboxStatus(event.target.checked);
		event.target.checked && setTrackInput(null);
		event.target.checked && setTrackValue(null);
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
					options={trackOptions}
					value={trackValue}
					inputValue={trackInput === null ? "" : trackInput}
					isDisabled={checkboxStatus}
					onChange={(value) => setTrackValue(value)}
					onInputChange={(value) => setTrackInput(value)}
					placeholder="Spotify'da ara"
					className="self-stretch rounded-lg flex flex-row items-center justify-start py-[1rem]"
				/>
				<div className="flex flex-row items-center justify-start gap-[0.5rem] text-left text-gray-700">
					<input
						type="checkbox"
						checked={checkboxStatus}
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
