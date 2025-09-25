'use server'

import { RegisterFormType } from "./RegisterForm.type";

export async function RegisterNewUser(data:RegisterFormType){
    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',
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
    } catch (error) {
        console.error('Registration error:', error);
        return 'Registration failed. Please check your connection and try again.';
    }
}