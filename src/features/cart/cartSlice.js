import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name:'cart',
   initialState:[

   ],
   reducers:{
    addToCart:(state,action)=>{
        const itemInCart = state.find((item) => item.id === action.payload.id);
        if(itemInCart){
            itemInCart.quantity += 1;
        }else{
            state.push({...action.payload, quantity: 1});
        }
    },
    removeFromCart:(state,action)=>{
        console.log(action.payload,state);
        const index = state.find((item) => item.id === action.payload.id);
        if(index !== -1){
            state.splice(index, 1);
        }
    },
    clearCart:(state)=>{
        return [];
    },
   }
})
export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;