"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

const Logout = () => {
	return (
		<Link
			href='#'
			className='block px-4 py-2 text-sm text-gray-700'
			role='menuitem'
			tabIndex='-1'
			id='user-menu-item-2'
			onClick={() => signOut()}
		>
			Sign Out
		</Link>
	);
};

export default Logout;
