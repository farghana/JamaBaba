import LoginForm from "@/components/RegisterForm";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const LoginPage = () => {
	return (
		<LoginForm />
	);
};

export default LoginPage;
