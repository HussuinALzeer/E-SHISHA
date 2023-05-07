import { userType } from "./user.type";

const INITIAL_STATE ={
    User:[],
    show:true,
    controlPanel:true

}

const userReducer = (state= INITIAL_STATE , action) => {

    switch(action.type){  

        case userType.EMAIL_SIGN_IN_SUCCESS:
            return{
                ...state,
                User:action.payload
            }

        case userType.LOGIN_BOX: 
            return{
                ...state,
                show: !state.show
            }

        case userType.ADD_USER_TO_DATABASE:
            return{
                ...state,
                User:action.payload
            }    


        case userType.SIGNOUT:
            return{
                ...state,
                User:action.payload

            }    

        case userType.CONTROL_PANEL:
            return{
                ...state,
                controlPanel: !state.controlPanel
            }    

            default:
                return state;
    }
}

export default userReducer