import { shopingCartType } from "./shoppingCart.type"



export const addToCart = items =>({
    type:shopingCartType.ADD_TO_CART,
    payload:items
})

export  const clearItemFromCart = items =>({
    type:shopingCartType.CLEAR_ITEM_FROM_CART,
    payload:items
})