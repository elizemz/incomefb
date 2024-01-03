import MiddleSection from "@/components/dashboard/MiddleSection";

import TopSection from "@/components/dashboard/TopSection";
import Navbar from "@/components/Navbar";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const DashboardPage = () => {
	const router = useRouter();
	const { user } = useContext(UserContext);

	return (
		<div className="bg-[#F6F6F6]">
			<Navbar />
			<main className="container mx-auto mt-6">
				<TopSection />
				<MiddleSection />
				{/* <TopInfo />
        <MiddleInfo />
        <BottomInfo /> */}
			</main>
		</div>
	);
};

export default DashboardPage;
