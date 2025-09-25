export interface CartItem {
  _id: string;
  product: {
    _id: string;
    title: string;
    imageCover: string;
    price: number;
    ratingsAverage: number;
  };
  quantity: number;
  price: number;
}

export interface CartResponse {
  status: string;
  numOfCartItems: number;
  data: {
    _id: string;
    cartOwner: string;
    products: CartItem[];
    totalCartPrice: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface AddToCartRequest {
  productId: string;
}

export interface UpdateCartQuantityRequest {
  count: number;
}



export type AddToCartResponse = {
  status: string;
  numOfCartItems: number;
  data: {
    _id: string;
    cartOwner: string;
    products: CartItem[];
    totalCartPrice: number;
    createdAt: string;
    updatedAt: string;
  };
}

