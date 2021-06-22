import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/Sidedrawer'

// Pages
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'

import './App.css'

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar setSideToggle={setSideToggle} sideToggle={sideToggle}/>
      <SideDrawer show={sideToggle} setSideToggle={setSideToggle} />
      <Backdrop show={sideToggle} setSideToggle={setSideToggle}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/product/:id" component={ProductPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
