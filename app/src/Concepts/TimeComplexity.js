import React from 'react'

const slow_snippet = 
`function addUpToFirst(n) { 
  var total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}`

const fast_snippet = 
`
function addUpToSecond(n) {
  return n * (n + 1) / 2;
}
`

export default function BigO() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Time Complexity</div>
      <div class="Concept_description">
        Time complexity describes how long it takes a computer to run an algorithm. There are many ways to 
        solve a problem but some methods will take less time than others. It is important to consider
        run time as the amount of data grows so will how long it will take the function to return an answer.
        <br /><br />
        For example, consider a function that adds all the numbers from 1 to some number n.
        <br /><br />
        Method 1:
        <br />
        <pre>
          <div class="Code_box Code">
            {slow_snippet}
          </div>
        </pre>
        <br />
        Method 2:
        <br />
        <pre>
          <div class="Code_box Code">
            {fast_snippet}
          </div>
        </pre>
        Both of these methods return the same value, but the first method has to run an additional operation 
        as the size of n increases. Whereas in the method 2, it is constant.

        <h1>Big O Notation</h1>
        <img src={require('../images/bigo.jpg')} style={{width: "40vw"}} alt="Big O graph"></img>
        <div>To summarize how efficient an algorithm is, we generalize its performance to Big O.</div>

        <h3>O(1)</h3>
        <h4>Constant time as n scales</h4>
        <pre>
          <code class="Code_box Code">
            let x = 5;
          </code>
        </pre>
        <h3>O(log n)</h3>
        <h3>O(n)</h3>
        <h3>O n(log n)</h3>
        <h3>O n2</h3>
      </div>

    </div>
  )
}
