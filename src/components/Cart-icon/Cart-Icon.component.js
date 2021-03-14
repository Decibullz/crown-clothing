import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './Cart-Icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)
// re renders every time state updates regardless if it is cart state updating. (Performance issues)

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
//     0
//   ),
// })

const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
