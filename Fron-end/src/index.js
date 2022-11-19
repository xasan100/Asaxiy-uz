


import React from "react";
import ReactDOM from "react-dom";
import App from './Root/App';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { productsFetch } from './Components/features/ProductSlice';
import { productsApi } from './Components/features/ProductsApi';
import cartReducer  from "./Components/features/cartSlice";


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});


store.dispatch(productsFetch());
// store.dispatch(getTotals());

// store.dispatch(getToals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);