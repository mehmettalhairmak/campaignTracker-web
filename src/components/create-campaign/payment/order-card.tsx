import React from "react";

function OrderCard() {
	return (
		<div className="self-stretch rounded-2xl flex flex-row items-start justify-start p-[1rem] gap-[0.75rem] border-[1px] border-solid border-gray-200">
			<div className="rounded-lg w-[3.06rem] overflow-hidden shrink-0 flex flex-col items-center justify-center p-[0.5rem] box-border bg-[url('/frame-35100@3x.png')] bg-cover bg-no-repeat bg-[top]"></div>
			<div className="flex flex-col items-start justify-start gap-[0.25rem]">
				<div className="tracking-[-0.02em] leading-[1.5rem] font-semibold">
					kaygılarım kutsal kitap gibi
				</div>
				<div className="text-[0.88rem] leading-[1.25rem] font-medium text-gray-500">
					kurkafanda
				</div>
			</div>
		</div>
	);
}

export default OrderCard;