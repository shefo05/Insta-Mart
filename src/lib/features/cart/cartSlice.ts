// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CartItem } from '../../app/_Types/cart.type';

// interface CartState {
//   items: CartItem[];
//   totalItems: number;
//   totalPrice: number;
//   isLoading: boolean;
//   error: string | null;
// }

// const initialState: CartState = {
//   items: [],
//   totalItems: 0,
//   totalPrice: 0,
//   isLoading: false,
//   error: null,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     setCart: (state, action: PayloadAction<{ items: CartItem[]; totalItems: number; totalPrice: number }>) => {
//       state.items = action.payload.items;
//       state.totalItems = action.payload.totalItems;
//       state.totalPrice = action.payload.totalPrice;
//       state.isLoading = false;
//       state.error = null;
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.isLoading = action.payload;
//     },
//     setError: (state, action: PayloadAction<string | null>) => {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.totalItems = 0;
//       state.totalPrice = 0;
//       state.error = null;
//     },
//     updateItemQuantity: (state, action: PayloadAction<{ itemId: string; quantity: number }>) => {
//       const item = state.items.find(item => item._id === action.payload.itemId);
//       if (item) {
//         item.quantity = action.payload.quantity;
//         item.price = item.product.price * action.payload.quantity;
//         state.totalPrice = state.items.reduce((total, item) => total + item.price, 0);
//         state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
//       }
//     },
//     removeItem: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter(item => item._id !== action.payload);
//       state.totalPrice = state.items.reduce((total, item) => total + item.price, 0);
//       state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
//     },
//   },
// });

// export const { setCart, setLoading, setError, clearCart, updateItemQuantity, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;


