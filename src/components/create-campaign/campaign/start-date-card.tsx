import React from "react";

function StartDateCard() {
	return (
		<div className="self-stretch rounded-xl bg-base-white overflow-hidden flex flex-row items-start justify-start p-[1rem] border-[1px] border-solid border-gray-200">
			<div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
				<div className="self-stretch flex flex-row items-start justify-start">
					<div className="flex-1 relative leading-[1.25rem] font-medium">
						Varsayılan sıraya gir
					</div>
				</div>
				<div className="self-stretch flex flex-row items-end justify-between text-[1rem] text-gray-900">
					<div className="flex flex-col items-start justify-start gap-[0.13rem]">
						<div className="relative leading-[1.5rem] font-medium inline-block w-[38rem]">
							23 Nisan - 25 Nisan 2023
						</div>
						<div className="relative text-[0.88rem] leading-[1.25rem] text-gray-500 inline-block w-[38rem]">
							İtici bir güçle kampanyana başlangıç ver
						</div>
					</div>
					<div className="relative leading-[1.5rem] font-semibold text-darkslategray text-right">
						Ücretsiz
					</div>
				</div>
			</div>
		</div>
	);
}

export default StartDateCard;
