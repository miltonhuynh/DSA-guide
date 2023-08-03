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
  }`

  return (
    <div class="Concept_page">
      <h1>Insertion sort</h1>
      <main>
        <div class="font-m">
          <ul>
            <section><li>Insertion sort works like organizing playing cards in your hands.</li></section>
            <section><li>Builds up the sort by gradually creating a larger left half which is always sorted.</li></section>
            <section><li>If data is almost sorted, time complexity is better than bubble sort and selection sort.</li></section>
            <section>
              <li>Implementation steps:</li>
              <div class="indent font-sm">
                <div>1) Start by picking the second element in the array.</div>
                <div>2) Compare the second element with the one before it and swap if necessary.</div>
                <div>3) Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.</div>
                <div>4) Repeat until the array is sorted.</div>
              </div>
            </section>
            <div class="font-l">JavaScript Implementation</div>
            <section>
                <pre>
                  <code>
                    {insertion}
                  </code>
                </pre>
            </section>
          </ul>
        </div>
      </main>
    </div>
  )
}
