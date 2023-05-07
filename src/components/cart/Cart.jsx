import React, { useEffect, useState } from 'react'
import './cart.scss'
import { connect } from 'react-redux'
import { shopingCartItem } from '../../redux/shopingCart/shopingCart.selector'
import { selectCartItemCount } from '../../redux/shopingCart/shopingCart.selector'
import { selectoreCartTotalPrice } from '../../redux/shopingCart/shopingCart.selector'
import {AiFillDelete} from 'react-icons/ai'
import { clearItemFromCart } from '../../redux/shopingCart/shoppingCart.action'

import { Link } from 'react-router-dom'

const Cart = ({cart,shopingCartItem,itemCount,selectoreCartTotalPrice,clearItemFromCart}) => {
    
    const [Tax, setTax] = useState()
    
    const [delivry, setdelivry] = useState(50)
    const [Num, setNum] = useState()


    useEffect(() => {
    
        let totalAmount =  (selectoreCartTotalPrice * (19 / 100))
        
        setTax(totalAmount.toFixed(2))
    }, [selectoreCartTotalPrice])
    

    useEffect(() => {
      
        let delivryTotal = -50 + selectoreCartTotalPrice

        setdelivry(Math.abs(delivryTotal.toFixed(2)))
        setNum(delivryTotal)

    }, [selectoreCartTotalPrice])
    

     
  return (
    
    <div className={`cart-con ${cart ? 'active' : ''}`}>
        
        <div className="box">
            <div className="buttons">
                <button> <Link >to basket</Link> </button>
                <button className='green'> <Link className='green' to='checkout'>to checkout</Link> </button>
            </div>
            <div className="line"></div>

            <div className="VAT">
                <p>including 19% VAT</p>
                <p>{Tax} €</p>
            </div>

            <div className="line"></div>

            <div className="total">
                <p>total :</p>
                <p>{selectoreCartTotalPrice.toFixed(2)} €</p>
            </div>

            <div className="line"></div>
            
            <div className="items">

               

                {shopingCartItem.map((item,index) => (

                    <div className="item" key={index}>
                    <img src={item[0].image} alt="" />
                    <div className="info">
                        <p>{item.quantity}X</p>
                        <p>{item[0].title}</p>
                    </div>
                    <div className="price">
                        <span>{item[0].price}</span>
                        <AiFillDelete onClick={()=>clearItemFromCart(item[0].id)} />
                        
                    </div>
                    </div>
                ))}

                
            </div>
            
            {Num < 0 ?
                <div className="text">
                   Another {delivry} € and we will ship free of charge with DPD domestic parcel shipping within Germany
                </div>:
                <div className="text">
                    Your order is free of shipping costs with DPD domestic parcel shipping within Germany  
                </div>
            }
            
        </div>

    </div>
  )
}


const mapStateProp =(state) =>({
    cart : state.cart.open,
    shopingCartItem:shopingCartItem(state),

    itemCount:selectCartItemCount(state),
    selectoreCartTotalPrice:selectoreCartTotalPrice(state)
})

const mapDispatchProp = dispatch =>({
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(mapStateProp,mapDispatchProp)(Cart)