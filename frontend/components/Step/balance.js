import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { StepContext } from "@/context/StepProvider";

export default function Balance() {
	const { changeStepData, stepData } = useContext(StepContext);
	return (
		<main>
			<div className="steps">
				<div className="geld2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="29"
						height="28"
						viewBox="0 0 29 28"
						fill="none"
					>
						<path
							d="M19.0074 9.36772V0.300781H9.74299V9.36772H0.478516V18.6322H9.74299V27.6991H19.0074V18.6322H28.2719V9.36772H19.0074ZM19.0074 18.4347H9.74299V9.56665H19.0074V18.4347Z"
							fill="#0166FF"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="57"
						height="20"
						viewBox="0 0 57 20"
						fill="none"
					>
						<path
							d="M9.19463 9.57151H18.041V17.0821C16.2516 18.8211 13.5296 19.7284 10.354 19.7284C4.17917 19.7284 0.297852 16.1748 0.297852 10.4536C0.297852 4.73247 4.17917 1.1536 9.97594 1.1536C13.202 1.1536 15.6467 2.13653 17.3605 3.72434L15.1174 6.24467C13.9077 5.18613 12.0678 4.50564 10.0011 4.50564C6.39706 4.50564 4.00274 6.79914 4.00274 10.4536C4.00274 14.2341 6.49788 16.452 10.48 16.452C12.0678 16.452 13.5044 16.1748 14.689 15.2927V12.6967H9.19463V9.57151Z"
							fill="black"
						/>
						<path
							d="M34.052 12.4951C34.052 12.7219 34.052 13.2512 34.0268 13.5284H23.3406C23.7187 15.5699 25.13 16.7292 27.3983 16.7292C29.0114 16.7292 30.4479 16.1244 31.3805 14.965L33.5732 16.8301C32.313 18.5691 30.2967 19.6528 27.1463 19.6528C22.5341 19.6528 19.8121 16.8301 19.8121 12.4447C19.8121 8.08451 22.7609 5.23654 26.9699 5.23654C31.7081 5.23654 34.052 8.26093 34.052 12.4951ZM26.9699 8.13492C25.2056 8.13492 23.7943 9.01703 23.3658 11.0081H30.6496C30.4479 9.4959 29.3642 8.13492 26.9699 8.13492Z"
							fill="black"
						/>
						<path
							d="M36.3203 19.3756V0.271484H39.7984V19.3756H36.3203Z"
							fill="black"
						/>
						<path
							d="M49.011 19.678C44.9785 19.678 42.3573 16.8805 42.3573 12.4699C42.3573 8.05931 45.0037 5.28694 48.8598 5.28694C50.2712 5.28694 51.9598 5.6902 53.0939 6.79914V0.271484H56.5216V19.3756H53.1443V18.0398C52.0606 19.3504 50.3468 19.678 49.011 19.678ZM49.7671 16.5528C51.0777 16.5528 52.4387 16.0236 53.1443 14.7382V10.1764C52.4387 9.04224 51.0273 8.41215 49.6915 8.41215C47.4988 8.41215 45.9362 9.87395 45.9362 12.4699C45.9362 15.0154 47.4484 16.5528 49.7671 16.5528Z"
							fill="black"
						/>
					</svg>
				</div>
				<div className="stepsbottom">
					<div className="stepcircles">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<circle cx="12" cy="12" r="12" fill="#0166FF" />
						</svg>
						<div>Currency</div>
					</div>
					<svg
						className="strokeblue"
						xmlns="http://www.w3.org/2000/svg"
						width="92"
						height="4"
						viewBox="0 0 92 4"
						fill="none"
					>
						<path d="M0 2L92 2.00001" stroke="#0166FF" stroke-width="4" />
					</svg>
					<div className="stepcircles">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<circle cx="12" cy="12" r="12" fill="#0166FF" />
						</svg>
						<div>Balance</div>
					</div>
					<svg
						className="stroke"
						xmlns="http://www.w3.org/2000/svg"
						width="92"
						height="4"
						viewBox="0 0 92 4"
						fill="none"
					>
						<path d="M0 2L92 2.00001" stroke="#E5E7EB" stroke-width="4" />
					</svg>
					<div className="stepcircles">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<circle cx="12" cy="12" r="12" fill="#E5E7EB" />
						</svg>
						<div>Finish</div>
					</div>
				</div>
			</div>
			<div className="selectconfirm">
				<svg
					className="money"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
				>
					<path
						d="M23 11.1962V10.5C23 7.365 18.2712 5 12 5C5.72875 5 1 7.365 1 10.5V15.5C1 18.1112 4.28125 20.1863 9 20.8075V21.5C9 24.635 13.7288 27 20 27C26.2712 27 31 24.635 31 21.5V16.5C31 13.9125 27.8225 11.835 23 11.1962ZM7 18.3587C4.55125 17.675 3 16.5487 3 15.5V13.7413C4.02 14.4637 5.38625 15.0463 7 15.4375V18.3587ZM17 15.4375C18.6138 15.0463 19.98 14.4637 21 13.7413V15.5C21 16.5487 19.4487 17.675 17 18.3587V15.4375ZM15 24.3587C12.5513 23.675 11 22.5487 11 21.5V20.9788C11.3287 20.9913 11.6613 21 12 21C12.485 21 12.9587 20.9837 13.4237 20.9562C13.9403 21.1412 14.4665 21.2981 15 21.4263V24.3587ZM15 18.7812C14.0068 18.928 13.004 19.0011 12 19C10.996 19.0011 9.99324 18.928 9 18.7812V15.8075C9.99472 15.9371 10.9969 16.0014 12 16C13.0031 16.0014 14.0053 15.9371 15 15.8075V18.7812ZM23 24.7812C21.0106 25.0729 18.9894 25.0729 17 24.7812V21.8C17.9944 21.9337 18.9967 22.0005 20 22C21.0031 22.0014 22.0053 21.9371 23 21.8075V24.7812ZM29 21.5C29 22.5487 27.4487 23.675 25 24.3587V21.4375C26.6138 21.0462 27.98 20.4637 29 19.7412V21.5Z"
						fill="white"
					/>
				</svg>
				<div className="select">Set up your cash Balance</div>
				<input
					type="number"
					placeholder="Your Cash Balance"
					className="emailinput"
					name="balance"
					value={stepData.balance}
					onChange={(e) => {
						changeStepData(e.target.name, e.target.value);
					}}
				/>
				<div className="reminder">
					How much cash do you have in your wallet?
				</div>
			</div>
		</main>
	);
}
