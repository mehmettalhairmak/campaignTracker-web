import { CampaignDate } from "@/models/CampaignModel";
import React, { InputHTMLAttributes } from "react";

function CampaignDateCard({
	campaignDate,
	checked,
	onChange,
	defaultChecked,
}: {
	campaignDate: CampaignDate;
	checked: boolean;
	defaultChecked: boolean;
	onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
}) {
	const formatDate = (dateInput: string) => {
		const date = new Date(dateInput);

		// Ay isimleri dizisi
		var monthNames = [
			"Ocak",
			"Şubat",
			"Mart",
			"Nisan",
			"Mayıs",
			"Haziran",
			"Temmuz",
			"Ağustos",
			"Eylül",
			"Ekim",
			"Kasım",
			"Aralık",
		];

		// Tarih bilgilerini alıp formatlama
		var day = date.getDate();
		var month = monthNames[date.getMonth()];

		// Sonuç string'i oluşturma
		var formattedDate = day + " " + month;

		return formattedDate;
	};

	//TODO: ""
	return (
		<>
			<div className="self-stretch flex flex-col items-center justify-start gap-[0.75rem] text-primary-600">
				<input
					onChange={onChange}
					type="checkbox"
					defaultChecked={defaultChecked}
					id={campaignDate.id}
					className={`hidden peer/${campaignDate.id}`}
				/>
				<label
					htmlFor={campaignDate.id}
					className={`self-stretch rounded-xl bg-base-white overflow-hidden flex flex-row items-start justify-start p-[1rem] border-[1px] border-solid ${
						!checked ? "border-surface-surface-secondary" : "border-primary-600"
					}`}
				>
					<div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
						<div className="self-stretch flex flex-row items-start justify-start">
							<div className="flex-1 relative leading-[1.25rem] font-medium">
								{campaignDate.name}
							</div>
						</div>
						<div className="self-stretch flex flex-row items-end justify-between text-[1rem] text-gray-900">
							<div className="flex flex-col items-start justify-start gap-[0.13rem]">
								<div className="relative leading-[1.5rem] font-medium inline-block w-[38rem] text-black">
									{`${formatDate(campaignDate.date_range[0])} - ${formatDate(
										campaignDate.date_range[1]
									)}`}
								</div>
								<div className="relative text-[0.88rem] leading-[1.25rem] text-gray-500 inline-block w-[38rem]">
									{campaignDate.description}
								</div>
							</div>
							<div className="relative leading-[1.5rem] font-semibold text-darkslategray text-right">
								{campaignDate.price > 0 ? (
									<>
										{campaignDate.currency === "TRY" ? "₺" : "$"}
										{campaignDate.price}
									</>
								) : (
									"Ücretsiz"
								)}
							</div>
						</div>
					</div>
				</label>
			</div>
		</>
	);
}

export default CampaignDateCard;
