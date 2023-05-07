import {createSelector} from 'reselect'

const select = state => state.product;

export const selectProductList = createSelector(
    [select],
    productL=> productL.product
)

export const List = createSelector(
    [selectProductList],
    prolist => prolist.list
)