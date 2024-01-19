import React from "react";
import NavigationButton from "../navigation-button";
import useTrackStore from "@/zustand/track";
import { usePathname } from "next/navigation";

function NavigationForm({ id }: { id: string }) {
	const { track } = useTrackStore();
	const pathname = usePathname();
	return (
		<div className="flex flex-row justify-end mt-[2.6rem] gap-x-[0.63rem]">
			<NavigationButton
				title="Geri Dön"
				bgColor="bg-surface-surface-secondary"
			/>
			<NavigationButton
				title="Devam Et"
				bgColor="bg-primary-600"
				disabled={track === null ? true : false}
			/>
		</div>
	);
}

export default NavigationForm;
