import React, { useState } from 'react'
import './dropdownbox.scss'

import { motion ,AnimatePresence} from 'framer-motion'

import { connect } from 'react-redux'
import { setCurrentProduct } from '../../redux/product/product.action'
import { useNavigate } from 'react-router-dom'



const DropDownBox = ({items,dropDown,setCurrentProduct}) => {
  
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const setProduct = (item) =>{
    setCurrentProduct(item)
    // console.log(item);
  }


  return (
    <div className={`dropdownboxCon  ${dropDown && 'active'}  ${show && 'active'}`  }
    onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}
    

    >

        {items.map((item) => (
          // <AnimatePresence mode='popLayout'>
            <motion.div
             
             initial={{opacity:0}}
             animate={{opacity:1}}
             exit={{opacity:0}}
             transition={{duration:.5,ease:'easeInOut'}}

             onClick={
              () =>{setProduct(item);
                navigate('/product')
              }} // to set the product

            className="box" key={item.id} >
                <img src={item.image} alt="" />
                <div className="text">{item.text}</div>
            </motion.div>
          // </AnimatePresence>
        ))}
        
    </div>
  )
}
const mapDispatchProps = dispath =>({
  setCurrentProduct: product => dispath(setCurrentProduct(product))
})

export default connect(null,mapDispatchProps)(DropDownBox)
// export default DropDownBox