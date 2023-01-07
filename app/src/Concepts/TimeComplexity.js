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

export default function BigO() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Time Complexity</div>
      <div class="Container font-m">
        <ul>
          <div class="Section"><li>Time complexity describes how long it takes a computer to run an algorithm. There are many ways to solve a problem but some methods will take less time than others. It is important to consider run time as the amount of data grows so will how long it will take the function to return an answer.</li></div>

          <div class="Section"><li>For example, consider a function that adds all the numbers from 1 to some number n.</li></div>

          <div class="Section">Method 1:
            <pre>
              <div class="Code">
                {slow_snippet}
              </div>
            </pre>
          </div>
          <div class="Section">Method 2:
            <pre>
              <div class="Code">
                {fast_snippet}
              </div>
            </pre>
          </div>
          <div class="Section"><li>Both of these methods return the same value, but the first method has to run an additional operation as the size of n increases. Whereas in the method 2, it is constant.</li></div>

          <div class="Section"><u class="font-xl">Big O Notation</u>
            <img src={require('../images/bigo.jpg')} style={{ width: "40vw" }} alt="Big O graph"></img>
            <li>To summarize how efficient an algorithm is, we generalize its performance to Big O.</li>
          </div>
          <div class="Section">
            <div class="font-xl"><u>Most common Big O and examples</u></div><br />
            <ul>
              <li>
                <div class="font-l">O(1)</div>
                <div class="Code">
                  <pre>
                    <code>
                      let x = 5;
                    </code>
                  </pre>
                </div>
              </li>
              <li>
                <div class="font-l">O(log n)</div>
                <div class="Code">
                  <pre>
                    <code>
                      let x = 5;
                    </code>
                  </pre>
                </div>
              </li>
              <li>
                <div class="font-l">O(n)</div>
                <div class="Code">
                  <pre>
                    <code>
                      let x = 5;
                    </code>
                  </pre>
                </div>
              </li>
              <li>
                <div class="font-l">O n(log n)</div>
                <div class="Code">
                  <pre>
                    <code>
                      let x = 5;
                    </code>
                  </pre>
                </div>
              </li>
              <li>
                <div class="font-l">O n2</div>
                <div class="Code">
                  <pre>
                    <code>
                      let x = 5;
                    </code>
                  </pre>
                </div>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}
