import React from 'react'

export default function SelectionSort() {
  const selection =
    `function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
`
  const n_squared =
    `\u00B2`

  return (
    <div class="Concept_page">
      <h1>Selection sort</h1>
      <main>
        <section><li>Selection sort works by repeatedly finding the smallest element in the array and putting it at the beginning.</li></section>
        <section>
          <li>
            The algorithm mains two subarrays in any given array:
            <ul>
              <li>1) The subarray that is already sorted</li>
              <li>2) The remaining subarray which is unsorted</li>
            </ul>
          </li>
        </section>
        <section><li>This method of sorting has a time complexity of n{n_squared}.</li></section>
        <section><li>In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. </li></section>
        <div class="font-l">JavaScript Implementation</div>
        <section>
          <pre>
            <code>
              {selection}
            </code>
          </pre>
        </section>
      </main>
    </div>
  )
}
