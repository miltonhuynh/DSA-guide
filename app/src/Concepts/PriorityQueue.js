import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PriorityQueue() {
  let navigate = useNavigate();

  const implementation =
  `class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Priority Queue</div>
      <div class="Container font-m">
        <ul>
          <div class="Section"><li>A data structure where each element has a priority</li></div>
          <div class="Section"><li>Elements with higher priorities are served before elements with lower priorities</li></div>
          <div class="Section"><li>A naive version of implementation is to use a list to store all the elements, each with a priority number, but we would have to iterate over the whole list to find the highest priority element</li></div>
          <div class="Section"><li>A more efficient way is to use <ref class="Link" onClick={() => navigate("../BinaryHeap")}><u>Binary Heaps</u></ref> to store our elements</li></div>
          <div class="Section">
            <li>
              Implementation Steps: 
              <ul class="font-sm">
                <li>Write a min binary heap, lower number means higher priority</li>
                <li>Each Node has a val and a priority, use the priority to build the heap</li>
                <li>Enqueue method accepts a value and a priority, makes a new node, and puts it in the right spot based off of its priority</li>
                <li>Dequeue method removes root element, returns it, and rearranges heap using priority</li>
              </ul>
            </li>
          </div>
          <div class="font-l">JavaScript Implementation: </div>
          <div class="Code Section">
            <pre>
              <code>
                {implementation}
              </code>
            </pre>
          </div>
        </ul>
      </div>
    </div>
  )
}
