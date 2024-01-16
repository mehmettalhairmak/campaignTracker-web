import React from "react";

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
				<div className="w-[73rem] flex flex-row items-start justify-start gap-[1.25rem] text-gray-900">
					<input
						placeholder="Türkiye"
						className="rounded-lg bg-primary-25 box-border w-[34.13rem] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] border-[1px] border-solid border-gray-300 focus:border-primary-600 focus:outline-none"
					/>
					<input
						placeholder="Global"
						className="rounded-lg bg-base-white box-border w-[37.63rem] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.5rem] pr-[0.75rem] pl-[0.5rem] border-[1px] border-solid border-gray-300 focus:border-primary-600 focus:outline-none"
					/>
				</div>
			</div>
		</>
	);
}

export default RegionForm;
