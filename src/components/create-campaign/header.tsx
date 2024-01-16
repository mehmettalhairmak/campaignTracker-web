import React, { ReactNode } from "react";

function CreateCampaignHeader({
	currentPage,
}: {
	currentPage: "Parçan" | "Detaylar" | "Kampanyan" | "Ödeme";
}) {
	const renderSection = (): ReactNode => {
		const pages = ["Parçan", "Detaylar", "Kampanyan", "Ödeme"];

		return pages.map((value, index, array) => {
			let spacing;

			if (currentPage === value) {
				spacing = "[1rem]";
			} else if (pages.indexOf(currentPage) > index) {
				spacing = "[2rem]";
			} else {
				spacing = "[0rem]";
			}

			return (
				<React.Fragment key={index}>
					<div className="text-center text-[1.25rem] text-gray-400">
						{value}
					</div>
					{index < array.length - 1 && (
						<div className="rounded-2xl bg-surface-surface-secondary w-[2rem] h-[0.25rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
							<div
								className={`self-stretch rounded-2xl bg-primary-600 w-${spacing} overflow-hidden shrink-0`}
							/>
						</div>
					)}
				</React.Fragment>
			);
		});
	};

	return (
		<div className="w-full h-[6.87rem] flex flex-col">
			<div className="flex flex-1 flex-row">
				<div className="flex w-1/3 items-center justify-center gap-[0.44rem]">
					<div className="tracking-[-0.04em] text-center text-[1.25rem]">
						Kampanya Oluştur
					</div>
				</div>
				<div className="flex w-1/3 flex-row items-center justify-center gap-[1rem]">
					{renderSection()}
				</div>
				<div className="w-1/3" />
			</div>
			<div className="w-full h-[0.06rem] border-t-[1px] border-solid border-whitesmoke" />
		</div>
	);
}

export default CreateCampaignHeader;
