import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.min.css';
import { ProductProvider } from './contexts/productsContext';
import { ShoppingCartProvider } from './contexts/shoppingCartContext';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';
import ProductsView from './views/ProductsView';

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/contacts' element={<ContactsView />} />
            <Route path='/products' element={<ProductsView />} />
            <Route path='/products/:articleNumber' element={<ProductDetailsView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
        </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
