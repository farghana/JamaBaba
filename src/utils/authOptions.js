import sequelize from "@/config/db_connection";
import User from "@/models/User";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/data/users";

export const authOptions =  {
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials, req) {
				if (credentials === null) return null;
				try {
					const user = getUserByEmail(credentials?.email);
					if (user) {
						const isMatch = user?.password === credentials?.password;
						if(isMatch){
							return user;
						}else{
							throw new Error("Email or Password is not correct");
						}
					} else {
						throw new Error("User not found");
					}
				} catch (error) {
					throw new Error(error);
				}
			},
		}),
	],
	callbacks: {
		//Invokes on successfull signIn
		async signIn({ profile }) {
			//1. connect to DB
			await connectDB();
			//2. check if user exists
			const userExists = await User.findOne({ email: profile.email });
			//3. if not, add user to DB
			if (!userExists) {
				//truncate user name if too long
				const username = profile.name.slice(0, 20);
				await User.create({
					email: profile.email,
					username,
					image: profile.picture,
				});
			}
			//4. return true to allow sign in
			return true;
		},
		//Modifies the session
		async session({ session }) {
			//1. get user from DB
			const user = await User.findOne({ email: session.user.email });
			//2. Assignth euswr id to the session
			session.user.id = user._id.toString();
			//3. return session
			return session;
		},
	},
};
