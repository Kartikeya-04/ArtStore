import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Home /> */}
    </div>
  );
}

export default App;
