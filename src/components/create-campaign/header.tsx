import React from "react";

function CreateCampaignHeader() {
	return (
		<div className="w-full h-[6.87rem] flex flex-col">
			<div className="flex flex-1 flex-row">
				<div className="flex w-1/3 items-center justify-center gap-[0.44rem] text-center text-[1.25rem]">
					<div className="tracking-[-0.04em]">Kampanya Oluştur</div>
				</div>
				<div className="flex w-1/3 flex-row items-center justify-center gap-[1rem] text-gray-400">
					<div className="tracking-[-0.04em] leading-[1.5rem]">Parçan</div>
					<div className="rounded-2xl bg-surface-surface-secondary w-[2rem] h-[0.25rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
						<div className="self-stretch rounded-2xl bg-primary-600 w-[0.5rem] overflow-hidden shrink-0" />
					</div>
					<div className="tracking-[-0.04em] leading-[1.5rem]">Detaylar</div>
					<div className="rounded-2xl bg-surface-surface-secondary w-[2rem] h-[0.25rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
						<div className="self-stretch bg-primary-600 w-[0rem] overflow-hidden shrink-0" />
					</div>
					<div className="tracking-[-0.04em] leading-[1.5rem]">Kampanyan</div>
					<div className="rounded-2xl bg-surface-surface-secondary w-[2rem] h-[0.25rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
						<div className="self-stretch bg-primary-600 w-[0rem] overflow-hidden shrink-0" />
					</div>
					<div className="tracking-[-0.04em] leading-[1.5rem]">Ödeme</div>
				</div>
				<div className="w-1/3" />
			</div>
			<div className="w-full h-[0.06rem] border-t-[1px] border-solid border-whitesmoke" />
		</div>
	);
}

export default CreateCampaignHeader;
