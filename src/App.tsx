import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.min.css';
import { ProductProvider } from './contexts/productsContext';
import { ShoppingCartProvider } from './contexts/shoppingCartContext';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import ProductDetailsView from './views/ProductDetailsView';

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/contacts' element={<ContactsView />} />
            <Route path='/products/:articleNumber' element={<ProductDetailsView />} />
          </Routes>
        </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
