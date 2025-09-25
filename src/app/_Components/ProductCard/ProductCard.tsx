'use client';

import Image from "next/image";
import { ProductCardProps } from "./ProductCard.Types";

import AddProductBtn from "../AddProductBtn/AddProductBtn";
import Link from "next/link";
import AddToWishlistIcn from "../AddToWishlistIcn/AddToWishlistIcn";

export default function ProductCard({ product }: ProductCardProps) {


  return (
    <>
      
        <div className="overflow-hidden group relative flex flex-col justify-between border-2 border-gray-300 rounded-md p-4 hover:shadow-lg transition-shadow duration-300 hover:border-green-600 " key={product.id}>
        <Link href={`productDetails/${product.id}`}>
          <div className="relative h-[32rem] md:h-[20rem] lg:h-[22rem] xl:h-[28rem] mb-4">
            <Image fill className="object-cover  rounded" src={product.imageCover} alt={product.title} />
           </div>
          <div className="pb-8 ">
            <p className="text-green-600 mb-2 font-medium">{product.category.name}</p>
            <h1 className="font-bold text-gray-600 mb-3 line-clamp-2">{product.title.split(' ', 2).join(' ')}</h1>
      
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold text-gray-900">{product.price} LE</p>
              <div className="flex items-center gap-1">
                <p className="text-sm text-gray-600">{product.ratingsAverage}</p>
                <i className="fa-solid fa-star text-amber-300"></i>
              </div>
            </div>
          </div>
          </Link>
      <div className='flex justify-between items-center top-[120%]  absolute w-11/12 group-hover:top-[92%] duration-300 transition-all'>

          <div className='w-3/4'><AddProductBtn id={product.id} /></div>
          <div><AddToWishlistIcn id={product.id}/></div>

      </div>
      {/* <Button 
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
      >
        {isAdding ? (
          <>
            <i className="fa-solid fa-spinner fa-spin mr-2"></i>
            Adding...
          </>
        ) : (
          <>
            <i className="fa-solid fa-cart-plus mr-2"></i>
            Add to Cart
          </>
        )}
      </Button> */}
        </div>
      
      </>
  )

}
