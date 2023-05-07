import { CartType } from "./cart.type";
export const openCart  = cart => ({
    type:CartType.OPEN_CART,
    
})


export const addItem = additem =>({
    type:CartType.ITEM,
    payload:additem
})


export const CartItem =  item => ({
    type: CartType.CART_ITEM,
    payload:item
})


export const AddItemToCart = ItemCart => ({
    type: CartType.ADD_ITEM_TO_CART,
    payload:ItemCart
})