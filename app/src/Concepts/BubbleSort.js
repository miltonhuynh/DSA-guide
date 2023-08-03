import React from 'react'

export default function BubbleSort() {

  const bubblesort =
    `def bubble_sort(list1):   
    for i in range(0,len(list1)-1):  
        for j in range(len(list1)-1):  
            if(list1[j]>list1[j+1]):  
                temp = list1[j]  
                list1[j] = list1[j+1]  
                list1[j+1] = temp  
    return list1  `

  const n_squared =
    `\u00B2`

  return (
    <div class="Concept_page">
      <h1>Bubble Sort</h1>
      <main>
        <ul>
          <section><li>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order</li></section>
          <section><li>This algorithm is not suitable for large data sets as its average and worst case time complexity is O(n{n_squared})</li></section>
          <section><li>With each iteration, the largest number "bubbles" to the top</li></section>
          <section>
            <li>Implementation steps:</li>
            <div class="indent font-sm">
              <div>1) Start looping with a variable called i at the end of the array towards the beginning</div>
              <div>2) Start an inner loop with a variable called j from the beginning until i - 1</div>
              <div>3) If arr[j] is greater than arr[j+1], swap those two values!</div>
              <div>4) Return the sorted array.</div>
            </div>
          </section>
        </ul>
        <div class="font-l">Python Implementation</div>
        <section>
          <pre>
            <code>
              {bubblesort}
            </code>
          </pre>
        </section>
      </main>
    </div>
  )
}
