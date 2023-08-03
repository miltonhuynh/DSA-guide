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
  `function addUpToSecond(n) {
  return n * (n + 1) / 2;
}
`

const n_squared = 
  `\u00B2`

export default function BigO() {
  return (
    <div class="Concept_page">
      <h1>Time Complexity</h1>
      <main>
        <ul>
          <section><li>Time complexity describes how long it takes a computer to run an algorithm. There are many ways to solve a problem but some methods will take less time than others. It is important to consider run time as the amount of data grows so will how long it will take the function to return an answer.</li></section>

          <section><li>For example, consider a function that adds all the numbers from 1 to some number n.</li></section>

          <section>Method 1:
            <pre>
              <div class="Code">
                {slow_snippet}
              </div>
            </pre>
          </section>
          <section>Method 2:
            <pre>
              <div class="Code">
                {fast_snippet}
              </div>
            </pre>
          </section>
          <section><li>Both of these methods return the same value, but the first method has to run an additional operation as the size of n increases. Whereas in the method 2, it is constant.</li></section>

          <section><u class="font-xl">Big O Notation</u>
            <img src={require('../images/bigo.jpg')} style={{ width: "40vw" }} alt="Big O graph"></img>
            <li>To summarize how efficient an algorithm is, we generalize its performance to Big O.</li>
          </section>
        </ul>
      </main>
    </div>
  )
}
