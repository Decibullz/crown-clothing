import React from 'react'
import { connect } from 'react-redux'

import CartItem from '../Cart-Item/Cart-Item.component'
import CustomButton from '../Custom-Button/Custom-Button.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown)
