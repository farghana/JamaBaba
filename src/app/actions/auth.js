'use server'

import { signIn , signOut} from "next-auth/react";

export async function doCredentialsLogin (formData){
  try{
    const response = await signIn("credentials", {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

    return response;
  }catch(error){
    console.log(error)
  }
}