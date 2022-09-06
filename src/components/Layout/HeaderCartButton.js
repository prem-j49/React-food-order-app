import { useContext } from "react";
import AuthContex from "../../store/Auth-contex";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

    // const ctx = useContext(AuthContex)

    return (
        <button className={classes.button} onClick={props.onShownCart}>
        {/* <button className={classes.button} onClick={ctx.onShownCart}>*/}
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}

export default HeaderCartButton;