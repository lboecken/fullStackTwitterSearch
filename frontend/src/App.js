import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Search, Home, Random } from './pages/pages';
import { Navbar } from './components/components';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/random' element={<Random />} />
      </Routes>
    </div>
  );
}

export default App;
