

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "./form";

const RegisterPage =async () => {
  const session = await getServerSession();
	if(session) redirect("/");

  return (
    <Form />
  )
}

export default RegisterPage
