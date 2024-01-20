"use client";

import axiosInstance from "@/api";
import { SpecialCampaign } from "@/models/SpecialCampaignModel";
import { TrackItem } from "@/models/TrackModel";
import useTrackStore from "@/zustand/track";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";

function OrderCard() {
	const pathname = usePathname();
	const params = useParams();

	const [track, setTrack] = React.useState<any>("NULL");

	useEffect(() => {
		axiosInstance
			.get<SpecialCampaign>(`get-campaign?id=${params.id as string}`)
			.then((response) => {
				if (response.data.data.track_id !== "NULL") {
					axiosInstance
						.get<TrackItem>(`get-on-spotify?id=${response.data.data.track_id}`)
						.then((responseTrack) => {
							setTrack(responseTrack.data);
						});
				} else {
					setTrack("NULL");
				}
			});
	}, [pathname]);

	if (track === "NULL") {
		return <></>;
	} else {
		return (
			<div className="self-stretch rounded-2xl flex flex-row items-start justify-start p-[1rem] gap-[0.75rem] border-[1px] border-solid border-gray-200">
				<div className="h-[3.06rem] rounded-lg w-[3.06rem] overflow-hidden shrink-0 flex flex-col items-center justify-center p-[0.5rem] box-border bg-[url('/frame-35100@3x.png')] bg-cover bg-no-repeat bg-[top]">
					<Image
						alt=""
						width={track!.album.images[0].width}
						height={track!.album.images[0].height}
						src={track!.album.images[0].url}
						style={{ width: 60, height: 60 }}
					/>
				</div>

				<div className="flex flex-col items-start justify-start gap-[0.25rem]">
					<div className="tracking-[-0.02em] leading-[1.5rem] font-semibold">
						{track!.name}
					</div>
					<div className="text-[0.88rem] leading-[1.25rem] font-medium text-gray-500">
						{track!.artists[0].name}
					</div>
				</div>
			</div>
		);
	}
}

export default OrderCard;
