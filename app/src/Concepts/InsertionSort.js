import React from 'react'

export default function InsertionSort() {

  const insertion = 
  `a`
  return (
    <div class="Concept_page">
      <div class="Concept_title">Insertion sort</div>
      <div class="Container">
        <div class="font-m">
          <ul>
            <li><div>Insertion sort works like organizing playing cards in your hands.</div></li><br/>
            <li><div>Builds up the sort by gradually creating a larger left half which is always sorted.</div></li><br/>
            <li><div>Implementation steps:</div></li>
            <div class="indent font-sm">
              <div>1) Start by picking the second element in the array.</div>
              <div>2) Compare the second element with the one before it and swap if necessary.</div>
              <div>3) Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.</div>
              <div>4) Repeat until the array is sorted.</div>
            </div>
            <div class="Code">
                <pre>
                  <code>
                    {insertion}
                  </code>
                </pre>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
