import React from "react";

import './Items.scss'

import { BiSitemap } from "react-icons/bi";
import { AiFillInfoCircle } from "react-icons/ai";

const Items = ()=> {

    return(
        <div className="items-con">

            <div className="header">
                <div className="header-left">
                    <div className="title">Items</div>
                    <div className="icon"><BiSitemap/></div>
                </div>

                <div className="header-right">
                <AiFillInfoCircle/>
                </div>
            </div>


            <div className="body">

                <div className="tabs">

                    <div className="tab">HOOKAH HOOKAHS</div>
                    <div className="tab">TOBACCOS</div>
                    <div className="tab">COAL</div>
                    <div className="tab">ACCESORIES</div>
                    <div className="tab">E CIGARETTE</div>
                </div>

            </div>

        </div>
    )
}

export default Items