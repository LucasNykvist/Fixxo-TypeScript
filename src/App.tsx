import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.min.css';
import UserList from './components/UserList';
import { ProductProvider } from './contexts/productsContext';
import { ShoppingCartProvider } from './contexts/shoppingCartContext';
import UserProvider from './contexts/UserContext';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';
import ProductsView from './views/ProductsView';
import UserView from './views/UserView';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ShoppingCartProvider>
          <ProductProvider>
            <Routes>
              <Route path='/' element={<HomeView />} />
              <Route path='/contacts' element={<ContactsView />} />
              <Route path='/products' element={<ProductsView />} />
              <Route path='/products/:articleNumber' element={<ProductDetailsView />} />
              <Route path='/users' element={<UserView />} />
              <Route path='*' element={<NotFoundView />} />
            </Routes>
          </ProductProvider>
        </ShoppingCartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
