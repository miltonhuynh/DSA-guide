import React from 'react'

export default function DynamicProgramming() {

  return (
    <div class="Concept_page">
      <div class="Concept_title">Dynamic Programming</div>
      <div class="Container font-m">
        <ul>
          <li>Dynamic programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions</li><br/>
          <li>Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial.</li><br/>
          <li>
            <u>Overlapping subproblems</u>
            <ul class="font-sm">
              <li>A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times</li>
              <li>
                An example is the Fibonacci sequence, "every number after the first two is the sum of the two preceding ones", we are able to break down the problem into smaller steps<br/>
                <img src={require('../images/fibnum.png')} style={{width: "40vw"}} alt="Fibonacci illustration"></img>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}