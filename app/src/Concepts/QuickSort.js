import React from 'react'

export default function QuickSort() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Quick sort</div>
      <div class="Container">
        <ul>
          <div class="font-m">
            <li>Works by selecting one element (the pivot) and finding the index where the pivot should end up in the sorted array.</li><br/>
            <li>Counts the number of elements on each side of the pivot.</li><br/>
            <li>Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.</li><br/>
            <li>Implementation Steps:</li>
            <div class="indent font-sm">
              <div>1) Choose an element in the array to be the pivot.</div>
              <div>2) Iterate through the array and find the index where the pivot should be, swap so all numbers less than pivot is on the left side of the array and greater than to the right.</div>
              <div>3) Swap the pivot element with the element in its correct index.</div>
              <div>4) Recursively repeat process until the array is sorted.</div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
