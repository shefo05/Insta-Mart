

import { Button } from '../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import Image from 'next/image';
import { getUserToken } from '../_Utils/utils';
import { CartResponse, CartItem } from './cart.type';

// user cart data
 /*
{
    "status": "success",
    "numOfCartItems": 10,
    "cartId": "68d3b216cf081ebcc1ce5e21",
    "data": {
        "_id": "68d3b216cf081ebcc1ce5e21",
        "cartOwner": "68bc3cbaaf954306b1fd9e9c",
        "products": [
            {
                "count": 4,
                "_id": "68d3b216cf081ebcc1ce5e22",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f39bb575d3b90bf957df",
                            "name": "TVs, Satellites & Accessories",
                            "slug": "tvs-satellites-and-accessories",
                            "category": "6439d2d167d9aa4ca970649f"
                        }
                    ],
                    "_id": "6408cc876406cd15828e8ec8",
                    "title": "TORNADO Smart LED TV 32 Inch HD With Built-In Receiver, 2 HDMI and 2 USB Inputs 32ES1500E Black - WE Offer (50 GB Free for 1 Month) 32ES1500E Black",
                    "quantity": 230,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678298246240-cover.jpeg",
                    "category": {
                        "_id": "6439d2d167d9aa4ca970649f",
                        "name": "Electronics",
                        "slug": "electronics",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
                    },
                    "brand": {
                        "_id": "64089f5824b25627a25315c7",
                        "name": "SONY",
                        "slug": "sony",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
                    },
                    "ratingsAverage": 4.5,
                    "id": "6408cc876406cd15828e8ec8"
                },
                "price": 4799
            },
            {
                "count": 1,
                "_id": "68d3c769cf081ebcc1cea205",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "_id": "6428ebc6dc1175abc65ca0b9",
                    "title": "Woman Shawl",
                    "quantity": 225,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.8,
                    "id": "6428ebc6dc1175abc65ca0b9"
                },
                "price": 191
            },
            {
                "count": 8,
                "_id": "68d3cd0ecf081ebcc1ceaef5",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "_id": "6428eb43dc1175abc65ca0b3",
                    "title": "Woman Shawl",
                    "quantity": 220,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.8,
                    "id": "6428eb43dc1175abc65ca0b3"
                },
                "price": 149
            },
            {
                "count": 16,
                "_id": "68d3cd30cf081ebcc1ceaf31",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "_id": "6428ead5dc1175abc65ca0ad",
                    "title": "Woman Shawl",
                    "quantity": 220,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.8,
                    "id": "6428ead5dc1175abc65ca0ad"
                },
                "price": 149
            },
            {
                "count": 3,
                "_id": "68d47924cf081ebcc1d39268",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "_id": "6428e997dc1175abc65ca0a1",
                    "title": "Woman Shawl",
                    "quantity": 220,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.8,
                    "id": "6428e997dc1175abc65ca0a1"
                },
                "price": 149
            },
            {
                "count": 2,
                "_id": "68d47a45cf081ebcc1d395e9",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "_id": "6428e5e6dc1175abc65ca084",
                    "title": "Woman Standart Fit Knitted Cardigan",
                    "quantity": 222,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680401893316-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.8,
                    "id": "6428e5e6dc1175abc65ca084"
                },
                "price": 499
            },
            {
                "count": 1,
                "_id": "68d47a48cf081ebcc1d39615",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "_id": "6428e509dc1175abc65ca07e",
                    "title": "Relaxed Fit Knitted Joggers Lilac",
                    "quantity": 222,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680401672268-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.8,
                    "id": "6428e509dc1175abc65ca07e"
                },
                "price": 499
            },
            {
                "count": 1,
                "_id": "68d47b6541eacdea8c704ed9",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "_id": "6428e778dc1175abc65ca08a",
                    "title": "Woman Brown Long Sleeve Tunic LT.CAMEL",
                    "quantity": 229,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680402295928-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.7,
                    "id": "6428e778dc1175abc65ca08a"
                },
                "price": 499
            },
            {
                "count": 1,
                "_id": "68d47cf841eacdea8c705a6c",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f3a8b575d3b90bf957e2",
                            "name": "Laptops & Accessories",
                            "slug": "laptops-and-accessories",
                            "category": "6439d2d167d9aa4ca970649f"
                        }
                    ],
                    "_id": "6408da1c6406cd15828e8f0a",
                    "title": "Victus 16-D1016Ne Laptop With 16-Inch Display Core I7-12700H Processor 16Gb Ram 1Tb Nvidia Geforce Rtx3050 Ti Graphics English/Arabic Ceramic White",
                    "quantity": 253,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678301723274-cover.jpeg",
                    "category": {
                        "_id": "6439d2d167d9aa4ca970649f",
                        "name": "Electronics",
                        "slug": "electronics",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
                    },
                    "brand": {
                        "_id": "64089faf24b25627a25315cd",
                        "name": "Dell",
                        "slug": "dell",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286767914.png"
                    },
                    "ratingsAverage": 4.3,
                    "id": "6408da1c6406cd15828e8f0a"
                },
                "price": 42960
            },
            {
                "count": 1,
                "_id": "68d47cf941eacdea8c705a7b",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f3a8b575d3b90bf957e2",
                            "name": "Laptops & Accessories",
                            "slug": "laptops-and-accessories",
                            "category": "6439d2d167d9aa4ca970649f"
                        }
                    ],
                    "_id": "6408de536406cd15828e8f10",
                    "title": "WH-CH510 Wireless On-Ear Bluetooth Headphones Black",
                    "quantity": 600,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678302803089-cover.jpeg",
                    "category": {
                        "_id": "6439d2d167d9aa4ca970649f",
                        "name": "Electronics",
                        "slug": "electronics",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
                    },
                    "brand": {
                        "_id": "64089f5824b25627a25315c7",
                        "name": "SONY",
                        "slug": "sony",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
                    },
                    "ratingsAverage": 4.3,
                    "id": "6408de536406cd15828e8f10"
                },
                "price": 1949
            }
        ],
        "createdAt": "2025-09-24T08:55:50.331Z",
        "updatedAt": "2025-09-24T23:23:00.347Z",
        "__v": 9,
        "totalCartPrice": 70315
    }
}
*/ 




