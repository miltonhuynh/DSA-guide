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
            <li>A last in first out data structure, the last element added to the stack will be the first element removed from the stack.</li><br/>
            <li>
              Big O of Stacks
              <div class="indent-extra font-sm">
                <div>Insertion: O(1)</div>
                <div>Removal: O(1)</div>
                <div>Searching: O(n)</div>
                <div>Access: O(n)</div>
              </div>
            </li><br/>
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
              Since the item at index 1 '2' was added last to the list it will be removed when pop is called<br/><br/>
            </li>
            <li>In addition to push and pop, unshift and shift can also be used to implement a stack in an array, these add and remove from the beginning of the array instead of the end; however, it is better to push and pops to avoid re-indexing every other item</li><br/>
            <li>Linked lists can also be used to implement a Stack data structure</li><br/>
            <li>Implementation steps</li>
            <ul><li>Push (Adds a node to the top of the stack)</li></ul>
            <div class="indent-extra font-sm">
              <div>1) The function should accept a value</div>
              <div>2) Create a new node with that value</div>
              <div>3) If there are no nodes in the stack, set the first and last property to be the newly created node</div>
              <div>4) If there is at least one node, create a variable that stores the current first property on the Stack</div>
              <div>5) Reset the first property to be the newly created node</div>
              <div>6) Set the next property on the node to be the previously created variable</div>
              <div>7) Increment the size of the stack by 1</div>
            </div>
            <ul><li>Pop (Removes a node from the top of the stack)</li></ul>
            <div class="indent-extra font-sm">
              <div>8) If there are no nodes in the stack, return null</div>
              <div>9) Create a temporary variable to store the first property on the stack</div>
              <div>10) If there is only one node, set the first and last property to be null</div>
              <div>11) If there is more than one node, set the first property to be the next property on the current list</div>
              <div>12) Decrement the size by one</div>
              <div>13) Return the value of the node removed</div><br/>
            </div>
            <div class="font-l">Implementation</div>
            <div class="Code">
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
