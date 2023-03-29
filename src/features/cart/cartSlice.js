import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: cartItems,
    amount: cartItems.length, 
    total: 0,
    isLoading: true
}
const url='https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems',()=>{
    return fetch(url)
        .then((res)=>res.json())
        .catch(err=>console.log(err))
})

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state)=>{
            state.cartItems = []
        },
        removeItem: (state, action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(cartItem=>cartItem.id !== itemId)
        },
        incrementItem: (state, action)=>{
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item)=>item.id === itemId)
            cartItem.amount = cartItem.amount+1;
            
        },
        decrementItem: (state, action)=>{
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item)=>item.id===itemId)
            if(cartItem.amount>0){
                cartItem.amount=cartItem.amount-1
            }
            
        },
        calculateTotal: (state)=>{
            let amount = 0
            let total = 0

            state.cartItems?.forEach((item)=>{
                amount += item.amount;
                total += item.amount*item.price;
            })
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers:{
        [getCartItems.pending]: (state)=>{
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action)=>{
            state.isLoading = false;
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state)=>{
            state.isLoading = false;
        },
    }
});
console.log(cartSlice);
export const {clearCart, removeItem, incrementItem, decrementItem, calculateTotal}=cartSlice.actions;
export default cartSlice.reducer;