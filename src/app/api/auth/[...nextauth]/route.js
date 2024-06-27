import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '@/models';
import { compare } from 'bcryptjs';

const handler = NextAuth({
  session:{
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages:{
    signIn: '/login'
  },
  providers:[
    CredentialsProvider({
      credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials) {
				if (credentials === null) return null;
				try {
          // Add logic here to look up the user from the credentials supplied
          const user = await User.findOne({ where: {email: credentials?.email} });
          //bcryptjs compare passwords  
          if (user) {
            const isPasswordValid = await compare(credentials?.password || '', user?.password_hash); 
            if(isPasswordValid){
              return {
                id: user.id,
                email: user.email
              }
            }
            return null;
          } else {
            throw new Error("User not found");
          }
				} catch (error) {
					console.error(error)
				}
			},
    })
  ]
});

export { handler as GET, handler as POST };