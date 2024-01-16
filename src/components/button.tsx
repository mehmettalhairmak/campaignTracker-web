import Link from "next/link";
import React from "react";

export default function Button() {
	return (
		<div className="rounded-lg bg-primary-primary-default w-[13.44rem] h-[3.06rem] flex flex-row items-center justify-center py-[0.5rem] px-[0.75rem] box-border">
			<Link
				href="create-campaign/track"
				className="leading-[1.38rem] text-[1.25rem] text-base-white no-underline"
			>
				Kampanya Olustur
			</Link>
		</div>
	);
}
