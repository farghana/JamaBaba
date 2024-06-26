import AuthProvider from "@/components/AuthProvider";

import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Jama Baba",
	description: "One-stop solution for Apparel manufacturing",
};

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
		<html lang='en'>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
		</AuthProvider>
	);
}
