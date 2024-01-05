import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

const ExpenseCard = () => {
	return (
		<div className="card w-[390px] h-[220px] rounded-2xl bg-base-100  ">
			<div className="card-body h-12 flex flex-col gap-5">
				<div className="flex  border-b-2 items-center  h-12 pt-4 px-6">
					<TbPointFilled color="blue" />
					<h2 className="card-title   ">Total expenses </h2>
				</div>
				<h1 className="font-semibold text-3xl"></h1>
				<span className="text-slate-500">Your Income Account</span>
				<div className="flex items-end  ">
					<FaArrowAltCircleDown color="green" size={20} className="mr-2" />
					<span>32&#37; from last month</span>
				</div>
			</div>
		</div>
	);
};

export default ExpenseCard;
