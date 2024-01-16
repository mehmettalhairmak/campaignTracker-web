import CreateCampaignHeader from "@/components/create-campaign/header";
import OrderCard from "@/components/create-campaign/payment/order-card";
import OrderSummary from "@/components/create-campaign/payment/order-summary";
import PaymentButton from "@/components/create-campaign/payment/payment-button";
import PriceCard from "@/components/create-campaign/payment/price-card";
import React from "react";

function Payment() {
	return (
		<div className="flex flex-1 bg-base-white w-full h-full flex-col text-left text-[1rem] text-gray1 font-alata">
			{/* Header */}
			<CreateCampaignHeader currentPage="Ödeme" />
			<section className="flex flex-col items-center mt-[5.31rem] mx-[9.75rem]">
				<div className="w-full flex flex-col items-start justify-start gap-[1.5rem] text-left text-[1.5rem] text-gray1 font-text-s-regular">
					<div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.5rem] border-b-[1px] border-solid border-gray-200">
						<div className="tracking-[-0.02em] leading-[2rem] font-semibold">
							Onayla ve ödemeye geç
						</div>
					</div>
					<div className="self-stretch flex flex-row items-start justify-start gap-[6rem] text-[0.88rem] text-gray-700">
						<OrderSummary />
						<div className="rounded-3xl box-border w-[25rem] h-[24.63rem] overflow-hidden shrink-0 flex flex-col items-center justify-start text-gray-500 border-[1px] border-solid border-gray-200">
							<div className="self-stretch flex flex-col items-start justify-start py-[1rem] px-[1.5rem]">
								<div className="leading-[1.25rem] font-medium">
									Kampanya özeti
								</div>
							</div>
							<div className="self-stretch box-border h-[25.81rem] flex flex-col items-start justify-start p-[1.5rem] gap-[1.5rem] text-[1rem] text-gray-900 border-t-[1px] border-solid border-gray-200">
								<OrderCard />
								<PriceCard />
								<PaymentButton />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Payment;
