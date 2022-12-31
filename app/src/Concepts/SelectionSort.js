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
    <div class="Concept_title">Selection sort</div>
    <div class="Container">
      <ul><div class="font-m">
        <div class="Section"><li>Selection sort works by repeatedly finding the smallest element in the array and putting it at the beginning.</li></div>
        <div class="Section">
          <li>
            The algorithm mains two subarrays in any given array:
            <ul>
              <li>1) The subarray that is already sorted</li>
              <li>2) The remaining subarray which is unsorted</li>
            </ul>
          </li>
        </div>
        <div class="Section"><li>This method of sorting has a time complexity of n{n_squared}.</li></div>
        <div class="Section"><li>In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. </li></div>
      </div></ul>
      <div class="font-l">JavaScript Implementation</div>
      <div class="Code Section">
        <pre>
          <code>
            {selection}
          </code>
        </pre>
      </div>
    </div>
  </div>
  )
}
