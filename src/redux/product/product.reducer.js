import { productType } from "./product.type";

const INITIAL_STATE = {
    product:[{}]
}

const productReducer = (state = INITIAL_STATE,action) =>
{
    switch(action.type) {
        case productType.SET_CURRENT_PRODUCT:
            return{
                ...state,
                product:action.payload
            }


        default:
            return state;
    }
}


export default productReducer;