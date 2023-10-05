import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "Cart",
    initialState : {items:[]},
    reducers:{
            
            addItem: (state,action)=>{
                // mutating the state
                state.items.push(action.payload);
            },
            removeIem : (state,action) =>{
                state.items.pop();
            },
            clearCart : (state,action) => {
                state.items.length = 0;
            }
        
    }
})

export const{addItem,removeIem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;