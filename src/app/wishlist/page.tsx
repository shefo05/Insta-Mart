

import { Button } from '../../components/ui/button';
import { getUserToken } from '../_Utils/utils';
import ProductCard from '../_Components/ProductCard/ProductCard';
import { ProductType } from '../_Types/product.type';

// user wishlist data
// {
//   "status": "success",
//   "count": 3,
//   "data": [
//       {
//           "sold": 21156,
//           "images": [
//               "1680403397482-1.jpeg",
//               "1680403397482-2.jpeg",
//               "1680403397483-3.jpeg",
//               "1680403397485-4.jpeg"
//           ],
//           "subcategory": [
//               {
//                   "_id": "6407f1bcb575d3b90bf95797",
//                   "name": "Women's Clothing",
//                   "slug": "women's-clothing",
//                   "category": "6439d58a0049ad0b52b9003f"
//               }
//           ],
//           "ratingsQuantity": 18,
//           "_id": "6428ebc6dc1175abc65ca0b9",
//           "title": "Woman Shawl",
//           "slug": "woman-shawl",
//           "description": "Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen",
//           "quantity": 225,
//           "price": 191,
//           "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
//           "category": {
//               "_id": "6439d58a0049ad0b52b9003f",
//               "name": "Women's Fashion",
//               "slug": "women's-fashion",
//               "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
//           },
//           "brand": {
//               "_id": "64089bbe24b25627a253158b",
//               "name": "DeFacto",
//               "slug": "defacto",
//               "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
//           },
//           "ratingsAverage": 4.8,
//           "createdAt": "2023-04-02T02:43:18.400Z",
//           "updatedAt": "2025-09-25T16:33:52.246Z",
//           "__v": 0,
//           "id": "6428ebc6dc1175abc65ca0b9"
//       },
//       {
//           "sold": 7482,
//           "images": [
//               "1680401893496-2.jpeg",
//               "1680401893496-1.jpeg",
//               "1680401893497-4.jpeg",
//               "1680401893496-3.jpeg"
//           ],
//           "subcategory": [
//               {
//                   "_id": "6407f1bcb575d3b90bf95797",
//                   "name": "Women's Clothing",
//                   "slug": "women's-clothing",
//                   "category": "6439d58a0049ad0b52b9003f"
//               }
//           ],
//           "ratingsQuantity": 5,
//           "_id": "6428e5e6dc1175abc65ca084",
//           "title": "Woman Standart Fit Knitted Cardigan",
//           "slug": "woman-standart-fit-knitted-cardigan",
//           "description": "Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen",
//           "quantity": 222,
//           "price": 499,
//           "priceAfterDiscount": 449,
//           "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680401893316-cover.jpeg",
//           "category": {
//               "_id": "6439d58a0049ad0b52b9003f",
//               "name": "Women's Fashion",
//               "slug": "women's-fashion",
//               "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
//           },
//           "brand": {
//               "_id": "64089bbe24b25627a253158b",
//               "name": "DeFacto",
//               "slug": "defacto",
//               "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
//           },
//           "ratingsAverage": 4.8,
//           "createdAt": "2023-04-02T02:18:14.346Z",
//           "updatedAt": "2025-09-25T15:10:36.683Z",
//           "__v": 0,
//           "id": "6428e5e6dc1175abc65ca084"
//       },
//       {
//           "sold": 3953,
//           "images": [
//               "1678301723376-3.jpeg",
//               "1678301723375-2.jpeg",
//               "1678301723376-4.jpeg",
//               "1678301723375-1.jpeg",
//               "1678301723377-5.jpeg",
//               "1678301723377-6.jpeg"
//           ],
//           "subcategory": [
//               {
//                   "_id": "6407f3a8b575d3b90bf957e2",
//                   "name": "Laptops & Accessories",
//                   "slug": "laptops-and-accessories",
//                   "category": "6439d2d167d9aa4ca970649f"
//               }
//           ],
//           "ratingsQuantity": 6,
//           "_id": "6408da1c6406cd15828e8f0a",
//           "title": "Victus 16-D1016Ne Laptop With 16-Inch Display Core I7-12700H Processor 16Gb Ram 1Tb Nvidia Geforce Rtx3050 Ti Graphics English/Arabic Ceramic White",
//           "slug": "victus-16-d1016ne-laptop-with-16-inch-display-core-i7-12700h-processor-16gb-ram-1tb-nvidia-geforce-rtx3050-ti-graphics-englisharabic-ceramic-white",
//           "description": "NVIDIA GeForce RTX 3060, 6 GB GDDR6\n15.6\", FHD 1920x1080, 120Hz, Non-Touch, AG, WVA, LED-Backlit, 300 nit, Narrow Border\n16 GB, 2 x 8 GB, DDR5, 4800 MHz, dual-channel\n512GB M.2 PCIe NVMe Solid State Drive, Nahimic 3D Audio\nOffice Home & Student 2021, US English orange qwerty backlit keyboard with numeric keypad and G-key",
//           "quantity": 253,
//           "price": 42960,
//           "availableColors": [],
//           "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678301723274-cover.jpeg",
//           "category": {
//               "_id": "6439d2d167d9aa4ca970649f",
//               "name": "Electronics",
//               "slug": "electronics",
//               "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
//           },
//           "brand": {
//               "_id": "64089faf24b25627a25315cd",
//               "name": "Dell",
//               "slug": "dell",
//               "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286767914.png"
//           },
//           "ratingsAverage": 4.3,
//           "createdAt": "2023-03-08T18:55:24.096Z",
//           "updatedAt": "2025-09-25T16:39:09.410Z",
//           "__v": 0,
//           "id": "6408da1c6406cd15828e8f0a"
//       }
//   ]
// }




