import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Popup from './pages/Popup';

const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={Popup}/>
    </div>
  </Router>
)

export default Routers