import "@/styles/globals.css";
import UserProvider from "@/context/UserProvider";
import React from "react";
import { ToastContainer } from "react-toastify";
import { StepProvider } from "@/context/StepProvider";
import TransactionProvider from "@/context/TransactionProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import CategoryProvider from "@/context/CategoryProvider";

export default function App({ Component, pageProps }) {
	return (
		<UserProvider>
			<ThemeProvider>
				<StepProvider>
					<CategoryProvider>
						<TransactionProvider>
							<Component {...pageProps} />
							<ToastContainer />
						</TransactionProvider>
					</CategoryProvider>
				</StepProvider>
			</ThemeProvider>
		</UserProvider>
	);
}
