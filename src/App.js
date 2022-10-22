import React, { useState, useContext } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import AuthContext from "./store/Auth-contex";
import CartProvider from "./store/CartProvider";

function App() {

  const ctx = useContext(AuthContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* {ctx.cartIsShown && <Cart />} */}
      {/* <Header /> */}
      <Header onShownCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
