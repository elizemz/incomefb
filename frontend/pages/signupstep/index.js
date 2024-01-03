import React, { useContext, useState } from "react";
import Balance from "@/components/Step/balance";
import Currency from "@/components/Step/currency";
import Finish from "@/components/Step/finish";
import { StepContext } from "@/context/StepProvider";

export default function SignupStep() {
	const { step, changeStep, goToDashboard } = useContext(StepContext);

	return (
		<div>
			{step === 1 && <Currency />}
			{step === 2 && <Balance />}
			{step === 3 && <Finish />}
			{step === 3 ? (
				<button onClick={goToDashboard} className="confirm">
					Go to Dashboard
				</button>
			) : (
				<>
					<button onClick={changeStep} className="confirm">
						Confirm
					</button>
				</>
			)}
		</div>
	);
}
