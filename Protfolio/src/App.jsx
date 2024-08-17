import React from 'react'
import  Home from './Home/Home'
import Navbar from './Components/Navbar/Navbar';

import About from '../src/Components/About/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div>

{/* <Home/> */}
<Router>
<Navbar/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
</div>
  );
}

export default App
