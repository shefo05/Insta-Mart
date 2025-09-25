'use server'

import { getUserToken } from "_/app/_Utils/utils";


export async function AddToWishlist(productId: string){

  const token = await getUserToken();

  if(token){
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist',
    {
      method:'post',
      body:JSON.stringify({productId}),
      headers:{
        "content-Type":"application/json",
        token: token as string

      }
    }
  )

  const finalRes = await res.json();

  // console.log("finaalresss", finalRes);
  if(finalRes.status ==='success'){
    // toast.success("added successfully", {position:"bottom-right" , duration:3000})
    return true;
  }
  else{
    // toast.error("error occurred !", {position:"bottom-right" , duration:3000})
    return false;
  }

  }
  // fetch('https://ecommerce.routemisr.com/api/v1/cart',
  //   {
  //     method:'post',
  //     body:JSON.stringify({productId}),
  //     headers:{
  //       "content-Type":"application/json",

  //     }
  //   }
  // )
}