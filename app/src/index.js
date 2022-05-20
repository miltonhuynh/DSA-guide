import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BinarySearch from './Concepts/BinarySearch';
import Home from './Components/Home';
import BubbleSort from './Concepts/BubbleSort';
import QuickSort from './Concepts/QuickSort';
import HashTables from './Concepts/HashTables';
import DepthFirstSearch from './Concepts/DepthFirstSearch';
import BreadthFirstSearch from './Concepts/BreadthFirstSearch';
import MergeSort from './Concepts/MergeSort';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/DSA-guide" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/DSA-guide/BinarySearch" element={<BinarySearch />} />
        <Route path="/DSA-guide/BubbleSort" element={<BubbleSort />} />
        <Route path="/DSA-guide/QuickSort" element={<QuickSort />} />
        <Route path="/DSA-guide/MergeSort" element={<MergeSort />} />
        <Route path="/DSA-guide/HashTables" element={<HashTables />} />
        <Route path="/DSA-guide/DepthFirstSearch" element={<DepthFirstSearch />} />
        <Route path="/DSA-guide/BreadthFirstSearch" element={<BreadthFirstSearch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
