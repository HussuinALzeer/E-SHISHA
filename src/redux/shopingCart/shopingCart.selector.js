import {createSelector} from 'reselect'

const select = state => state.shoppingcart;

export const shopingCartItem = createSelector(
    [select],
    additem => additem.CartItemsAdd
)


export const selectCartItemCount = createSelector(
    [shopingCartItem],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
            0
        )
)


export const selectoreCartTotalPrice = createSelector (
    [shopingCartItem],
    cartItems => 
        cartItems.reduce((accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem[0].price ,0)
)