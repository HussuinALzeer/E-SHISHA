import { shopingCartType } from "./shoppingCart.type";
import { addItemTocart } from "./shoppingCart.utils";

const INITIAL_STATE ={
    CartItemsAdd:[]
}


const shoppingCartreducer = (state= INITIAL_STATE , action) => {

    switch(action.type){  

        case shopingCartType.ADD_TO_CART:
            return{
                ...state,
                CartItemsAdd:addItemTocart(state.CartItemsAdd,action.payload)
            }

        case shopingCartType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                CartItemsAdd: state.CartItemsAdd.filter(item => item[0].id !== action.payload)
            }    

            default:
                return state;
    }
}

export default shoppingCartreducer