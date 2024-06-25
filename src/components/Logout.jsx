"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
	return (
		<div className='hidden md:block md:ml-6'>
			<div className='flex items-center'>
				<button onClick={() => signOut()} className='flex items-center text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>
					<i className='fa-brands fa-google text-white mr-2'></i>
					<span>Logout</span>
				</button>
			</div>
		</div>
	);
};

export default Logout;
