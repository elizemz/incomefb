import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/router";

const SignUp = () => {
	const router = useRouter();
	const { loading, signup, formUserData, changeFormUserData } =
		useContext(UserContext);

	return (
		<main>
			<div className="flex">
				<div className="signup">
					<div className="geld">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
						>
							<path
								d="M16.1292 8.18279V0.405029H8.18207V8.18279H0.234863V16.13H8.18207V23.9078H16.1292V16.13H24.0764V8.18279H16.1292ZM16.1292 15.9606H8.18207V8.35344H16.1292V15.9606Z"
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
					<div>Create Geld account</div>
					<div>Sign up below to create your Wallet account:</div>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="infoinput"
						onChange={(e) => {
							changeFormUserData(e.target.name, e.target.value);
						}}
						value={formUserData.name}
					/>
					<input
						type="text"
						name="email"
						placeholder="Email"
						className="infoinput"
						onChange={(e) => {
							changeFormUserData(e.target.name, e.target.value);
						}}
						value={formUserData.email}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="infoinput"
						onChange={(e) => {
							changeFormUserData(e.target.name, e.target.value);
						}}
						value={formUserData.password}
					/>
					<input
						type="password"
						name="rePassword"
						placeholder="Password Confirmation"
						className="infoinput"
						onChange={(e) => {
							changeFormUserData(e.target.name, e.target.value);
						}}
						value={changeFormUserData.rePassword}
					/>
					<button className="loginbutton" onClick={signup} disabled={loading}>
						Sign Up
					</button>
					<div className="flex">
						<div>Already have an account?</div>
						<Link href="/login">
							<div className="text-blue-600">‎‎ ‎ ‎ Log in!</div>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SignUp;
