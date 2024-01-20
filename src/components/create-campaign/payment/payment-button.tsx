"use client";

import axiosInstance from "@/api";
import { SpecialCampaignBody } from "@/models/SpecialCampaignModel";
import useCampaignStore from "@/zustand/campaign";
import useGenreeStore from "@/zustand/genree";
import useRegionStore from "@/zustand/region";
import useTrackStore from "@/zustand/track";
import { AxiosResponse } from "axios";
import React, { useEffect } from "react";

function PaymentButton() {
	const onClick = () => {
		alert("Ödeme sayfasına yönlendiriliyorsunuz.");
	};

	return (
		<div
			onClick={onClick}
			className="flex flex-col items-start justify-start text-center text-[0.88rem] text-base-white hover:cursor-pointer"
		>
			<div className="rounded-lg bg-primary-600 w-[22rem] overflow-hidden flex flex-row items-center justify-center py-[0.63rem] px-[1rem] box-border gap-[0.5rem]">
				<div className="leading-[1.25rem] font-semibold">Ödemeye geç</div>
			</div>
		</div>
	);
}

export default PaymentButton;
