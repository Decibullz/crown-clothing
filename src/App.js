import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage.component'
import ShopPage from './pages/Shop/ShopPage.component'
import Header from './components/Header/Header.component'
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.util'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
