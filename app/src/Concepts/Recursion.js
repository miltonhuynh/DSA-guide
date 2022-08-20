import React from 'react'

export default function Recursion() {

  const countDown =
  `function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}
`

const factorial_iterative =
`function factorial(num){
  let total = 1;
  for(let i = num; i > 1; i--){
      total *= i
  }
  return total;
}`

const factorial_recursive =
`function factorial(num){
  if(num === 1) return 1;
  return num * factorial(num-1);
}`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Recursion</div>
      <div class="Container">
        <div class="font-m">
          <ul>
            <li>Recursion is simply a process (in our case a function) that calls itself.</li><br/>
            <li>There are two essential parts of a recursive function:</li>
            <ul>
              <li class="font-sm">1) <u>Base Case</u>: The condition when the recursion ends.</li>
              <li class="font-sm">2) <u>Different Input</u>: The function is called with a different input each time.</li><br/>
            </ul>
          </ul>
          <div class="font-l">A simple countdown example: </div>
          <div class="Code">
            <pre>
              <code>
                {countDown}
              </code>
            </pre>
          </div>
          <div class="font-l">Factorial iterative: </div>
          <div class="Code">
            <pre>
              <code>
                {factorial_iterative}
              </code>
            </pre>
          </div>
          <div class="font-l">Factorial recursive: </div>
          <div class="Code">
            <pre>
              <code>
                {factorial_recursive}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
