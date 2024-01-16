import React from "react";

function PaymentButton() {
	return (
		<div className="flex flex-col items-start justify-start text-center text-[0.88rem] text-base-white">
			<div className="rounded-lg bg-primary-600 w-[22rem] overflow-hidden flex flex-row items-center justify-center py-[0.63rem] px-[1rem] box-border gap-[0.5rem]">
				<div className="leading-[1.25rem] font-semibold">Ödemeye geç</div>
			</div>
		</div>
	);
}

export default PaymentButton;
