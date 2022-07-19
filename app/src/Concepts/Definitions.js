import React from 'react'

export default function Definitions() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Common terms</div>
      <div class="Container">
          <div class="Term"><u>Abstract Data type</u>: a type (or class) for objects whose behaviour is defined by a set of value and a set of operations.</div>
          <div class="Term"><u>Class</u>: a blueprint for creating objects with pre-defined properties and methods.</div>
          <div class="Term"><u>Data structure</u>: collections of values, the relationships among them, and the functions or operations that can be applied to the data.</div>
          <div class="Term"><u>Hashmap:</u> a way to store some data and retrieve it based off of a particular key.</div>
          <div class="Term"><u>Linked List</u>: a data structure that contains a head, tail and length property. Linked lists consists of nodes, and each node has a value and a pointer to another node or null.</div>
          <div class="Term"><u>Node:</u> a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes.</div>
          <div class="Term"><u>Sorting:</u> the process of rearranging the items in a collection (e.g. an array) so that items are in some kind of order.
          <div class="indent font-sm">Examples:<br/>
            <div class="indent">1) Sorting numbers from smallest to largest.</div>
            <div class="indent">2) Sorting names alphabetically.</div>
            <div class="indent">3) Sorting movies based on release year.</div>
            </div>
          </div>
      </div>
    </div>
  )
}
