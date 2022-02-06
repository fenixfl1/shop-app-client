import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { RoutesWrapper } from './components'
import { Checkout, Home, RegisterAddress, RegisterUser } from './pages'
import Login from './pages/Login'
import ShoppingCart from './pages/ShoppingCart'
import {
  PATH_CHECKOUT,
  PATH_LOGIN,
  PATH_MAIN,
  PATH_REGISTER_ADDRESS,
  PATH_REGISTER_USER,
  PATH_SHOPPING_CART,
} from './constants/routes'

const Routes = (): React.ReactElement => {
  return (
    <Router>
      <Switch>
        <RoutesWrapper>
          <Route exact path={PATH_MAIN} component={Home} />
          <Route exact path={PATH_LOGIN} component={Login} />
          <Route exact path={PATH_REGISTER_USER} component={RegisterUser} />
          <Route exact path={PATH_SHOPPING_CART} component={ShoppingCart} />
        </RoutesWrapper>

        <RoutesWrapper protect>
          <Route
            exact
            path={PATH_REGISTER_ADDRESS}
            component={RegisterAddress}
          />
          <Route exact path={PATH_CHECKOUT} component={Checkout} />
        </RoutesWrapper>
      </Switch>
    </Router>
  )
}

export default Routes
