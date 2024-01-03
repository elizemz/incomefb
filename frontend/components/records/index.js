import React from "react";
import Range from "./recordLeft/recordBottom/Range";
import RecordSmall from "./recordLeft/recordTop/RecordSmall";
import RecordBig from "./recordLeft/RecordsCategory/RecordBig";
import RightPagiTop from "./recordRight/RightPagi";
import BottomRecord from "./recordRight/BottomPart/BottomRecord";

export default function Records() {
	return (
		<div className="flex container py-6 mx-auto">
			{/* <RecordLeft />
			<RecordRight /> */}
			<div className="flex-4 border-2 bg-[#F9FAFB] px-5 py-8 rounded-xl w-[320px] h-[700px]">
				<RecordSmall />
				<RecordBig />
				<Range />
			</div>
			<div className="flex-1 px-4 mt-3">
				<RightPagiTop />
				<BottomRecord />
			</div>
		</div>
	);
}
