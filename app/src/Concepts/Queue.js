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
						<div class="Section"><li>A first in first out data structure</li></div>
						<div class="Section">
							<li>
								Used in programming in cases:<br />
								<div class="font-sm">
									<ul>
										<li>Background tasks</li>
										<li>Uploading resources</li>
										<li>Printing</li>
										<li>Task processing</li>
									</ul>
								</div>
							</li>
						</div>
						<div class="Section"><li>Useful for processing tasks and are foundational for more complex data structures</li></div>
						<div class="Section">
							<li>
								Big O of Queues
								<div class="indent-extra font-sm">
									<div>Insertion: O(1)</div>
									<div>Removal: O(1)</div>
									<div>Searching: O(n)</div>
									<div>Access: O(n)</div>
								</div>
							</li>
						</div>
						<div class="Section">
							<li>
								It is possible to implement a Queue with an array, for example:<br />
								<div class="Code">
									<pre>
										<code>
											{array_implementation}
										</code>
									</pre>
								</div>
								<div class="font-sm">The first element with value 5 will be removed since it was added first to the array, when removing from an array, every item would have to be re-indexed making this method less ideal</div>
							</li>
						</div>
						<div class="Section"><li>A Queue can be implemented using a Linked List to avoid re-indexing every element in the list</li></div>
						<div class="Section">
							<li>Implementation steps using the Linked List method
								<ul>
									<li>
										Enqueue
										<ul>
											<li>1) This function accepts some value</li>
											<li>2) Create a new node using that value passed to the function</li>
											<li>3) If there are no nodes in the queue, set this node to be the first and last property of the queue</li>
											<li>4) Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node</li>
										</ul>
									</li>
									<li>Dequeue
										<ul>
											<li>1) If there is no first property, return null</li>
											<li>2) Store the first property in a variable</li>
											<li>3) If there is only one node, set the first and last to be null</li>
											<li>4) If there is more than one node, set the first property to be the next property of first</li>
											<li>5) Decrement the size by one</li>
											<li>6) Return the value of the node dequeued</li>
										</ul>
									</li>
								</ul>
							</li>
						</div>
					</div>
				</ul>
			</div>
		</div>
	)
}
