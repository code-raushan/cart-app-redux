import React from 'react'
import { CartIcon } from '../icons'

import { useSelector } from 'react-redux'
const Navbar = () => {
  //state is nothing but the store
  const {amount} = useSelector((state)=>state.cart)
  return (
    <nav>
        <div className='nav-center'>
            <h3>Redux ToolKit</h3>
            <div className="nav-container">
              <CartIcon/>
              <div className="amount-container">
                {amount}
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar