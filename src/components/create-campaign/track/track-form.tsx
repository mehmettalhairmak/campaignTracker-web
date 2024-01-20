"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import axiosInstance from "@/api";
import { TrackItem, Tracks } from "@/models/TrackModel";
import useTrackStore from "@/zustand/track";
import { useParams, usePathname } from "next/navigation";
import {
	SpecialCampaign,
	SpecialCampaignBody,
} from "@/models/SpecialCampaignModel";

function TrackForm() {
	const { track, setTrack } = useTrackStore();

	const pathname = usePathname();

	const params = useParams();

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
