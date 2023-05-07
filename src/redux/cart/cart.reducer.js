import { CartType } from "./cart.type";

const INITIAL_STATE ={
    open : false,
    item:[{}],
    
}

const Cartreducer = (state= INITIAL_STATE , action) => {

    switch(action.type){
         case CartType.OPEN_CART :
            return{
                ...state,
                open:!state.open
            }

         case CartType.ITEM:
            return{
                ...state,
                item:[action.payload]
            }   

        case CartType.CART_ITEM:
            return{
                
                cartItems: [...state.cartItems,action.payload]
            }    

        case CartType.ADD_ITEM_TO_CART: 
        return {
            ...state,
            addToCart:[...state.addToCart ,action.payload]
        }    

            default:
                return state;
    }
}

export default Cartreducer