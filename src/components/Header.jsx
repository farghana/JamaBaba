
import { getServerSession } from "next-auth";

import NavLinks from "./NavLinks";

const Header = async () => {
	const session = await getServerSession();
	return (
		<NavLinks session={session} />
	);
};

export default Header;
