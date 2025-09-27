import { ProductType } from "../_Types/product.type";

const baseUrl = "https://ecommerce.routemisr.com/api/v1/products";

export async function getProducts (limit : string = '40' ,caching: RequestCache = "force-cache") :Promise<ProductType[] | null> {


    try {
    const response = await fetch(baseUrl+`?limit=${limit}`, {
        cache: caching
    })
    const data = await response.json()
    
    // The API returns an object with a 'data' property containing the products array
    return data.data || data;



    } catch {
        return null;
    }

}

export async function getSpecificProduct(id:string) :Promise<ProductType | null>{

    try{
        const res= await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        const productDetailsData = await res.json();
        // console.log("data", productDetailsData);
        return productDetailsData.data;
}
    catch{
        return null;
    }
}

export async function getProductsByCategory(categoryId: string, caching: RequestCache = "no-store"): Promise<ProductType[] | null> {
    try{
        const res = await fetch(`${baseUrl}?category=${categoryId}`, { cache: caching });
        if(!res.ok) return null;
        const data = await res.json();
        return data.data || null;
    } catch {
        return null;
    }
}

export async function getProductsByBrand(brandId: string, caching: RequestCache = "no-store"): Promise<ProductType[] | null> {
    try{
        const res = await fetch(`${baseUrl}?brand=${brandId}`, { cache: caching });
        if(!res.ok) return null;
        const data = await res.json();
        return data.data || null;
    } catch {
        return null;
    }
}

    