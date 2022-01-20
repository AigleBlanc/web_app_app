import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './pages/Nav';
import Okay from './pages/Okay'
import Home from './pages/Home';
import Trips from './pages/Trips'
import Register from './pages/Register'
import Hotels from './pages/Hotels'
import Base from './pages/Base'
import Cart from './pages/Cart'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/pages/Trips' exact element={<Trips />} />
          <Route path='/pages/Hotels' exact element={<Hotels />} />
          <Route path='/pages/Register' exact element={<Register />} />
          <Route path='/pages/Okay' exact element={<Okay />} />
          <Route path='/pages/Base' exact element={<Base />} />
          <Route path='/pages/Cart' exact element={<Cart />} />
          ;
          
        </Routes>
      </div>
    </Router>   
  );
}

export default App;
