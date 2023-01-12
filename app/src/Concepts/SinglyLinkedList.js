import React from 'react'

export default function SinglyLinkedList() {

  const implementation =
    `class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.lenght) {
          return null;
        }
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    
    reverse() {
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
}`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Singly Linked List</div>
      <div class="Container font-m">
        <ul>
          <div class="Section"><li>Each node points to the next item, unlike doubly linked list which points to the previous and next item.</li></div>
          <div class="Section"><li>Does not have indexes, connected via nodes with a next pointer, random access is not allowed.</li></div>
          <div class="Section"><li>Unlike arrays, insertion and deletion is not as time consuming, don't need to re-index every element.</li></div>
          <div class="Section">
            <li>
              Big O of Singly Linked Lists
              <div class="font-sm">
                <ul>
                  <li>Insertion: O(1)</li>
                  <li>Removal: O(1) or O(n)</li>
                  <li>Searching: O(n) *Technically O(n/2) but still in general O(n)</li>
                  <li>Access: O(n)</li>
                </ul>
              </div>
            </li>
          </div>
          <li>Implementation steps:</li>

          <ul class="font-sm">
            <li>Create a node that contains a variable that holds a value and a pointer to the next node.</li>

            <li>Push (Adding a node to the beginning of list)</li>
            <ul class="font-xsm">
              <li>Let this function accept a value</li>
              <li>Create a new node using the value passed to the function</li>
              <li>If there is no head property (list is empty) on the list, set the head and tail to be the newly created node</li>
              <li>Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node</li>
              <li>Increment the length by 1</li>
              <li>Return the linked list</li>
            </ul>

            <li>Pop (Removing a node from the end of the list)</li>
            <ul class="font-xsm">
              <li>If there are no nodes in the list, return undefined</li>
              <li>Loop through the list until you reach the tail</li>
              <li>Set the next property of the 2nd to last node to be null</li>
              <li>Set the tail to be the 2nd to last node</li>
              <li>Decrement the length of the list by 1</li>
              <li>Return the value of the node removed</li>
            </ul>

            <li>Shift (Removing a node from the beginning of the linked list)</li>
            <ul class="font-xsm">
              <li>If there are no nodes, return undefined</li>
              <li>Store the current head property in a variable</li>
              <li>Set the head property to be the current head's next property</li>
              <li>Decrement the length by 1</li>
              <li>Return the value of the node removed</li>
            </ul>

            <li>Unshift (Adding a new node to the beginning of a linked list)</li>
            <ul class="font-xsm">
              <li>Create a new node using the value passed to the function</li>
              <li>If there is no head property on the list, set the head and tail to be the newly created node</li>
              <li>Otherwise set the newly created node's next property to be the current head property on the list</li>
              <li>Set the head property on the list to be that newly created node</li>
              <li>Increment the length of the list by 1</li>
              <li>Return the linked list</li>
            </ul>

            <li>Get (Retrieving a node by it's position in the Linked List)</li>
            <ul class="font-xsm">
              <li>Let the function accept an index</li>
              <li>If the index is less than zero or greater than or equal to the length of the list, return null</li>
              <li>Loop through the list until you reach the index and return the node at that specific index</li>
            </ul>

            <li>Set (Changing the value of a node based on it's position in the Linked List)</li>
            <ul class="font-xsm">
              <li>This function should accept a value and an index</li>
              <li>Use your get function to find the specific node</li>
              <li>If the node is not found, return false, if the node is found, set the value of that node to be the value passed to the function and return true</li>
            </ul>

            <li>Insert (Adding a node to the Linked List at a specific position</li>
            <ul class="font-xsm">
              <li>If the index is less than zero or greater than the length, return false</li>
              <li>If the index is the same as the length, push a new node to the end of the list</li>
              <li>If the index is zero, unshift a new node to the start of the list</li>
              <li>Otherwise, using the get method, access the node at the index - 1.</li>
              <li>Set the next property on that node to be the new node</li>
              <li>Set the next property on the new node to be the previous next</li>
              <li>Increment the length</li>
              <li>Return true</li>
            </ul>

            <li>Remove (Removing a node from the Linked List at a specific position</li>
            <ul class="font-xsm">
              <li>If the index is less than zero or greater than the length, return underfined</li>
              <li>If the index is the same as the length - 1, pop</li>
              <li>If the index is 0, shift</li>
              <li>Otherwise, using the get method, access the node at the index - 1</li>
              <li>Set the next property on that node to be the next of the next node</li>
              <li>Decrement the length</li>
              <li>Return the value of the node removed</li>
            </ul>

            <li>Reverse (Reversing the Linked List in place)</li>
            <ul class="font-xsm">
              <li>Swap the head and the tail</li>
              <li>Create a variable called next and a variable called prev</li>
              <li>Create a variable called node and initialize it to the head property</li>
              <li>Loop through the list</li>
              <li>Set next to be the next property on whatever the current node is</li>
              <li>Set the next property on the node to be whatever prev is</li>
              <li>Set prev to be the value of the node variable</li>
              <li>Set the node variable to be the value of the next variable</li>
            </ul>
          </ul>
        </ul>
        <img src={require('../images/sll.png')} style={{ width: "60vw" }} alt="Singly linked list illustration"></img><br /><br /><br />
        <div class="font-l">Implementation</div>
        <div class="Code">
          <pre>
            <code>
              {implementation}
            </code>
          </pre>
        </div>
        <div class="font-l">LeetCode examples</div>
        <div class="font-m indent">
          <li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/merge-two-sorted-lists/">Merge Two Sorted Lists [Easy]</a></li>
          <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/add-two-numbers/">Add Two Numbers [Medium]</a></li>
          <li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/merge-k-sorted-lists/">Merge k sorted lists [Hard]</a></li>
        </div><br />

      </div>
    </div>
  )
}
