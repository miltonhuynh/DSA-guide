import React from 'react'

export default function Stack() {
  const array_example = 
  `var stack = [];
stack.push(1);
stack.push(2);
stack.pop();`
  

  return (
    <div class="Concept_page">
      <div class="Concept_title">Stack</div>
      <div class="Container">
        <ul>
          <div class="font-m">
            <li>A last in first out data structure, the last element added to the stack will be the first element removed from the stack.</li><br/>
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
            <ul><li>Push</li></ul>
            <div class="indent-extra font-sm">
              <div>1) The function should accept a value</div>
              <div>2) Create a new node with that value</div>
              <div>3) If there are no nodes in the stack, set the first and last property to be the newly created node</div>
              <div>4) If there is at least one node, create a variable that stores the current first property on the Stack</div>
              <div>5) Reset the first property to be the newly created node</div>
              <div>6) Set the next property on the node to be the previously created variable</div>
              <div>7) Increment the size of the stack by 1</div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
