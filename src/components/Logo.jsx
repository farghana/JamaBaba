import Link from "next/link";
import Image from "next/image";
import appLogo from "@/assets/images/hanger_714955.png";

const Logo = () => {
	return (
		<>
			<Link
				className='flex flex-shrink-0 items-center'
				href='/'
			>
				<Image
					className='h-10 w-auto'
					src={appLogo}
					alt='PropertyPulse'
				/>

				<h1 className='hidden md:block text-white text-2xl font-bold ml-2'>
					Jama
					<span className='bg-black px-2 py-1 rounded-md'>Baba</span>
				</h1>
			</Link>
		</>
	);
};

export default Logo;
