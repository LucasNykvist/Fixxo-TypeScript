import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.min.css';
import { ProductProvider } from './contexts/productsContext';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/contacts' element={<ContactsView />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
