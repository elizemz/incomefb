import React, { useState } from "react";
import Navbar from "@/components/Navbar";
// import RecordLeft from "@/components/Record/RecordLeft";
// import RecordRight from "@/components/Record/RecordRight";
import Records from "@/components/records";

export default function Recordss() {
	return (
		<>
			<Navbar />
			<div className="flex justify-center m-auto">
				<Records />
			</div>
		</>
	);
}
