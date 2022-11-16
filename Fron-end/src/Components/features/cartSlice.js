import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify"
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
   const itemIndex =  state.cartItems.findIndex(item=> item.id===action.payload.id)
   if (itemIndex>=0) {
    state.cartItems[itemIndex].cartQuanty +=1;
    toast.info('increased product quantity',{
        position:"bottom-left" ,
    })
   }
   else {
    const tempProduct={...action.payload,cartQuanty:1};
    state.cartItems.push(tempProduct); 
        }
         
      },
    },
});

export const { addToCart }=cartSlice.actions;
export default cartSlice.reducer;