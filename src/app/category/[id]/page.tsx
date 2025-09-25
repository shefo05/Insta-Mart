import React from 'react'
import { getProductsByCategory } from '_/app/_Services/products.services'
import { ProductType } from '_/app/_Types/product.type'
import ProductCard from '_/app/_Components/ProductCard/ProductCard'

export default async function CategoryProductsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const products = await getProductsByCategory(id)

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-16">
          <i className="fa-solid fa-box-open text-6xl text-gray-400 mx-auto mb-4 block"></i>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">This category doesn't have any products yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-4/5 mx-auto mt-20">
      {products.map((product: ProductType) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}


