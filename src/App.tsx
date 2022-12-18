import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.min.css';
import ProductEdit from './components/ProductEdit';
import AuthContext from './contexts/authContext';
import ProductHandlingProvider from './contexts/ProductHandlingContext';
import { ProductProvider } from './contexts/productsContext';
import { ShoppingCartProvider } from './contexts/shoppingCartContext';
import UserProvider from './contexts/UserContext';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';
import ProductHandlerView from './views/ProductHandlerView';
import ProductsView from './views/ProductsView';
import RegisterView from './views/RegisterView';

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <UserProvider>
          <ShoppingCartProvider>
            <ProductProvider>
              <ProductHandlingProvider>
                <Routes>
                  <Route path='/' element={<HomeView />} />
                  <Route path='/contacts' element={<ContactsView />} />
                  <Route path='/products' element={<ProductsView />} />
                  <Route path='/products/:id' element={<ProductDetailsView />} />
                  <Route path='/productsHandling' element={<ProductHandlerView />} />
                  <Route path='/productsHandling/update/:_id' element={<ProductEdit />} />
                  <Route path='/login' element={<LoginView />} />
                  <Route path='/register' element={<RegisterView />} />
                  <Route path='*' element={<NotFoundView />} />
                </Routes>
              </ProductHandlingProvider>
            </ProductProvider>
          </ShoppingCartProvider>
        </UserProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
