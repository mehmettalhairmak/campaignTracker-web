import React from "react";

function PriceCard() {
	return (
		<>
			<div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] gap-[1rem] border-b-[1px] border-solid border-gray-200">
				<div className="self-stretch tracking-[-0.02em] leading-[1.5rem] font-semibold">
					Ödeme detayları
				</div>
				<div className="self-stretch flex flex-col items-start justify-start text-[0.88rem]">
					<div className="self-stretch flex flex-col items-start justify-start">
						<div className="self-stretch flex flex-row items-start justify-between">
							<div className="leading-[1.25rem]">Paket</div>
							<div className="leading-[1.25rem]">2399 ₺</div>
						</div>
					</div>
				</div>
			</div>
			<div className="self-stretch flex flex-row items-start justify-between text-[0.88rem]">
				<div className="leading-[1.25rem] font-semibold">Toplam</div>
				<div className="leading-[1.25rem] font-semibold">2399 ₺</div>
			</div>
		</>
	);
}

export default PriceCard;
