"use client";

import React from "react";

function Button({
	title,
	bgColor = "bg-primary-600",
}: {
	title: string;
	bgColor?: string;
}) {
	return (
		<div className="w-[7.88rem] flex flex-col items-start justify-start">
			<button
				className={`self-stretch rounded-lg ${bgColor} flex flex-row items-center justify-center py-[0.5rem] px-[0.75rem] cursor-pointer`}
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

export default Button;
