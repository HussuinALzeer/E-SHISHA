import React from "react";

import './checkout.scss'

import { connect } from "react-redux";

import { shopingCartItem } from "../../redux/shopingCart/shopingCart.selector";
const CheckOut = ({shopingCartItem}) => {

    console.log(shopingCartItem);
    return(
        <div className="checkout-con">
            
            <div className="box">
                
                <div className="titles">
                    <div className="photo w-10">
                        Picture
                    </div>
                    <div className="Article w-30">
                        Article
                    </div>

                    <div className="num w-10">
                        Unite   
                    </div>    

                    <div className="price w-10">
                        unite price
                    </div>

                    <div className="price w-10">
                        Total price
                    </div>


                </div>

                {shopingCartItem.map((item,index) =>(
                    <div className="conconcon" key={item[0].itemNo}>
                        <div className="item"  >

                            <div className="image w-10">
                                <img src={item[0].image} alt="" />
                            </div>

                            <div className="info">

                                <div className="">
                                    {item[0].title}
                                </div>

                                <div className="">
                                    {item[0].itemNo}
                                </div>
                                <div className="">
                                    {item[0].marke}
                                </div>
                            </div>

                            <div className="num w-10">
                                {item.quantity}
                            </div>

                            <div className="price w-10">
                                {item[0].price} $
                            </div>

                            <div className="total w-10">
                                {item[0].price * item.quantity} $
                            </div>

                            </div>
                        <hr />
                    </div>
                    
                    
                ))}


                <div className="footerr">

                    <div className="delivery">
                        <p> <span>Delivery time </span>: 2 - 3 working days</p>
                    </div>

                    <div className="btn">
                        <button>AGREE TO PAY FOR THE ORDER</button>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

const mapStateProp = (state) =>({
    shopingCartItem:shopingCartItem(state)
})

const mapdispatchProp = (dispatch) => ({
    
})


export default connect(mapStateProp,mapdispatchProp)(CheckOut)