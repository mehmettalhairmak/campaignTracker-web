import Button from "@/components/button";
import MainHeader from "@/components/main-header";

import React from "react";

function Home() {
	return (
		<main className="flex h-full w-full flex-col">
			<MainHeader />
			<section className="flex justify-center items-center my-[5.5rem]">
				<Button />
			</section>
		</main>
	);
}

export default Home;
