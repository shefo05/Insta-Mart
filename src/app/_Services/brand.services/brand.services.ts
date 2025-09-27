import { BrandType } from "_/app/_Types/product.type";

export async function getAllBrands(): Promise<BrandType[] | null> {
    try {
        
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands')
        const finalres = await res.json();
        return (finalres?.data as BrandType[]) || null

    } catch {
        return null
    }

}