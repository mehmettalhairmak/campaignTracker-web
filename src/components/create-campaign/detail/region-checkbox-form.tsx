"use client";

import useRegionStore from "@/zustand/region";
import React, { useEffect, useState } from "react";

function RegionCheckboxForm() {
	const { setRegion } = useRegionStore();

	const [trCheckboxStatus, setTrCheckboxStatus] = useState<boolean>(false);
	const [usCheckboxStatus, setUsCheckboxStatus] = useState<boolean>(false);

	useEffect(() => {
		if (trCheckboxStatus) {
			setRegion("TRY");
		} else if (usCheckboxStatus) {
			setRegion("USD");
		} else {
			setRegion(null);
		}
	}, [trCheckboxStatus, usCheckboxStatus]);

	const trCheckboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTrCheckboxStatus(e.target.checked);

		if (e.target.checked) {
			setUsCheckboxStatus(false);
		}
	};

	const usCheckboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsCheckboxStatus(e.target.checked);

		if (e.target.checked) {
			setTrCheckboxStatus(false);
		}
	};

	return (
		<div className="flex-1 w-[73rem] flex flex-row items-start justify-start gap-[1.25rem] text-gray-900">
			<div className="flex-1 flex flex-row">
				<input
					id="checkbox_tr"
					type="checkbox"
					checked={trCheckboxStatus}
					onChange={trCheckboxOnChange}
					className="hidden peer/checkbox_tr"
				/>
				<label
					htmlFor="checkbox_tr"
					className="flex-1 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.5rem] pr-[0.75rem] pl-[0.5rem] border-[1px] border-solid border-gray-300 peer-checked/checkbox_tr:border-primary-600"
				>
					Türkiye
				</label>
			</div>
			<div className="flex-1 flex flex-row">
				<input
					id="checkbox_us"
					type="checkbox"
					checked={usCheckboxStatus}
					onChange={usCheckboxOnChange}
					className="hidden peer/checkbox_us"
				/>
				<label
					htmlFor="checkbox_us"
					className="flex-1 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.5rem] pr-[0.75rem] pl-[0.5rem] border-[1px] border-solid border-gray-300 peer-checked/checkbox_us:border-primary-600"
				>
					Global
				</label>
			</div>
		</div>
	);
}

export default RegionCheckboxForm;
