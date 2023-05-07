import React, { useState } from 'react'
import './login.scss'
import {AiOutlineClose} from 'react-icons/ai'


import { connect } from 'react-redux';
import { createUserAsync } from '../../redux/user/user.action';
import { Show } from '../../redux/user/user.selector';
import { loginBox } from '../../redux/user/user.action';
import { Link } from 'react-router-dom';

const Login = ({createUserAsync,Show,loginBox}) => {


    const submitform = (event) =>{
        event.preventDefault()

        const formData = new FormData(event.target)
        
        createUserAsync(formData)
    }

  return (
    <div className={`login-con  ${Show ? 'show' : '' }`}>
            
            <div className={`box  ${Show ? 'show' : '' }`}>
                <div className="icon"><AiOutlineClose  onClick={()=> loginBox()} /></div>
                
                <form onSubmit={submitform}>

                    <h1>Login</h1>
                    <input type="email" name='email' placeholder='email' required/>

                    <input type="password" name='password' placeholder='password' required/>

                    <div className="btns">
                        <button  type='submit' >Login</button>
                    </div>

                    <div className="text">
                    <h3>forgot your password ?</h3>
                    <h3 onClick={()=> loginBox()} > <Link to='/register'>new here ? make an account</Link></h3>
                    </div>
                    
                </form>
                
                
            </div>

    </div>
  )
}


const mapStateProp = state =>({
    Show:Show(state)
})

const mapDispatchProp = dispatch =>({

    createUserAsync: user => dispatch(createUserAsync(user)),
    loginBox: show => dispatch(loginBox(show))
})

export default connect(mapStateProp,mapDispatchProp)(Login)