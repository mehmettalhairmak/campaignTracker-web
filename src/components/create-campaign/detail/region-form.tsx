import React from "react";
import RegionCheckboxForm from "./region-checkbox-form";

function RegionForm() {
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
				<RegionCheckboxForm />
			</div>
		</>
	);
}

export default RegionForm;
