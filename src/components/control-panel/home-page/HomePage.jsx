import React from "react";
import { useLocation, useParams } from 'react-router-dom'

import {BiLogOutCircle} from 'react-icons/bi'
import { BsCart4 } from "react-icons/bs";
import {HiUsers} from 'react-icons/hi'
import { BiSitemap } from "react-icons/bi";

import './homePage.scss'

import Items from "../items/Items";

const HomePage = () => {

//     const {id} =useParams()
//   console.log(id);

    return(
        <div className="ControlpanelCon">
            
            <div className="left-tabs">

                <span></span>
                
                <div className="title">
                    <h1>Control Panel</h1>
                </div>

                <div className="line"></div>

                <ul className="tabs">
                    <li>Items <BiSitemap/></li>
                    <li>Order<BsCart4/></li>
                    <li>Users <HiUsers/></li>  
                </ul>


                <div className="icons">
                    <div className="icon">
                        <BiLogOutCircle/>
                    </div>

                    

                    <div className="user">
                        Admin
                    </div>
                </div>
            </div>

            <div className="right-panel">

                <Items/>

            </div>

        </div>
    )
}


export default HomePage