import React from 'react'
import './footer.scss'
import { FaShippingFast } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import {GiPresent} from 'react-icons/gi'
import {RiEmotionHappyFill} from 'react-icons/ri'
import image from '../../components/header/download.webp'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="tags">

            <div className="tag">
                <div className="icon"> <FaShippingFast/> </div>
                <div className="text">
                    <h3 className='title'>FREE SHIPPING</h3>
                    <p>We ship free of charge for end customers from an order value of 50 €</p>
                </div>
            </div>

            <div className="tag">
                <div className="icon"> <BiSupport/> </div>
                <div className="text">
                    <h3 className='title'>CUSTOMER SUPPORT</h3>
                    <p>Customer satisfaction is very important to us. We are at your disposal</p>
                </div>
            </div>

            <div className="tag">
                <div className="icon"> <GiPresent/> </div>
                <div className="text">
                    <h3 className='title'>SHIPPING FASTER</h3>
                    <p>We usually ship within 24 hours, so that you can receive your order as quickly as possible.</p>
                </div>
            </div>

            <div className="tag">
                <div className="icon"> <RiEmotionHappyFill/> </div>
                <div className="text">
                    <h3 className='title'>ATTRACTIVE DEALER CONDITIONS</h3>
                    <p>Benefit from our know-how in wholesale and enjoy service and attractive conditions</p>
                </div>
            </div>
        </div>


        <div className="links">

            <ul className="link">
                <img src={image} alt="" />
                <li>Regengasse 9</li>
                <li>50171 kerpen</li>
                <li>+4915735725814</li>
                <li><span></span> hu.alzeer@gmail.com</li>
                <li>Opening hours (Mon-Fri) 10:00 - 16:00</li>
            </ul>
            <ul className="link">
                <h3>LEGAL INFORMATION</h3>
                <li className='line'><span></span></li>
                <li className='hover'>battery law</li>
                <li className='hover'>elector Info</li>
                <li className='hover'>shipping info</li>
                <li className='hover'>data protection</li>
                <li className='hover'>Condtions</li>
                <li className='hover'>Sitemap</li>
                <li className='hover'>imprint</li>
                <li className='hover'>right of withrawal</li>
                <li className='hover'>payment and Shipping Information</li>
            </ul>
            <ul className="link">
                <h3>customer service</h3>
                <li className='line'><span></span></li>
                <li className='hover'>About us</li>
                <li className='hover'>Contact</li>
                <li className='hover'>payment options</li>
                <li className='hover'>become a dealer</li>
                <li className='hover'>shipping information</li>
            </ul>
            <ul className="link">
                <h3>SUBSCRIBE TO NEWSLETTER</h3>
                <li className='line'><span></span></li>
                <li> <div className="Subscribe">
                    <input type="text" placeholder='E-mail address' />
                    <button>Subscribe</button>
                    </div></li>
                <li>You can unsubscribe at any time</li>
                <li>Subscribe to the newsletter and receive a 5% discount voucher. For your next purchase in our demo shop. You will receive the voucher by email after successfully confirming your email address.</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer