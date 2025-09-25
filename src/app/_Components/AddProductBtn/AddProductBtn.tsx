'use client'
import { AddProduct } from '_/app/cart/cart.services'
import { Button } from '_/components/ui/button'
import { toast } from 'sonner';

export default function AddProductBtn({id}:{id:string} ) {

      

    async function handleAddToCart(){

        const isAdded = await AddProduct(id);

        if(isAdded){
            toast.success("added to cart successfully", {position:"bottom-right" , duration:3000})
            
          }
          else{
            toast.error("error occurred !", {position:"bottom-right" , duration:3000})
            
          }
    }

  return (
         <Button onClick={handleAddToCart} className="cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white font-medium">
    
       
        Add to Cart
      </Button>
  )
}
