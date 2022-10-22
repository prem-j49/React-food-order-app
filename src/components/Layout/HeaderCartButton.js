import React, { useContext } from "react";

import CartContext from "../../store/Cart-context";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

    const cartItemCtx = useContext(CartContext);

    console.log(cartItemCtx.items);
    const numberOfCartItem = cartItemCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    console.log(numberOfCartItem);

    return (
        <button className={classes.button} onClick={props.onShownCart}>
        {/* <button className={classes.button} onClick={cartItemCtx.onShownCart}> */}
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    );
}

export default HeaderCartButton;