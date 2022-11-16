import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Root/App';
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"

import ProductReducer from './Components/features/ProductSlice';
const store=configureStore({
  reducer:{
    products: ProductReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
);


