import React from 'react'

export default function Stack() {
  const array_example = 
  `var stack = [];
stack.push(1);
stack.push(2);
stack.pop();`

const DLL_example = 
`class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          var temp = this.first;
          this.first = newNode;
          this.first.next = temp;
      }
      return ++this.size;
  }
  pop(){
      if(!this.first) return null;
      var temp = this.first;
      if(this.first === this.last){
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}`
  

  return (
    <div class="Concept_page">
      <div class="Concept_title">Stack</div>
      <div class="Container">
        <ul>
          <div class="font-m">
            <div class="Section"><li>A last in first out data structure, the last element added to the stack will be the first element removed from the stack.</li></div>
            <div class="Section"><li>Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing and much more</li></div>
            <div class="Section"><li>Not a built in structure in JavaScript</li></div>
            <div class="Section">
              <li>
                Big O of Stacks
                <ul>
                  <li>Insertion: O(1)</li>
                  <li>Removal: O(1)</li>
                  <li>Searching: O(n)</li>
                  <li>Access: O(n)</li>
                </ul>
              </li>
            </div>
            <div class="Section">
              <li>
                There are multiple ways to implement a stack in JavaScript, one way is to create an array and use the push and pop methods<br/><br/>
                Example:
                <div class="Code">
                  <pre>
                    <code>
                      {array_example}
                    </code>
                  </pre>
                </div>
                <div class="font-sm">Since the item at index 1 '2' was added last to the list it will be removed when pop is called.</div>
              </li>
            </div>
            <div class="Section"><li>In addition to push and pop, unshift and shift can also be used to implement a stack in an array, these add and remove from the beginning of the array instead of the end; however, it is better to push and pops to avoid re-indexing every other item</li></div>
            <div class="Section"><li>Linked lists can also be used to implement a Stack data structure</li></div>
            <div class="Section">
              <li>Implementation steps</li>
              <ul class="font-sm">
                <li>Push (Adds a node to the top of the stack)
                  <ul class="font-xsm">
                    <li>1) The function should accept a value</li>
                    <li>2) Create a new node with that value</li>
                    <li>3) If there are no nodes in the stack, set the first and last property to be the newly created node</li>
                    <li>4) If there is at least one node, create a variable that stores the current first property on the Stack</li>
                    <li>5) Reset the first property to be the newly created node</li>
                    <li>6) Set the next property on the node to be the previously created variable</li>
                    <li>7) Increment the size of the stack by 1</li>
                  </ul>
                </li>
              </ul>
              <ul class="font-sm">
                <li>Pop (Removes a node from the top of the stack)
                  <ul>
                    <li>8) If there are no nodes in the stack, return null</li>
                    <li>9) Create a temporary variable to store the first property on the stack</li>
                    <li>10) If there is only one node, set the first and last property to be null</li>
                    <li>11) If there is more than one node, set the first property to be the next property on the current list</li>
                    <li>12) Decrement the size by one</li>
                    <li>13) Return the value of the node removed</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="font-l">Implementation</div>
            <div class="Code Section">
              <pre>
                <code>
                  {DLL_example}
                </code>
              </pre>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
