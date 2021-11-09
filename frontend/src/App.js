import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Search, Home, Random, Local } from './pages/pages';
import { Navbar, Footer } from './components/components';

function App() {
  return (
    <div className='App'>
      <div className='contentWrapper'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/random' element={<Random />} />
          <Route path='/local' element={<Local />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
