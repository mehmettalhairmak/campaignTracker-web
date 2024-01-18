"use client";

import axiosInstance from "@/api";
import useGenreeStore from "@/zustand/genree";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select from "react-select";

function GenreeInputForm() {
	const { genres, setGenres } = useGenreeStore();

	const pathname = usePathname();

	const [genresState, setGenresState] = useState<
		{ value: string; label: string }[]
	>([]);

	useEffect(() => {
		if (genres === null) {
			axiosInstance.get("track-genres").then((response) => {
				setGenresState(
					response.data.map((genre: string) => {
						return {
							value: genre,
							label: genre,
						};
					})
				);
			});
		}
	}, [pathname]);

	return (
		<div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-center text-[0.88rem] text-gray-400">
			<Select
				isMulti
				name="colors"
				options={genresState}
				onChange={(value) =>
					setGenres(
						value.length > 0 ? value?.map((genre) => genre.value) : null
					)
				}
				placeholder="Tür seç"
				className="self-stretch rounded-lg flex flex-row items-center justify-start py-[1rem]"
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						flex: 1,
					}),
				}}
			/>
		</div>
	);
}

export default GenreeInputForm;
