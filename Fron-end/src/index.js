// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './Root/App';

// import {Provider} from "react-redux"
// import {configureStore,} from "@reduxjs/toolkit"

// import productsReducer, { productsFetch } from './Components/features/ProductSlice';
// import { productsApi } from './Components/features/ProductsApi';

// const store=configureStore({
//   reducer: {
//     products: productsReducer,
//     [productsApi.reducerPath]: productsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productsApi.middleware),
// });

// store.dispatch(productsFetch())

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store} >
//     <App />
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom";
import App from './Root/App';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { productsFetch } from './Components/features/ProductSlice';
import { productsApi } from './Components/features/ProductsApi';
// import productsReducer, { productsFetch } from "";
// import cartReducer, { getTotals } from "";

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);