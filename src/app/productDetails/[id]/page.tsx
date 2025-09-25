
import React from 'react'
import { ProductDetailsProps } from '../ProductDetailsProps.types'
import { getSpecificProduct } from '_/app/_Services/products.services'
import Image from 'next/image';
import AddProductBtn from '_/app/_Components/AddProductBtn/AddProductBtn';
import AddToWishlistIcn from '_/app/_Components/AddToWishlistIcn/AddToWishlistIcn';

export default async function ProductDetails({params}:ProductDetailsProps) {
  const data  = await getSpecificProduct(params.id);
  console.log("productdata", data);
  if(data == null)
  {
    return "nulll";
  }
  
  return (
    <div className=' xl:grid xl:grid-cols-5 border-2 p-5 w-3/4 mx-auto my-10 flex flex-col items-center'>
      <div className='col-span-2 relative h-[400px] w-[400px]'>
       <Image className='' src={data.imageCover} alt={data.title} fill />
      </div>
      <div className='col-span-3 flex flex-col justify-center gap-4'>
        <h1 className='font-bold text-2xl'>{data.title}</h1>
        <h2 className='text-green-700 font-bold'>{data.category.name}</h2>
        <h2 className='text-gray-500 font-bold'>{data.brand.name}</h2>

        <p>{data.description}</p>
        <h3>price : {data.price}</h3>

        <div className='flex justify-between items-center  w-11/12'>

      <div className='w-3/4'><AddProductBtn id={data.id} /></div>
      <div><AddToWishlistIcn id={data.id}/></div>

      </div>
      </div>
      

      {/* <div c`lassName='flex justify-between items-center  w-11/12'>

      <div class`Name='w-3/4'><AddProductBtn id={data.id} /></div>
      <div><i cl`assName="fa-solid fa-heart text-2xl"></i></div>

      </div> */}
    </div>
  )
}
