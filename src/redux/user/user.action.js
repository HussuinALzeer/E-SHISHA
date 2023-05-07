import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase/firebase";
import { createBrowserHistory } from 'history';

import {  signOut } from "firebase/auth";


import { userType } from "./user.type";


export const browserHistory = createBrowserHistory();


export const emailSignInStart = (EmailandPassword)=>({
    type:userType.EMAIL_SIGN_IN_START,
    payload:EmailandPassword
});

export const emailSignInSuccess = (user)=>({
    type: userType.EMAIL_SIGN_IN_SUCCESS,
    payload:user
})

export const emailSignInFailure = (error) =>({
    type: userType.EMAIL_SIGN_IN_FAILURE,
    payload:error
})

export const loginBox = login =>({
    type:userType.LOGIN_BOX,
    payload:login
})

export const AddUserToDataBase = data => ({
    type:userType.ADD_USER_TO_DATABASE,
    payload:data
})


export const SignOutAccount = account => ({
    type:userType.SIGNOUT,
    payload:account
})


export const ControlPanel = account => ({
  type:userType.CONTROL_PANEL,
  payloadL:account
})



export const createUserAsync = (formData) => {

    return dispatch =>{

        const payload = Object.fromEntries(formData)

        dispatch(emailSignInSuccess(payload.email))

        createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
}


export const createUser2Async = (formData) =>{

    return async dispatch =>{


        const payload = Object.fromEntries(formData)

        console.log(payload);

        const {firsName,lastName,country} = payload

        // console.log(firsName,lastName);

        createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then(async (userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          const docRef = await addDoc(collection(db, "users"), {
            firstname: firsName,
            lastname: lastName,
            country: country,
            
            houseNumber: payload.houseNumber,
            street:payload.street,
            postcode:payload.postCode,
            location:payload.location,
            email:payload.email,
            phone:payload.phone,
            
          });

          dispatch(AddUserToDataBase(docRef.id))

          dispatch(emailSignInSuccess(payload.email))

          browserHistory.push('/')
          window.location.reload(false);

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
        

        

    }
} 


export const SignOutAsync = (formData) =>{

    return async dispatch =>{
       
        signOut(auth).then(() => {


            dispatch(emailSignInSuccess())
            console.log('log out');
          }).catch((error) => {
            // An error happened.
          });
    }
} 


