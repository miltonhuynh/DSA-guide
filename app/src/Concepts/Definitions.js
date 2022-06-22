import React from 'react'

export default function Definitions() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Common terms</div>
      <div class="Container">
          <div class="Term"><u>Abstract Data type</u>: a type (or class) for objects whose behaviour is defined by a set of value and a set of operations.</div>
          <div class="Term"><u>Data structure</u>: A way of organizing data so that it can be used effectively.</div>
          <div class="Term"><u>Hashmap:</u> a way to store some data and retrieve it based off of a particular key.</div>
          <div class="Term"><u>Node:</u> a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes.</div>
          <div class="Term"><u>Sorting:</u> The process of rearranging the items in a collection (e.g. an array) so that items are in some kind of order.
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
