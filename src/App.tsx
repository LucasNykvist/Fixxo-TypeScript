import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.min.css';
import ProductEdit from './components/ProductEdit';
import UpdateForm from './components/UpdateForm';
import ProductHandlingProvider from './contexts/ProductHandlingContext';
import { ProductProvider } from './contexts/productsContext';
import { ShoppingCartProvider } from './contexts/shoppingCartContext';
import UserProvider from './contexts/UserContext';
import ProductHandling from './sections/ProductHandling';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';
import ProductHandlerView from './views/ProductHandlerView';
import ProductsView from './views/ProductsView';
import UserView from './views/UserView';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ShoppingCartProvider>
          <ProductProvider>
            <ProductHandlingProvider>
              <Routes>
                <Route path='/' element={<HomeView />} />
                <Route path='/contacts' element={<ContactsView />} />
                <Route path='/products' element={<ProductsView />} />
                <Route path='/products/:articleNumber' element={<ProductDetailsView />} />
                <Route path='/users' element={<UserView />} />
                <Route path='/users/update/:id' element={<UpdateForm />} />
                <Route path='/productsHandling' element={<ProductHandlerView />} />
                <Route path='/productsHandling/update/:articleNumber' element={<ProductEdit />} />
                <Route path='*' element={<NotFoundView />} />
              </Routes>
            </ProductHandlingProvider>
          </ProductProvider>
        </ShoppingCartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
