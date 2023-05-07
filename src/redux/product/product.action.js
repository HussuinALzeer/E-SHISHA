import { productType } from "./product.type"

export const setCurrentProduct = product =>({
    type:productType.SET_CURRENT_PRODUCT,
    payload:product
})