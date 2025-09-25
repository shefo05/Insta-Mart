

export type ProductType = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: CategoryType;
    imageCover: string;
    images: string[];
    brand: BrandType;
    ratingsAverage: number;
    
}

export type CategoryType = {
    _id: string;
    name: string;
    image: string;
}

export type BrandType = {
    _id: string;
    name: string;
    image: string;
}
