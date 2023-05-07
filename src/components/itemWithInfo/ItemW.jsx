import React, { useEffect, useState } from 'react'
import './itemW.scss'
import { FaShippingFast } from 'react-icons/fa'

import { FiChevronRight } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'

import { motion ,AnimatePresence} from 'framer-motion'

import { cartItem } from '../../redux/cart/cart.selector'
import { connect } from 'react-redux';


import { addToCart } from '../../redux/shopingCart/shoppingCart.action'

const ItemW = ({item,AddItemToCart,addToCart}) => {


  return (
    <motion.div className='itemW-con'
    initial={{opacity:0}}
             animate={{opacity:1}}
             exit={{opacity:0}}
             transition={{duration:.5,ease:'easeInOut'}}
    
    >
        <div className="titles">
            <div className="text">home</div>
            <div className="icon"><FiChevronRight/></div>
            <div className="text">hookah hookahs</div>
            <div className="icon"><FiChevronRight/></div>
            <div className="text">Smokah</div>
            <div className="icon"><FiChevronRight/></div>
            <div className="text">picasso</div>
        </div>

        <div className="item">
            <div className="image">
                <img src={item[0].image} alt="" />
            </div>

            <div className="info">
                <div className="title">{item[0].title}</div>
                <div className="line"></div>
                <div className="item-number">Item No.{item[0].itemNo}</div>
                <div className="line"></div>

                <div className="marke">{item[0].markeName}</div>

                <div className="ProductInformation">
                    <h2>Product Information :</h2>
                    <p>"{item[0].marke}"</p>
                    <div className="text">{item[0].ProductInformation}</div>
                </div>

                <div className="ScopeOfDelivery">
                    <h2>Scope of delivery :</h2>
                    <p>{item[0].Scopeofdelivery}</p>
                </div>


            </div>

            <div className="addToCart">

                <div className="box">
                    
                    <p className='price'>€{item[0].price}</p>
                    <p className='vat'>incl. 19% VAT., free delivery</p>
                    <p className='manufactor'>RRP of the manufacturer : 199.00 €</p>
                    <p className='save'>(You save 14.62% , i.e. €29.10 )</p>
                    <div className="line"></div>
                    <p className='delivery'> <FaShippingFast/> <span>immediately available</span> </p>
                    <p className='deliveryTime'>Delivery time: 2 - 3 working days</p>
            

                    <div className="add">
                        <button onClick={()=> addToCart(item)} >ADD To CART</button>
                    </div>

                    <div className="icons">
                        <div className="icon"><AiFillHeart/></div>
                    </div>
                </div>
            </div>

        </div>
    </motion.div>
  )
}

const mapStateProp = (state) => ({
    item :cartItem(state),
})


const mapDispatchProp = dispatch => ({
    
    addToCart: addItem => dispatch (addToCart(addItem))
})

export default connect(mapStateProp,mapDispatchProp)(ItemW)