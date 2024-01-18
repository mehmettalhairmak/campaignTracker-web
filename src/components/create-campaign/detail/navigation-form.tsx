"use client";

import React from "react";
import NavigationButton from "../navigation-button";
import useRegionStore from "@/zustand/region";
import useGenreeStore from "@/zustand/genree";

function NavigationForm() {
	const { region } = useRegionStore();
	const { genres } = useGenreeStore();

	return (
		<div className="flex flex-row justify-end mt-[2.6rem] gap-x-[0.63rem]">
			<NavigationButton
				title="Geri Dön"
				bgColor="bg-surface-surface-secondary"
			/>
			<NavigationButton
				title="Devam Et"
				bgColor="bg-primary-600"
				disabled={region === null || genres === null}
			/>
		</div>
	);
}

export default NavigationForm;
