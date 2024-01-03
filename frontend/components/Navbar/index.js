import React, { useState } from "react";
import Link from "next/link";
import RecordForm from "../form/AddRecordForm";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const closeForm = () => {
		setOpen(false);
	};

	return (
		<main>
			<div className="navbar">
				<div className="navbarlinks">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="29"
						height="28"
						viewBox="0 0 29 28"
						fill="none"
					>
						<path
							d="M18.8297 9.36777V0.300835H9.56526V9.36777H0.300781V18.6322H9.56526V27.6992H18.8297V18.6322H28.0942V9.36777H18.8297ZM18.8297 18.4347H9.56526V9.5667H18.8297V18.4347Z"
							fill="#0166FF"
						/>
					</svg>
					<Link href="/dashboard">
						<div>Dashboard</div>
					</Link>
					<Link href="/records">
						<div>Records</div>
					</Link>
				</div>
				<div className="navbarrigthside">
					<button
						onClick={() => {
							setOpen(true);
						}}
						className="record"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
						>
							<path
								d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
								fill="white"
							/>
						</svg>
						Record
					</button>
					{open && <RecordForm open={open} closeForm={closeForm} />}
					<div className="pfp"></div>
				</div>
			</div>
		</main>
	);
}
