import {createSelector} from 'reselect'

const select = state => state.cart;

export const cartItem = createSelector(
    [select],
    additem => additem.item
)

export const addToCart = createSelector(
    [select],
    addToCart =>addToCart.addToCart
)