import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: cartItems,
    amount: cartItems.length, 
    total: 0,
    isLoading: true
}


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

            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total += item.amount*item.price;
            })
            state.amount = amount;
            state.total = total;
        }
    }
});
console.log(cartSlice);
export const {clearCart, removeItem, incrementItem, decrementItem, calculateTotal}=cartSlice.actions;
export default cartSlice.reducer;