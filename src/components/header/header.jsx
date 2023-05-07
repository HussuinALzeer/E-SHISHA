import React, { useEffect, useRef, useState } from 'react'
import './header.scss';

import { FaShippingFast } from 'react-icons/fa';
import {AiFillLock} from 'react-icons/ai'
import {BsFillPhoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillInfoCircle} from 'react-icons/ai'
import { FaUserAstronaut } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import {IoMdArrowDropdown} from 'react-icons/io'
import {BiRightArrowAlt} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import Logo2 from './download.webp'
import DropDownBox from '../dropDownBox/DropDownBox';
import { Products } from '../../data/products';
import Cart from '../cart/Cart';
import { openCart } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { user } from '../../redux/user/user.selector';
import Login from '../login/Login';
import { loginBox } from '../../redux/user/user.action';
import { AiOutlineLogin } from 'react-icons/ai';
import { SignOutAsync } from '../../redux/user/user.action';
import { selectCartItemCount } from '../../redux/shopingCart/shopingCart.selector';
import { Link } from 'react-router-dom';
import { ControlPanel } from '../../redux/user/user.action';


const Header = ({openCart,user,loginBox,SignOutAsync,selectCartItemCount,ControlPanel}) => {

    const [help, setHelp] = useState(true)
    const [dropDown, setDropDown] = useState(false)
    const [boxInfo, setBoxInfo] = useState([])


    const dbox1In = () =>{
        setDropDown(true);
        setBoxInfo(Products[0].items)    
    }

    const dbox2 = () =>{
        setDropDown(true);
        setBoxInfo(Products[1].items)    
    }

    const dbox3 = () =>{
        setDropDown(true);
        setBoxInfo(Products[2].items)    
    }

    const dbox4 = () =>{
        setDropDown(true);
        setBoxInfo(Products[3].items)    
    }

    const ref = useRef(null);



  useEffect(() => {
    
    var prevScrollpos = window.pageYOffset;
    const span = ref.current

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-container").style.top = "0";
        
      } else {
        document.getElementById("header-container").style.top = "-180px";
        // span.className="header-container"
      }

    //   if(currentScrollPos < 5){
    //     span.className="normal"
    //     span.id=""
    //     console.log('log');

    //   }
      prevScrollpos = currentScrollPos;
    }

  }, [])


  return (
    
    <>
    <div className='header-container' id='header-container' ref ={ref}>
        <div className="contact">
            <div className="left-con">
                <div className="">
                    <div className="icon"><FaShippingFast></FaShippingFast></div>
                    <div className="text">Free shipping from 50 € (D)</div>
                </div>

                <div className="">
                    <div className="icon"><AiFillLock></AiFillLock></div>
                    <div className="text"> SSL encrypted</div>                   
                </div>
            </div>

            <div className="right-con">
                <div className="">
                    <div className="icon"><BsFillPhoneFill></BsFillPhoneFill></div>
                    <div className="text">+49(0)157-3572-5814</div>                   
                </div>

                <div className="">
                    <div className="icon"><MdEmail></MdEmail></div>
                    <div className="text">Hu.alzeer@gmail.com</div>                   
                </div>

                <div className='pointer' onClick={()=>{setHelp(!help)}} >
                    <div className="icon"><AiFillInfoCircle></AiFillInfoCircle></div>
                    <div className="text"> Advice</div>                   
                </div>
            </div>
            

        </div>
        <div className="nav">
            <div className="title">
                <img src={Logo2} alt="" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder='search...' />
                <BsSearch></BsSearch>
            </div>
            <div className="icons" >

                {!user ? 
                    <div className="icon pointer" onClick={()=>loginBox()}> <FaUserAstronaut />
                    <p>login</p>
                    </div>
                    :
                    <div className="icon pointer" onClick={()=>SignOutAsync()}> <AiOutlineLogin />
                    <p>{user}</p>
                    </div>
                }

                <div className="icon pointer"  > 
                   <Link to='Controlpanel/panel' onClick={()=> ControlPanel()} >
                   <AiFillHeart/>
                    <p>Wishlist</p>
                   </Link>
                   
                </div>
                <div className="icon pointer " onClick={()=>openCart()} > <AiOutlineShoppingCart/>
                    <p>Shopping cart</p>
                    {selectCartItemCount ?
                    <div className="number-icon">
                        {selectCartItemCount}
                    </div>
                    :
                    <div className=""></div>    
                }
                </div>
            </div>
            
        </div>
        <div className="links">

        <ul>
            <li>OFFER</li>
            <li>NEW HITS</li>
            <li onMouseEnter={()=>dbox1In()} onMouseLeave={()=> setDropDown(false)} >HOOKAH HOOKAHS <IoMdArrowDropdown/></li>
            <li onMouseEnter={()=>dbox2()} onMouseLeave={()=> setDropDown(false)} >TOBACCOS <IoMdArrowDropdown/></li>
            <li onMouseEnter={()=>dbox3()} onMouseLeave={()=> setDropDown(false)} >COAL <IoMdArrowDropdown/></li>
            <li>Mouthpieces & hoses</li>
            <li>tobacco heads</li>
            <li onMouseEnter={()=>dbox4()} onMouseLeave={()=> setDropDown(false)}>Accesories <IoMdArrowDropdown/></li>
            <li>E cigarette <IoMdArrowDropdown/></li>
            <li></li>
        </ul>

        <div className="icons">
            <div className="icon"><BsFacebook></BsFacebook></div>
            <div className="icon"><AiFillInstagram></AiFillInstagram></div>
        </div>

        </div>

        <div className={`helpBox ${help ? 'active' : ''}`} >
            <div className="image"></div>
            <div className="support">
                <h1>CUSTOMER SERVICE & SUPPORT</h1>
                <p>We will help and advise you on all questions</p>

                
                    <li><BiRightArrowAlt/> FAQ - frequently asked questions</li>
                    <li><BiRightArrowAlt/>warranty service</li>
                    <li><BiRightArrowAlt/>right of withdrawal</li>
                    <li><BiRightArrowAlt/>Payment and Shipping Information</li>
                    <li><BiRightArrowAlt/>payment options</li>
                    
                
            </div>
            <div className="contact">
                <div className="close" onClick={()=>{setHelp(!help)} }><AiOutlineClose/></div>
                <div className="info">
                <h3>CONTACT</h3>
                <li>Regengasse 9 50171 kerpen</li>
                <li>+49(0)157-3572-5814</li>
                <li>Hu.alzeer@gmail.com</li>
                <li> Opening hours (Mon-Fri) 10:00 - 16:00</li>
                </div>
            </div>
        </div>

        <Cart/>
        <DropDownBox items={boxInfo} dropDown={dropDown} />:
        
    </div>
    <Login/>

    </>
  )
}


const mapStateProp = (state) =>({
    user:user(state),
    selectCartItemCount:selectCartItemCount(state)
})

const mapdispatchProp = (dispatch) => ({
    openCart: cart => dispatch(openCart(cart)),
    loginBox : show => dispatch(loginBox(show)),
    SignOutAsync: SignOut => dispatch(SignOutAsync(SignOut)),

    ControlPanel: ran => dispatch(ControlPanel(ran))

})


export default connect(mapStateProp,mapdispatchProp)(Header)