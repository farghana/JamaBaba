import { Inter } from "next/font/google";
import appLogo from "@/assets/images/hanger_714955.png";
import "../globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Login | Jama Baba",
	description: "Login to your Jama Baba account",
};

export default function RootLayout({
	children, // will be a page or nested layout
}) {
	return (
		<html lang='en'>
			<body>
				<main>
					<div className='bg-blue-700 h-screen overflow-hidden flex items-center justify-center'>
						<div className='bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl'>
							<div className='bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8'>
								<span className='text-3xl text-white'>
									<Image
										className='h-10 w-auto'
										src={appLogo}
										alt='JamaBaba'
									/>
								</span>
							</div>
							{children}
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
