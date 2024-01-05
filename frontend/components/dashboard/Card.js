import React from "react";

const Card = () => {
	return (
		<div className="card w-[390px] h-[220px] bg-base-100 bg-[#0166FF] text-white rounded-2xl shadow-2xl p-1">
			{/* <img src="/images/Large.png" alt="Shoes" /> */}
			<div className="card-body items-end justify-end bottom-1 text-lg text-white ">
				<h3 className=" ">CASH</h3>
				<p>11,250,657.89</p>
			</div>
		</div>
	);
};

export default Card;
