import React, { useReducer } from "react";

import CartContext from "./Cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {

    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + (action.item.price * action.item.amount);

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }

    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (items) => {
        dispatchCartState({
            type: "ADD",
            item: items
        })
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartState({
            type: "REMOVE",
            item: id
        })
    }

    const CartContextObj = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <React.Fragment>
            <CartContext.Provider
                value={CartContextObj}
            >
                {props.children}
            </CartContext.Provider>
        </React.Fragment>
    );
}
export default CartProvider;