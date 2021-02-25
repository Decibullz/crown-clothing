import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage.component'
import ShopPage from './pages/Shop/ShopPage.component'
import Header from './components/Header/Header.component'
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
