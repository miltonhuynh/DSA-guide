import React from 'react'

export default function DynamicProgramming() {

  const recursive_fib = 
  `function fibonacci_recursive() {
    if (n <= 2) {
      return 1;
    }
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n-2)
  }`

  const memoized_fib = 
  `function memoized_fib(n, store=[]) {
    if(store[n] !== undefined) {
      return store[n];
    }
    if(n <= 2) {
      return 1;
    }
    var result = memoized_fib(n - 1, store) + memoized_fib(n - 2, store);
    store[n] = result;
    return result;
  } `

  return (
    <div class="Concept_page">
      <div class="Concept_title">Dynamic Programming</div>
      <div class="Container font-m">
        <ul>
          <li>Dynamic programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions</li><br/>
          <li>Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial.</li><br/>
          <li>
            There are two main properties that suggests that a problem can be solved using Dynamic programming:<br/>
            <div class="indent">
              <u>1) Overlapping subproblems</u>
              <ul class="font-sm">
                <li>A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times</li>
                <li>
                  An example is the Fibonacci sequence, "every number after the first two is the sum of the two preceding ones", we are able to break down the problem into smaller steps (subproblems)<br/>
                  <img src={require('../images/fibnum.png')} style={{width: "40vw"}} alt="Fibonacci illustration"></img>
                </li>
              </ul>
            </div>
            <div class="indent">
              <u>2) Optimal substructure</u>
              <ul class="font-sm">
                <li>A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems</li>
                <li>
                  An example is the Shortest Path Problem, if we know that A -> B -> C -> D is the shortest path from A to D, then A -> B -> C is the shortest path from A to C and A -> B is the shortest path from A to B
                  <img src={require('../images/shortestpath.png')} style={{width: "40vw"}} alt="Shortest path illustration"></img>
                </li>
              </ul>
            </div>
          </li><br/>
          <li>
            For example, we can use recursion to solve the Fibonacci problem for the n-th input, but this solution is not ideal and we can implement Dynamic Programming to optimize it
            <ul class="font-sm">
              <div class="Code">
                <pre>
                  <code>
                    {recursive_fib}
                  </code>
                </pre>
              </div>
              <li>The issue with this method is the growth rate is O(2^n), this solution repeats calculations that have already been done, the function does not know this</li>
              <img src={require('../images/fibgrowth.png')} style={{width: "50vw"}} alt="Big O fibonacci recursive illustration"></img><br/><br/>
              <li>We can use <u>memoization</u> to store the result of functions calls and use them when they show up again</li>
              <div class="Code">
                <pre>
                  <code>
                    {memoized_fib}
                  </code>
                </pre>
              </div>
              The time complexity of this solution is O(n), much better than using recursion alone<br/><br/>
              <li>We can also use <u>tabulation</u> which has a better space complexity.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}