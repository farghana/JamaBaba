import { query } from "@/lib/db";

export async function POST(request) {
	try {
		const reqBody = await request.json();
		const { email, username, password } = reqBody;
		console.log(reqBody);
		const user = await query({
			query: "SELECT * FROM users WHERE email = ?",
			values: [email],
		});

    if(user){
      return new Response({error: "User already exists"},{ status:400})
    }

    const newUser =  await query({
      query:"INSERT ",
      values:[]
    })

    console.log(newUser)
    
	} catch (error) {
		return new Response("Some error!", {
			status: 500,
		});
	}
}
