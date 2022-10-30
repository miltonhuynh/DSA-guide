import React from 'react'

export default function FrequencyCounter() {

  const naive = 
  `function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}`

  const refactored =
  `function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}`


  return (
    <div class="Concept_page">
      <div class="Concept_title">Frequency Counter</div>
      <div class="Container font-m">
        <ul>
          <li>This pattern uses objects or sets to collect values and frequencies of values.</li><br/>
          <li>Used to avoid using nested loops or O(n^2) with arrays and strings</li><br/>
        </ul>
        <div class="font-l">Naive solution [uses a nested loop and has a time complexity of O(n^2)]</div>
        <div class="Code">
          <pre>
            <code>
              {naive}
            </code>
          </pre>
        </div><br/>
        <div class="font-l">Optimal solution</div>
        <div class="Code">
          <pre>
            <code>
              {refactored}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
