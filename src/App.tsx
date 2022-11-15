import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.min.css';
import HomeView from './views/HomeView';
import { ProductProvider } from './contexts/productContext';

function App() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path='/' element={<HomeView />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
