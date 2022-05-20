import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BinarySearch from './Algorithms/BinarySearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/DSA-guide" element={<App />}>
        <Route path="/DSA-guide/BinarySearch" element={<BinarySearch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
