import React from 'react'

export default function BinaryTree() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Binary Trees</div>
      <div class="Container">
				<ul class="font-m">
					<li>A tree is a data structure that consists of nodes in a parent/child relationship, nodes can only point to a child and cannot have more than one parent</li><br/>
					<li> Some uses of trees:</li>
					<ul class="font-sm">
						<li>HTML DOM</li>
						<li>Network Routing</li>
						<li>Abstract Syntax Tree</li>
						<li>Artificial Intelligence</li>
						<li>Folders in Operating Systems</li>
						<li>Computer File Systems</li>
					</ul><br/>
					<li>Common Definitions:</li>
					<ul class="font-sm">
						<li>Root: the top node in a tree</li>
						<li>Child: a node directly connected to another node when moving away from the Root</li>
						<li>Sibling: a group of nodes with the same parent</li>
						<li>Leaf: a is node with no children</li>
					</ul><br/>
					<li>A Binary Search tree is a special type of tree in which: </li>
					<ul class="font-sm">
						<li>Every parent node has at most two children</li>
						<li>Every node to the left of a parent node is always less than the parent</li>
						<li>Every node to the right of a parent node is always greater than the parent</li><br/>
					</ul>
					<img src={require('../images/binarytree.png')} style={{width: "30vw"}} alt="Singly linked list illustration"></img><br/><br/>
					<li>Implementation Steps</li>
					<ul class="font-sm">
						<li>Create a Node class with a constructor to create properties value, left and right</li>
						<li>Create a Tree class with a constructor to create the root node</li>
						<li>
							Insert
							<ul class="font-sm">
								<li>Create a new node</li>
								<li>Check if there is a root, if not, the root becomes the new node</li>
								<li>If there is a root, check if the value of the new node is greater than or less than the value of the root</li>
								<li>
									If it is greater, check to see if there is a node to the right
									<ul class="font-xsm">
										<li>If there is, move to that node and repeat these steps</li>
										<li>If there is not, add that node as the right property</li>
									</ul>
								</li>
								<li>
									If it is less, check to see if there is a node to the left
									<ul class="font-xsm">
										<li>If there is, move to that node and repeat these steps</li>
										<li>If there is not, add that node as the left property</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</ul>
      </div>
    </div>
  )
}
