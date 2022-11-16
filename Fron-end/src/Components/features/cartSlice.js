import {createSlice} from "@reduxjs/toolkit"

const initialState={
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmount:0,

}
const  cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){

         const tempProduct={...action.payload,cartQuanty:1};
        state.cartItems.push(tempProduct);  
        },
    },
});

export const { addToCart }=cartSlice.actions;
export default cartSlice.reducer;