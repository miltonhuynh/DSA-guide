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
import Dijkstra from './Concepts/Dijkstra';
import SelectionSort from './Concepts/SelectionSort';
import InsertionSort from './Concepts/InsertionSort';
import PriorityQueue from './Concepts/PriorityQueue';
import Stack from './Concepts/Stack';
import HeapSort from './Concepts/HeapSort';
import TimeComplexity from './Concepts/TimeComplexity';
import Definitions from './Concepts/Definitions';
import SpaceComplexity from './Concepts/SpaceComplexity';
import FrequencyCounter from './Concepts/FrequencyCounter';
import Recursion from './Concepts/Recursion';
import SlidingWindow from './Concepts/SlidingWindow';
import StringSearch from './Concepts/StringSearch';
import RadixSort from './Concepts/RadixSort';
import SinglyLinkedList from './Concepts/SinglyLinkedList';
import DoublyLinkedList from './Concepts/DoublyLinkedList';
import Queue from './Concepts/Queue';
import BinaryTree from './Concepts/BinaryTree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/DSA-guide" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/DSA-guide/TimeComplexity" element={<TimeComplexity />} />
        <Route path="/DSA-guide/SpaceComplexity" element={<SpaceComplexity />} />
        <Route path="/DSA-guide/Stack" element={<Stack />} />
        <Route path="/DSA-guide/FrequencyCounter" element={<FrequencyCounter />} />
        <Route path="/DSA-guide/BinarySearch" element={<BinarySearch />} />
        <Route path="/DSA-guide/BubbleSort" element={<BubbleSort />} />
        <Route path="/DSA-guide/QuickSort" element={<QuickSort />} />
        <Route path="/DSA-guide/MergeSort" element={<MergeSort />} />
        <Route path="/DSA-guide/HeapSort" element={<HeapSort />} />
        <Route path="/DSA-guide/SelectionSort" element={<SelectionSort />} />
        <Route path="/DSA-guide/InsertionSort" element={<InsertionSort />} />
        <Route path="/DSA-guide/HashTables" element={<HashTables />} />
        <Route path="/DSA-guide/DepthFirstSearch" element={<DepthFirstSearch />} />
        <Route path="/DSA-guide/BreadthFirstSearch" element={<BreadthFirstSearch />} />
        <Route path="/DSA-guide/Dijkstra" element={<Dijkstra />} />
        <Route path="/DSA-guide/PriorityQueue" element={<PriorityQueue />} />
        <Route path="/DSA-guide/Definitions" element={<Definitions />} />
        <Route path="/DSA-guide/Recursion" element={<Recursion />} />
        <Route path="/DSA-guide/SlidingWindow" element={<SlidingWindow />} />
        <Route path="/DSA-guide/StringSearch" element={<StringSearch />} />
        <Route path="/DSA-guide/RadixSort" element={<RadixSort />} />
        <Route path="/DSA-guide/SinglyLinkedList" element={<SinglyLinkedList />} />
        <Route path="/DSA-guide/DoublyLinkedList" element={<DoublyLinkedList />} />
        <Route path="/DSA-guide/Queue" element={<Queue />} />
        <Route path="/DSA-guide/BinaryTree" element={<BinaryTree />} />

      </Route>
    </Routes>
  </BrowserRouter>
);
