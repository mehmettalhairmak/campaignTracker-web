import { Campaign } from "@/models/CampaignModel";
import React, { InputHTMLAttributes } from "react";

function CampaignCard({
	campaign,
	checked,
	onChange,
	defaultChecked,
}: {
	campaign: Campaign;
	checked: boolean;
	defaultChecked: boolean;
	onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
}) {
	return (
		<>
			<div className="self-stretch flex flex-col items-start justify-start text-[0.88rem] text-primary-600">
				<div className="self-stretch flex flex-col items-center justify-start gap-[0.75rem]">
					<input
						onChange={onChange}
						type="checkbox"
						defaultChecked={defaultChecked}
						id={campaign.id}
						className={`hidden peer/${campaign.id}`}
					/>
					<label
						htmlFor={campaign.id}
						className={`self-stretch rounded-xl bg-base-white overflow-hidden flex flex-row items-start justify-start p-[1rem] border-[1px] border-solid ${
							!checked
								? "border-surface-surface-secondary"
								: "border-primary-600"
						}`}
					>
						<div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
							<div className="self-stretch flex flex-row items-start justify-start">
								<div className="flex-1 relative tracking-[-0.02em] leading-[1.25rem]">
									{campaign.name}
								</div>
							</div>
							<div className="self-stretch flex flex-row items-end justify-between text-[1rem] text-gray-900">
								<div className="flex flex-col items-start justify-start">
									<div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[38rem]">
										{campaign.click} tıklanma
									</div>
									<div className="relative text-[0.88rem] tracking-[-0.02em] leading-[1.25rem] text-gray-500 inline-block w-[38rem]">
										{campaign.description}
									</div>
								</div>
								<div className="relative text-[0.88rem] tracking-[-0.02em] leading-[1.25rem] text-darkslategray text-right">
									{campaign.currency === "TRY" ? "₺" : "$"}
									{campaign.price}
								</div>
							</div>
						</div>
					</label>
				</div>
			</div>
		</>
	);
}

export default CampaignCard;
