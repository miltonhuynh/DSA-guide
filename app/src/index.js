import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BinarySearch from './Concepts/BinarySearch';
import Home from './Components/Home';
import BubbleSort from './Concepts/BubbleSort';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/DSA-guide" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/DSA-guide/BinarySearch" element={<BinarySearch />} />
        <Route path="/DSA-guide/BubbleSort" element={<BubbleSort />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
