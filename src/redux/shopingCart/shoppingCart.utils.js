export const addItemTocart =(cartItems,cartItemToAdd) =>{
    const  existingCartItem = cartItems.find(cartItem => cartItem[0].id === cartItemToAdd[0].id)

    if(existingCartItem){ // so if i found the same id , then i will open the carItems again with map, then i will search again in the list (cartitems)
        return cartItems.map(cartItem => //  if i found the same id i will add the rest of the info to the list but i will add 1 to the quantity
            cartItem[0].id === cartItemToAdd[0].id 
            ?{...cartItem, quantity : cartItem.quantity + 1}
            
            : 
            cartItem
            )
    }

    return [...cartItems ,{...cartItemToAdd, quantity:1 }] 
}
