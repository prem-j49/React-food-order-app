import React, { useState } from "react"

const AuthContex = React.createContext({
    cartIsShown: false,
    onShownCart: () => { },
    onHideCart: () => { }

})

export const AuthContexProvider = (props) => {

    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

    return (

        <AuthContex.Provider
            value={
                {
                    cartIsShown: cartIsShown,
                    onShownCart: showCartHandler,
                    onHideCart: hideCartHandler
                }
            }
        >
            {props.children}
        </AuthContex.Provider>

    );
}
export default AuthContex;