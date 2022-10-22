import React from 'react'

export default function Definitions() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Common terms</div>
      <div class="Container">
          <div class="Term"><u>Abstract Data type</u>: a type (or class) for objects whose behaviour is defined by a set of value and a set of operations.</div>
          <div class="Term"><u>Class</u>: a blueprint for creating objects with pre-defined properties and methods.</div>
          <div class="Term"><u>Data structure</u>: collections of values, the relationships among them, and the functions or operations that can be applied to the data</div>
          <div class="Term"><u>Dynamic Programming</u>: a method of solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions</div>
          <div class="Term"><u>Greedy Algorithm</u>: an approach for solving a problem by selecting the best option available at the moment. It doesn't worry whether the current best result will bring the overall optimal result</div>
          <div class="Term"><u>Hashmap:</u> a way to store some data and retrieve it based off of a particular key.</div>
          <div class="Term"><u>Linked List</u>: a data structure that contains a head, tail and length property. Linked lists consists of nodes, and each node has a value and a pointer to another node or null</div>
          <div class="Term"><u>Memoization:</u> storing the results of expensive function calls and returning the cached result when the same input occurs again</div>
          <div class="Term"><u>Node:</u> a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes</div>
          <div class="Term"><u>Parity:</u> The concept of matching even-ness or odd-ness, the basic idea behind using a parity bit for error detection</div>
          <div class="Term"><u>Tabulation:</u> Storing the result of a previous result in a table, usually implemented with an array and done using iteration</div>
          <div class="Term"><u>Tree:</u> a data structure that consists of nodes in a parent/child relationship, nodes can only point to a child and cannot have more than one parent</div>
          <div class="Term"><u>Sorting:</u> the process of rearranging the items in a collection (e.g. an array) so that items are in some kind of order
          <div class="indent font-sm">Examples:<br/>
            <div class="indent">1) Sorting numbers from smallest to largest.</div>
            <div class="indent">2) Sorting names alphabetically</div>
            <div class="indent">3) Sorting movies based on release year</div><br/><br/>
          </div>
        </div>
      </div>
    </div>
  )
}
