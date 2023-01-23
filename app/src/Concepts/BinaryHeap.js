import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BinaryHeap() {

  let navigate = useNavigate();

  const implementaton =
    `class MaxBinaryHeap {
    constructor() {
      this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(element) {
      this.values.push(element);
      this.bubbleUp();
    }
    bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
  
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (element <= parent) {
          break;
        }
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }
  }
  
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
  
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
  
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
  
    while (true) {
      let leftChildIndex = (2 * index) + 1;
      let rightChildIndex = (2 * index) + 2;
      let swap = null;
  
      if (leftChildIndex < length) {
        let leftChild = this.values[leftChildIndex];
  
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
  
      if (rightChildIndex < length) {
        let rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > element) || 
            (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }
  
      if (swap === null) {
        break;
      }
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
  `

  return (
    <div class="Concept_page">
      <h1>Binary Heap</h1>
      <div class="Container font-m">
        <ul>
          Prerequisites:
          <ref class="Link" onClick={() => navigate("../BinarySearch")}> <u>Binary Search</u></ref>
          <section>
            <li>
              Very similar to a Binary Search Tree, but with some different rules
              <ul class="font-sm">
                <li>In a Max Binary Heap, parent nodes are always larger than child nodes</li>
                <li>In a Min Binary Heap, parent nodes are always smaller than child nodes</li>
              </ul>
            </li>
          </section>
          <section>
            <li>
              Max Binary Heaps:
              <ul class="font-sm">
                <li>Each parent has at most two nodes</li>
                <li>The value of each parent node is always greater than its child nodes</li>
                <li>As compact as possible, all children of each node are as full as they can be and left children are filled first</li>
              </ul>
            </li>
          </section>
          <section><li>Binary Heaps are used to implement Priority Queues, which are very commonly used data structures</li></section>
          <section><li>Also used with graph traversal algorithms</li></section>
          <section>
            <li>
              Binary Heaps can be stored in a list or an array:
              <img src={require('../images/BinaryHeapArray.png')} style={{ width: "50vw" }} alt="Binary Heap array illustration"></img><br />
              <ul class="font-sm">
                <li>For any index of array n, the left child is stored at 2n + 1 and the right child is stored at 2n + 2</li>
                <li>For any child at index n, its parent is at index (n - 1) / 2, floored</li>
              </ul>
            </li><br />
          </section>
          <section>
            <li>
              Big O of Binary Heaps
              <ul class="font-sm">
                <li>Insertion: O(log N)</li>
                <li>Removal: O(log N)</li>
                <li>Search: O(N)</li>
              </ul>
            </li>
          </section>
          <section>
            <li>
              Max Binary Heaps implementation:
              <ul class="font-sm">
                <li>
                  Insert:
                  <ul class="font-xsm">
                    <li>Push the value into the values property on the heap</li>
                    <ul class="font-xxsm">
                      <li>Create a variable called index which is the length of the values property - 1</li>
                      <li>Create a variable called parentIndex which is the floor of (index - 1) / 2</li>
                      <li>Keep looping as long as the values element at the parentIndex is less than the values element at the child index</li>
                      <ul>
                        <li>Swap the value of the values elementa at the parentIndex with the value of the element property at the child index</li>
                        <li>Set the index to be the parentIndex, and start over</li>
                      </ul>
                    </ul>
                  </ul>
                </li>
                <li>
                  Extract Max:
                  <ul class="font-sm">
                    <li>Swap the first value in the values property with the last one</li>
                    <li>Pop the values property, so you can return the value at the end</li>
                    <li>
                      Have the new root "sink down" to the correct spot:
                      <ul class="font-xsm">
                        <li>Parent index starts at 0 (root)</li>
                        <li>Find the index of the left child: 2 * (index + 1)</li>
                        <li>Find the index of the right child: 2 * (index + 2)</li>
                        <li>If the left or right child is greater than the element, swap. If both children are larger, swap with the larger child</li>
                        <li>The child index swapped becomes the new parent index</li>
                        <li>Loop and swap until neither child is larger than the element</li>
                        <li>Return the old root</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </section>
        </ul>
        <div class="font-l">JavaScript Implementation</div>
        <div class="Code Section">
          <pre>
            <code>
              {implementaton}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
