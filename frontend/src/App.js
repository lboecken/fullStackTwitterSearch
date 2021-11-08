import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Search, Home, Random, Local } from './pages/pages';
import { Navbar, Footer } from './components/components';

function App() {
  const fetchAPI = async () => {
    const query = await fetch('http://localhost:5000/api');
    return query.json();
  };

  return (
    <div className='App'>
      <Navbar />
      <button
        onClick={() => {
          console.log(fetchAPI());
        }}></button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/random' element={<Random />} />
        <Route path='/local' element={<Local />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
