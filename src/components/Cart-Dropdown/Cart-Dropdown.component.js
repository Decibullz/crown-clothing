import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../Cart-Item/Cart-Item.component'
import CustomButton from '../Custom-Button/Custom-Button.component'

import './Cart-Dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItems.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
