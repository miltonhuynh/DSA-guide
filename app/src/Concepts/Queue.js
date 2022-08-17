import React from 'react'

export default function Queue() {
	const array_implementation = 
	`var queue = [];
queue.push(5)
queue.push(2)
queue.shift()`

  return (
    <div class="Concept_page">
			<div class="Concept_title">Queue</div>
			<div class="Container">
				<ul>
					<div class="font-m">
							<li>A first in first out data structure</li><br/>
							<li>
								Used in programming in cases:<br/>
								<div class="font-sm">
									<ul>
										<li>Background tasks</li>
										<li>Uploading resources</li>
										<li>Printing</li>
										<li>Task processing</li><br/>
									</ul>
								</div>
							</li>
							<li>Useful for processing tasks and are foundational for more complex data structures</li>
							<li>
              Big O of Queues
              <div class="indent-extra font-sm">
                <div>Insertion: O(1)</div>
                <div>Removal: O(1)</div>
                <div>Searching: O(n)</div>
                <div>Access: O(n)</div>
              </div>
            </li><br/>
            <li></li>
							<li>
								It is possible to implement a Queue with an array, for example:<br/>
								<div class="Code">
									<pre>
										<code>
											{array_implementation}
										</code>
									</pre>
								</div>
							<div class="font-sm">The first element with value 5 will be removed since it was added first to the array, when removing from an array, every item would have to be re-indexed making this method less ideal</div>
							</li><br/>
							<li>A Queue can be implemented using a Linked List to avoid re-indexing every element in the list</li>
							<li>Implementation steps using the Linked List method</li>
							<ul><li>Enqueue</li></ul>
							<div class="indent-extra font-sm">
								<div>1) This function accepts some value</div>
								<div>2) Create a new node using that value passed to the function</div>
								<div>3) If there are no nodes in the queue, set this node to be the first and last property of the queue</div>
								<div>4) Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node</div>
							</div>
							<ul><li>Dequeue</li></ul>
							<div class="indent-extra font-sm">
								<div>1) If there is no first property, return null</div>
								<div>2) Store the first property in a variable</div>
								<div>3) If there is only one node, set the first and last to be null</div>
								<div>4) If there is more than one node, set the first property to be the next property of first</div>
								<div>5) Decrement the size by one</div>
								<div>6) Return the value of the node dequeued</div>
							</div>
					</div>
				</ul>
			</div>
    </div>
  )
}
