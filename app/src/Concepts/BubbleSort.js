import React from 'react'

export default function BubbleSort() {

  const bubblesort =
  `function bubble(array) {
    for (let x = 0; x < array.length; x++) {
      for (let y = 0; y < array.length - 1; y++) {
        if (array[y] > array[y+1]) {
          temp = array[y];
          array[y] = array[y+1];
          array[y+1] = temp;
         } 
      }
    }
    console.log(array);
  }`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Bubble Sort</div>
      <div class="Container font-m">
        <ul>
          <li>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order</li><br/>
          <li>This algorithm is not suitable for large data sets as its average and worst case time complexity is quite high</li><br/>
          <li>With each iteration, the largest number "bubbles" to the top</li><br/>
          <li>Implementation steps:</li>
          <div class="indent font-sm">
            <div>1) Start looping with a variable called i at the end of the array towards the beginning</div>
            <div>2) Start an inner loop with a variable called j from the beginning until i - 1</div>
            <div>3) If arr[j] is greater than arr[j+1], swap those two values!</div>
            <div>4) Return the sorted array.</div><br/>
          </div>
        </ul>
        <div class="font-l">Javascript Implementation</div>
          <div class="Code">
            <pre>
              <code>
                {bubblesort}
              </code>
            </pre>
          </div>
      </div>
    </div>
  )
}
