import {createSelector} from 'reselect'

const select = state => state.userReducer;

export const user = createSelector(
    [select],
    additem => additem.User
)

export const Show = createSelector(
    [select],
    box => box.show
)

export const ControlPanel = createSelector (
    [select],
    Control => Control.controlPanel
)

