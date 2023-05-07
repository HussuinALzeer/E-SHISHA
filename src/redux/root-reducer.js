import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
 

import productReducer from "./product/product.reducer";
import Cartreducer from "./cart/cart.reducer";
import shoppingCartreducer from "./shopingCart/shoppingCart.reduce";
import userReducer from "./user/user.reducer";

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['product','cart','shoppingcart','userReducer']
}

const rootReducer = combineReducers({
    product: productReducer,
    cart : Cartreducer,
    shoppingcart:shoppingCartreducer,
    userReducer:userReducer

})

export default persistReducer(persistConfig,rootReducer)