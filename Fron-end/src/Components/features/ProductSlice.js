import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import  axios from "axios"

const initialState={
    itmes:[],
    status:null,
}

export const ProductFetch=createAsyncThunk(
    "products/productsFetch",
    ()=>{
    }
    )

const ProductsSlice=createSlice({
    name:"Products",
    initialState,
    reducers:{},
})

export default ProductsSlice.reducer