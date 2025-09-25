'use server'

import { LoginFormType } from "./loginForm.type";

export async function LoginUser(data: LoginFormType){
    
   try{ const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',
        {
          method : 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(data)
        }
      );

      const finalres = await res.json();
      console.log('res', finalres);

      if(finalres.message === 'success'){
        return true;
      }
      else {return finalres.message}
    }
    catch(error){
        console.log("error", error);
    }
}
