import React from "react";

function CampaignCard() {
	return (
		<div className="self-stretch flex flex-col items-start justify-start text-[0.88rem] text-primary-600">
			<div className="self-stretch flex flex-col items-center justify-start gap-[0.75rem]">
				<div className="self-stretch rounded-xl bg-base-white overflow-hidden flex flex-row items-start justify-start p-[1rem] border-[1px] border-solid border-surface-surface-secondary">
					<div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
						<div className="self-stretch flex flex-row items-start justify-start">
							<div className="flex-1 relative tracking-[-0.02em] leading-[1.25rem]">
								Listelere Oyna
							</div>
						</div>
						<div className="self-stretch flex flex-row items-end justify-between text-[1rem] text-gray-900">
							<div className="flex flex-col items-start justify-start">
								<div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[38rem]">
									3.000 tıklanma
								</div>
								<div className="relative text-[0.88rem] tracking-[-0.02em] leading-[1.25rem] text-gray-500 inline-block w-[38rem]">
									İtici bir güçle kampanyana başlangıç ver
								</div>
							</div>
							<div className="relative text-[0.88rem] tracking-[-0.02em] leading-[1.25rem] text-darkslategray text-right">
								₺1147
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CampaignCard;
