'use client'
import { Button } from '_/components/ui/button'
import { toast } from 'sonner';
import { AddToWishlist } from '../addToWishlist/wishlist.services';

export default function AddToWishlistIcn({id}:{id:string} ) {

      

    async function handleAddToWilshlist(){

        const isAdded = await AddToWishlist(id);

        if(isAdded){
            toast.success("added to wishlist successfully", {position:"bottom-right" , duration:3000})
            
          }
          else{
            toast.error("error occurred !", {position:"bottom-right" , duration:3000})
            
          }
    }

  return (
         <div onClick={handleAddToWilshlist} className="cursor-pointer  hover:text-red-700 ">
                      <i className="fa-solid fa-heart text-2xl"></i>

         </div>
  )
}
