import { getProducts } from "../_Services/products.services";
import ProductCard from "../_Components/ProductCard/ProductCard";
import Link from "next/link";
import HomeSwiper from "./HomeSwiper";
import CategoriesSlider from "../_Components/CategoriesSlider/CategoriesSlider";




export default async function Home() {

  // console.log("Products" ,await getProducts());
  const allProducts= await getProducts() || null;

  if(allProducts == null)
  {
    return null;
  }


  return (
    <>

    <HomeSwiper/>

    <CategoriesSlider></CategoriesSlider>
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-4/5 m-auto" >
      {allProducts.map(product => <ProductCard key={product.id}  product={product} />
        
      )} 
    </div>
    
    <div className="flex justify-center"> 
    <Link href='/products' className="cursor-pointer text-green-700 hover:font-bold hover:underline text-center my-10 " > <p> view all products  {'>>'}</p></Link>
    </div>
    </>
  )
}
