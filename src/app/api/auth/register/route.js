import connectDB from "@/config/db_connection";
import User from "@/models/User";
import { hashPassword } from "@/utils/hash";
export const dynamic = "force-dynamic";

export const POST = async (request) => {
  try {
    const {email, password} = await request.json();
    console.log({email, password})
    //validate email and password

    //save user details in DB
    const user = await User.create({
      email,
      username:email,
      password_hash: await hashPassword(password),
    })
    return new Response("Registration successful", { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response("Failed to register user", { status: 500 });
  }
}