export default async function CartPage() {
  const token = await getUserToken();
  console.log("token", token);
  
  let cartData: CartResponse | null = null;
  let error: string | null = null;

  if (token) {
    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: token as string
        }
      });

      if (res.ok) {
        cartData = await res.json();
        console.log("Cart data:", cartData);
      } else {
        error = 'Failed to fetch cart data';
      }
    } catch (err) {
      error = 'Error fetching cart data';
      console.error('Cart fetch error:', err);
    }
  }

  // Handle different states
  if (!token) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-16">
          <i className="fa-solid fa-lock text-6xl text-gray-400 mx-auto mb-4 block"></i>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Login Required</h3>
          <p className="text-gray-600 mb-6">Please log in to view your cart.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-16">
          <i className="fa-solid fa-exclamation-triangle text-6xl text-red-500 mx-auto mb-4 block"></i>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Cart</h3>
          <p className="text-gray-600 mb-6">{error}</p>
        </div>
      </div>
    );
  }

  if (!cartData || !cartData.data || cartData.data.products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-16">
          <i className="fa-solid fa-cart-shopping text-6xl text-gray-400 mx-auto mb-4 block"></i>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6">Looks like you haven&apos;t added any items to your cart yet.</p>
          <Button>Start Shopping</Button>
        </div>
      </div>
    );
  }

  const totalItems = cartData.numOfCartItems;
  const totalPrice = cartData.data.totalCartPrice;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-cart-shopping text-3xl text-green-600"></i>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>
        <div className="text-sm text-gray-600">
          {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </div>
      </div>

      {/* Cart Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-center w-[100px] font-semibold">Image</TableHead>
              <TableHead className="font-semibold ">Product</TableHead>
              <TableHead className="font-semibold text-center">Price</TableHead>
              <TableHead className="w-[150px] font-semibold text-center">Quantity</TableHead>
              <TableHead className="font-semibold text-right ">Total</TableHead>
              <TableHead className="w-[100px] font-semibold text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartData.data.products.map((item: CartItem) => (
              <TableRow key={item._id} className="hover:bg-gray-50">
                <TableCell>
                  <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={item.product.imageCover}
                      alt={item.product.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.product.title}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(item.product.ratingsAverage) ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">
                        ({item.product.ratingsAverage})
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">{item.product.brand.name}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-semibold text-gray-900">${(item.price / item.quantity).toFixed(2)}</span>
                  <div className="text-xs text-gray-500">per item</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                      disabled={item.quantity <= 1}
                    >
                      <i className="fa-solid fa-minus text-xs"></i>
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                    >
                      <i className="fa-solid fa-plus text-xs"></i>
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="h-8 w-8 p-0"
                  >
                    <i className="fa-solid fa-trash text-sm"></i>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Order Summary */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Summary</h2>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900 mb-4">
              ${(totalPrice * 1.08).toFixed(2)}
            </div>
            <div className="space-y-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full">
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
