import React, { useContext, useEffect, useState } from "react";

import { FaPlusCircle } from "react-icons/fa";
import { DashArrow } from "@/components/iconsvg";
import CategoryForm from "../../AddCategoryForm";
import { getIcons } from "@/utils";

import RecordIcons from "./RecordIcons";
import { TransactionContext } from "@/context/TransactionProvider";
import axios from "axios";

const FormLeft = ({ closeForm }) => {
	const [open, setOpen] = useState(false);
	const [category, setCategory] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState({});
	const { transactionData, changeTransactionData, addTransaction } =
		useContext(TransactionContext);

	const addRecord = async () => {
		await addTransaction();
		console.log("CLOSE");
		closeForm();
	};

	const getCategories = async () => {
		const {
			data: { categories },
		} = await axios.get("http://localhost:8008/categories");
		console.log("RES", categories);
		setCategory(categories);
	};

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<div className="bg-white flex flex-col justify-center gap-8 font-sans items-start pt-5 pb-6 px-6 w-[400px] rounded-[20px]">
			<div className="flex flex-col gap-5 w-full items-start">
				<div className="bg-[#f3f4f6] flex flex-row mb-px gap-1 w-full items-start rounded-[100px]">
					<button
						className={`leading-[24px]   flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start rounded-[20px] ${
							transactionData.transaction_type === "EXP" &&
							"bg-[#0166FF] text-white"
						}`}
						onClick={() => {
							changeTransactionData("transaction_type", "EXP");
						}}
					>
						Expense
					</button>
					<button
						className={`leading-[24px] text-[#1f2937]  flex flex-row justify-center pt-2 w-1/2 h-10 cursor-pointer items-start rounded-[20px] ${
							transactionData.transaction_type === "INC" &&
							"bg-[#228822] text-white"
						}`}
						onClick={() => {
							changeTransactionData("transaction_type", "INC");
						}}
					>
						Income
					</button>
				</div>
				<div
					id="Input"
					className="border-solid border-[#d1d5db] bg-[#f3f4f6] flex flex-col justify-center pl-4 w-full h-20 items-start border rounded-lg"
				>
					<div className="leading-[24px] text-[#171717]">Amount</div>
					<div className="flex flex-row gap-2 w-20 items-start">
						<input
							className="text-[#9ca3af]"
							type="number"
							placeholder="$ 000,0"
							value={transactionData.amount}
							name="amount"
							onChange={(e) => {
								console.log(e.target.name, e.target.value);
								changeTransactionData(e.target.name, e.target.value);
							}}
						></input>
						<div className="text-xl leading-[28px] text-[#9ca3af]">₮</div>
					</div>
				</div>
				<div className="flex flex-col gap-1 w-full font-sans items-start">
					<div id="TopLeftLabel" className="leading-[24px] text-[#1f2937]">
						Category
						<ul>
							<li className="">
								<button
									onClick={(e) => {
										e.preventDefault();
										setOpen(true);
									}}
									className="border-solid border-[#d1d5db] bg-[#f9fafb] flex flex-row justify-between w-full h-12 items-start pt-3 px-4 border rounded-lg mt-2"
								>
									<FaPlusCircle size={24} color="blue" />
									Add Category
								</button>
							</li>
							<RecordIcons
								changeTransactionData={changeTransactionData}
								category={category}
							/>
						</ul>
					</div>
				</div>
				<div className="flex flex-row gap-3 w-full font-sans items-start">
					<div className="flex flex-col gap-1 w-1/2 items-start">
						<div id="TopLeftLabel2" className="leading-[24px] text-[#1f2937]">
							Date
						</div>
						<input
							type="datetime-local"
							placeholder="Oct 30,2023"
							className="border-solid border-[#d1d5db] bg-[#f9fafb] flex flex-row justify-center pt-3 gap-6 h-12 items-start border rounded-lg w-220px]"
							name="updated_at"
							onChange={(e) => {
								console.log("first", e.target.value);
								changeTransactionData(e.target.name, e.target.value);
							}}
						/>
					</div>
				</div>
			</div>
			<button
				onClick={addRecord}
				className={`leading-[24px] text-[#f9fafb]  flex flex-row justify-center pt-2 w-full h-10 cursor-pointer items-start rounded-[20px] ${
					transactionData.transaction_type === "INC"
						? "bg-[#228822]"
						: "bg-[#0166FF]"
				}`}
			>
				Add Record
			</button>
			{open && <CategoryForm open={open} closeForm={closeForm} />}
		</div>
	);
};

export default FormLeft;
