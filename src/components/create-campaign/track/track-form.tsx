"use client";

import React, { useState } from "react";

function TrackForm() {
	const [trackInput, setTrackInput] = useState<string | null>("");
	const [checkboxStatus, setCheckboxStatus] = useState<boolean>(false);

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
			<div className="self-stretch h-[4.25rem] flex flex-col items-start justify-start gap-[0.75rem] text-center text-[0.88rem] text-gray-400">
				<div className="self-stretch h-[2.25rem] flex flex-col items-start justify-start">
					<input
						value={checkboxStatus || trackInput === null ? "" : trackInput}
						disabled={checkboxStatus}
						onChange={(event) => setTrackInput(event.target.value)}
						placeholder="Spotify’da ara"
						className="self-stretch rounded-lg flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] border-[1px] border-solid border-gray-300"
					/>
				</div>
				<div className="w-[21.5rem] flex flex-row items-center justify-start gap-[0.5rem] text-left text-gray-700">
					<input
						type="checkbox"
						checked={checkboxStatus}
						onChange={(event) => {
							setCheckboxStatus(event.target.checked);
							checkboxStatus && setTrackInput(null);
						}}
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
