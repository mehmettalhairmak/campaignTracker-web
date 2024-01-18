import React from "react";
import GenreeInputForm from "./genree-input-form";

function TrackGenreeForm() {
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
				<GenreeInputForm />
			</div>
		</>
	);
}

export default TrackGenreeForm;
