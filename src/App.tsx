import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';

//? react-router-dom //
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route index path='/content/:id' element={<ContentPage />} />
    </Routes>
  );
}

export default App;
