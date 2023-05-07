import React, { useEffect, useState } from 'react'
import './productpage.scss'
import {FiChevronRight} from 'react-icons/fi'

import { connect } from 'react-redux'

import { List } from '../../redux/product/product.selector'
import { motion ,AnimatePresence} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../../redux/cart/cart.action'

const Productpage = ({List ,addItem}) => {
    
    const navigate = useNavigate()

  return (
    <div className='product-con'>
        <div className="titles-line">
            <div className="text">Home</div>
            <div className="icon"><FiChevronRight/> </div>
            <div className="text">HOOKAH </div>
            <div className="icon"> <FiChevronRight/></div>
            <div className="text">SMOKAH</div>
        </div>

        <div className="title">Smokah</div>

        <div className="line"></div>
        
        <div className="warpper">
        <AnimatePresence mode='popLayout'>

            {List?.map((item) =>(
                <motion.div
                initial={{opacity:0}}
             animate={{opacity:1}}
             exit={{opacity:0}}
             transition={{duration:.5,ease:'easeInOut'}}

             onClick={()=>{
                navigate('/item');
                addItem(item)
            
            }} // action
             
             className="item" key={item.id}>

                    <div className="img">
                        <img src={item.image} alt="" />
                    </div>

                    <div className="title">{item.title}</div>
                    
                    <div className="info">
                        <h3>{item.price}</h3>
                        <p>incl. 19% VAT., free delivery</p>
                        <p>immediately available</p>
                        <p>Delivery time: 2 - 3 working days</p>
                    </div>
                </motion.div>
              ))
            
            }
            </AnimatePresence>
        </div>



    </div>
  )
}

const mapStateProp = (state) =>({
currentProduct:state.product.product,
List:List(state)
})

const mapDispatchProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(mapStateProp,mapDispatchProps)(Productpage)