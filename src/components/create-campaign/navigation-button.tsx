"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

function NavigationButton({
	title,
	bgColor = "bg-primary-600",
	disabled = false,
	onClick,
}: {
	title: "Devam Et" | "Geri Dön";
	bgColor?: string;
	disabled?: boolean;
	onClick?: () => void | null;
}) {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<div className="w-[7.88rem] flex flex-col items-start justify-start">
			<button
				disabled={disabled}
				onClick={() => {
					if (onClick !== undefined) {
						onClick();
					} else {
						if (title === "Devam Et") {
							switch (pathname) {
								case "/create-campaign/track":
									router.push("/create-campaign/detail");
									break;
								case "/create-campaign/detail":
									router.push("/create-campaign/campaign");
									break;
								case "/create-campaign/campaign":
									router.push("/create-campaign/payment");
									break;
							}
						} else if (title === "Geri Dön") {
							router.back();
						}
					}
				}}
				className={`self-stretch rounded-lg ${bgColor} flex flex-row items-center justify-center py-[0.5rem] px-[0.75rem] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-surface-secondary`}
			>
				<div
					className={`relative tracking-[-0.02em] leading-[1.25rem] font-alata ${
						bgColor === "bg-primary-600"
							? "text-base-white"
							: "text-accent-color"
					}`}
				>
					{title}
				</div>
			</button>
		</div>
	);
}

export default NavigationButton;
