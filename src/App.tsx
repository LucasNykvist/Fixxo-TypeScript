import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.min.css';
import HomeView from './views/HomeView';

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllProducts()

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView products={products} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