export default async function WishlistPage() {
  const token = await getUserToken();
  
  type WishlistResponse = {
    status: string;
    count: number;
    data: ProductType[];
  } | null;

  let wishlistData: WishlistResponse = null;
  let error: string | null = null;

  if (token) {
    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: {
          token: token as string
        }
      });

      if (res.ok) {
        wishlistData = await res.json();
        console.log("wishlist data:", wishlistData);
      } else {
        error = 'Failed to fetch wishlist data';
      }
    } catch (err) {
      error = 'Error fetching wishlist data';
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
          <p className="text-gray-600 mb-6">Please log in to view your wishlist.</p>
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

  if (!wishlistData || !wishlistData.data || wishlistData.data.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-16">
          <i className="fa-solid fa-heart text-6xl text-gray-400 mx-auto mb-4 block"></i>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-6">Looks like you haven&apos;t added any items to your cart yet.</p>
          <Button>Start Shopping</Button>
        </div>
      </div>
    );
  }

  return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-4/5 mx-auto mt-20" >
      {wishlistData.data?.map((product: ProductType) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  )
 
  // return (
  //   <div className="container mx-auto px-4 py-8 max-w-6xl">

  //     <div className="flex justify-between items-center mb-8">
  //       <div className="flex items-center gap-3">
  //         <i className="fa-solid fa-cart-shopping text-3xl text-green-600"></i>
  //         <h1 className="text-3xl font-bold text-gray-900">wishlist</h1>
  //       </div>
  //       <div className="text-sm text-gray-600">
  //         {totalItems} {totalItems === 1 ? 'item' : 'items'}
  //       </div>
  //     </div>

  //     {/* Cart Table */}
  //     <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
  //       <Table>
  //         <TableHeader>
  //           <TableRow className="bg-gray-50">
  //             <TableHead className="text-center w-[100px] font-semibold">Image</TableHead>
  //             <TableHead className="font-semibold ">Product</TableHead>
  //             <TableHead className="font-semibold text-center">Price</TableHead>
  //             <TableHead className="w-[150px] font-semibold text-center">Quantity</TableHead>
  //             <TableHead className="font-semibold text-right ">Total</TableHead>
  //             <TableHead className="w-[100px] font-semibold text-center">Actions</TableHead>
  //           </TableRow>
  //         </TableHeader>
  //         <TableBody>
  //           {wishlistData.data.products.map((item: any) => (
  //             <TableRow key={item._id} className="hover:bg-gray-50">
  //               <TableCell>
  //                 <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
  //                   <Image
  //                     src={item.product.imageCover}
  //                     alt={item.product.title}
  //                     fill
  //                     className="rounded-lg object-cover"
  //                   />
  //                 </div>
  //               </TableCell>
  //               <TableCell>
  //                 <div>
  //                   <h3 className="font-semibold text-gray-900 mb-1">{item.product.title}</h3>
  //                   <div className="flex items-center gap-1 mb-2">
  //                     <div className="flex text-yellow-400">
  //                       {[...Array(5)].map((_, i) => (
  //                         <span key={i} className={i < Math.floor(item.product.ratingsAverage) ? 'text-yellow-400' : 'text-gray-300'}>
  //                           ★
  //                         </span>
  //                       ))}
  //                     </div>
  //                     <span className="text-sm text-gray-500 ml-1">
  //                       ({item.product.ratingsAverage})
  //                     </span>
  //                   </div>
  //                   <div className="text-xs text-gray-500">
  //                     <span className="bg-gray-100 px-2 py-1 rounded">{item.product.brand.name}</span>
  //                   </div>
  //                 </div>
  //               </TableCell>
  //               <TableCell>
  //                 <span className="font-semibold text-gray-900">${(item.price / item.count).toFixed(2)}</span>
  //                 <div className="text-xs text-gray-500">per item</div>
  //               </TableCell>
  //               <TableCell>
  //                 <div className="flex items-center justify-center gap-2">
  //                   <Button
  //                     size="sm"
  //                     variant="outline"
  //                     className="h-8 w-8 p-0"
  //                     disabled={item.count <= 1}
  //                   >
  //                     <i className="fa-solid fa-minus text-xs"></i>
  //                   </Button>
  //                   <span className="w-8 text-center font-medium">{item.count}</span>
  //                   <Button
  //                     size="sm"
  //                     variant="outline"
  //                     className="h-8 w-8 p-0"
  //                   >
  //                     <i className="fa-solid fa-plus text-xs"></i>
  //                   </Button>
  //                 </div>
  //               </TableCell>
  //               <TableCell>
  //                 <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
  //               </TableCell>
  //               <TableCell>
  //                 <Button
  //                   size="sm"
  //                   variant="destructive"
  //                   className="h-8 w-8 p-0"
  //                 >
  //                   <i className="fa-solid fa-trash text-sm"></i>
  //                 </Button>
  //               </TableCell>
  //             </TableRow>
  //           ))}
  //         </TableBody>
  //       </Table>
  //     </div>

  //     {/* Order Summary */}
  //     <div className="mt-8 bg-gray-50 rounded-lg p-6">
  //       <div className="flex justify-between items-start">
  //         <div>
  //           <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Summary</h2>
  //           <div className="space-y-1 text-sm text-gray-600">
  //             <div className="flex justify-between">
  //               <span>Subtotal ({totalItems} items)</span>
  //               <span>${totalPrice.toFixed(2)}</span>
  //             </div>
  //             <div className="flex justify-between">
  //               <span>Shipping</span>
  //               <span className="text-green-600">Free</span>
  //             </div>
  //             <div className="flex justify-between">
  //               <span>Tax</span>
  //               <span>${(totalPrice * 0.08).toFixed(2)}</span>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="text-right">
  //           <div className="text-2xl font-bold text-gray-900 mb-4">
  //             ${(totalPrice * 1.08).toFixed(2)}
  //           </div>
  //           <div className="space-y-2">
  //             <Button className="w-full bg-blue-600 hover:bg-blue-700">
  //               Proceed to Checkout
  //             </Button>
  //             <Button variant="outline" className="w-full">
  //               Clear Cart
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
