import React from "react";
import { BrowserRouter ,Route,Switch ,Redirect } from "react-router-dom";
import Cart from "../Components/Cart.jsx";
import Home from "../Components/Home.jsx";
import NavBar from "../Components/NavBar.jsx";

import   "./App.css"
function App() {
  return (
 <BrowserRouter> 
<NavBar/>
<Switch>
  <Route path={'/cart'} component={Cart} />
  <Route path={'/'} component={Home } />
</Switch>
    </BrowserRouter>
  );
}

export default App;