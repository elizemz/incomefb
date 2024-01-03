import React from "react";
import Link from "next/link";

export default function Finish() {
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
						d="M28.7071 9.70745L12.7071 25.7074C12.6142 25.8004 12.5039 25.8742 12.3825 25.9245C12.2611 25.9748 12.131 26.0007 11.9996 26.0007C11.8682 26.0007 11.738 25.9748 11.6166 25.9245C11.4952 25.8742 11.385 25.8004 11.2921 25.7074L4.29208 18.7074C4.10444 18.5198 3.99902 18.2653 3.99902 17.9999C3.99902 17.7346 4.10444 17.4801 4.29208 17.2924C4.47972 17.1048 4.73422 16.9994 4.99958 16.9994C5.26494 16.9994 5.51944 17.1048 5.70708 17.2924L11.9996 23.5862L27.2921 8.29245C27.4797 8.1048 27.7342 7.99939 27.9996 7.99939C28.2649 7.99939 28.5194 8.1048 28.7071 8.29245C28.8947 8.48009 29.0001 8.73458 29.0001 8.99995C29.0001 9.26531 28.8947 9.51981 28.7071 9.70745Z"
						fill="white"
					/>
				</svg>
				<div className="select">Good Job!</div>
				<div className="reminder">
					Your very first account has been created. Now continue to dashboard
					and start tracking.
				</div>
			</div>
		</main>
	);
}
