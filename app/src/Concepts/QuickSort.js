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
          </div>
        </ul>
      </div>
    </div>
  )
}
