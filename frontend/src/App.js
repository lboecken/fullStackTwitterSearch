import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Search, Home, Stream, Random } from './pages/pages';
import { Navbar } from './components/components';

function App() {
  return (
    <div className='App'>
      <div className='contentWrapper'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/random' element={<Random />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
