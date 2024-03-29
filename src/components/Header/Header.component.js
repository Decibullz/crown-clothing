import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.util'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../Cart-icon/Cart-Icon.component'
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown.component'
import './Header.styles.scss'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './Header.styles'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink
        to={{ pathname: 'https://www.codysnell.dev' }}
        target="_blank"
        rel="noreferrer"
      >
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          {' '}
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin"> SIGN IN </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
