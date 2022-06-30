import React from 'react'

export default function InsertionSort() {

  const insertion = 
  `function insertionSort(arr){
    var currentVal;
      for(var i = 1; i < arr.length; i++){
          currentVal = arr[i];
          for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
              arr[j+1] = arr[j]
          }
          arr[j+1] = currentVal;
      }
      return arr;
  }
  `
  return (
    <div class="Concept_page">
      <div class="Concept_title">Insertion sort</div>
      <div class="Container">
        <div class="font-m">
          <ul>
            <li><div>Insertion sort works like organizing playing cards in your hands.</div></li><br/>
            <li><div>Builds up the sort by gradually creating a larger left half which is always sorted.</div></li><br/>
            <li><div>Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.</div></li><br/>
            <li><div>If data is almost sorted, time complexity is better than bubble sort and selection sort.</div></li><br/>
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
