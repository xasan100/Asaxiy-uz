import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Root/App';

import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"

import produtsReducer, { productsFetch } from './Components/features/ProductSlice';
const store=configureStore({
  reducer:{
    products: produtsReducer
  }
})
store.dispatch(productsFetch())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
);


