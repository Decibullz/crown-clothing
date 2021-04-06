import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/Checkout-item/Checkout-Item.component'
import StripeCheckoutButton from '../../components/Stripe-Button/Stripe-Button.component'

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'

import './Checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}

    <div className="total">
      <span>TOTAL: ${`${total}`}</span>
    </div>
    <div className="test-warning">
      *PLEASE USE THE FOLLOWING TEST CREDITCARD FOR PAYMENTS*
      <br />
      4242 4242 4242 4242 - Exp:01/24 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStatetoProps)(CheckoutPage)
