import React from "react";

function TrackTypeForm() {
	return (
		<>
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
					<input
						placeholder="Tür ara"
						className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] border-[1px] border-solid border-gray-300 focus:border-primary-600 focus:outline-none"
					/>
					<div className="rounded-md bg-base-white flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.25rem] text-gray-700 border-[1px] border-solid border-gray-300">
						<div className="tracking-[-0.02em] leading-[1.25rem]">Rock</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TrackTypeForm;
