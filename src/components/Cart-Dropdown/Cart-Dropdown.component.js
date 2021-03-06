import React from 'react'

import CustomButton from '../Custom-Button/Custom-Button.component'

import './Cart-Dropdown.styles.scss'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown
