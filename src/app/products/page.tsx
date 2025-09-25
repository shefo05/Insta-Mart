import React from 'react'
import { getProducts } from '../_Services/products.services'
import ProductCard from '../_Components/ProductCard/ProductCard';

export default async function Products() {

    const allProducts = await getProducts('56', 'no-cache');
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-4/5 mx-auto mt-20" >
      {allProducts?.map(product => <ProductCard key={product.id}  product={product} />
        
      )} 
    </div>
    </>
  )
}
