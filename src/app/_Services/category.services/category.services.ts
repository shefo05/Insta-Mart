import { CategoryType } from "_/app/_Types/product.type";



export async function getAllCategories(): Promise<CategoryType[] | null> {
    try {
        
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
        const finalres = await res.json();
        return (finalres?.data as CategoryType[]) || null

    } catch (error) {
        return null
    }

}