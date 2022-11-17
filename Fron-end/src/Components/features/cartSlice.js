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
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );

   if (itemIndex>=0) {
    state.cartItems[itemIndex].cartQuantity +=1;
    toast.info(`increased ${state.cartItems[itemIndex].name} product quantity`,{ 
        position:"bottom-left" ,
    })
   }
   else {
    const tempProductItem={...action.payload,cartQuantity:1};
    state.cartItems.push(tempProductItem); 
    toast.success(` ${action.payload.name}  added to cart` ,{
    position:"bottom-left" ,
   })
    }
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
 }
},
});

export const { addToCart }=cartSlice.actions;
export default cartSlice.reducer;
