import React, { useContext } from "react";
import { TransactionContext } from "@/context/TransactionProvider";

const FormRight = () => {
	const { transactionData, changeTransactionData } =
		useContext(TransactionContext);

	return (
		<div className="bigmodal">
			<div className="bg-white flex flex-col gap-5 font-sans items-start pt-4 pb-6 px-6 w-[380px]">
				<div className="flex flex-col gap-1 w-full items-start">
					<div className="leading-[24px] text-[#1f2937]">Transaction Name</div>
					<div className="border-solid border-[#d1d5db] bg-[#f9fafb] flex flex-row justify-between w-full h-12 items-start pt-3 px-4 border rounded-lg">
						<input
							className="font-sans leading-[24px] text-[#94a3b8] w-min"
							type="text"
							placeholder="Name"
							name="transaction_name"
							value={transactionData.transaction_name}
							onChange={(e) => {
								changeTransactionData(e.target.name, e.target.value);
							}}
						></input>
						<img
							src="https://file.rendit.io/n/4sWpMmTcAe1k9snNnsfp.svg"
							alt="Arrowdropdown"
							id="Arrowdropdown"
							className="w-6"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-1 w-full items-start">
					<div id="TopLeftLabel2" className="leading-[24px] text-[#1f2937]">
						Note
					</div>
					<div className="leading-[24px] text-[#94a3b8] border-solid border-[#d1d5db] bg-[#f3f4f6] flex flex-row w-full h-[280px] items-start pt-4 px-4 border rounded-lg">
						<textarea
							className="font-sans leading-[24px] text-[#94a3b8] w-min"
							placeholder="Write a Message"
							cols="30"
							rows="10"
							name="description"
							value={transactionData.description}
							onChange={(e) => {
								changeTransactionData(e.target.name, e.target.value);
							}}
						></textarea>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormRight;
