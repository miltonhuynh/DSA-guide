import React from 'react'

export default function Graphs() {
  return (
		<div class="Concept_page">
			<div class="Concept_title">Graphs</div>
			<div class="Container font-m">
				<ul>
					<li>A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph</li><br/>
					<li>
						Uses for graphs:
						<ul class="font-sm">
							<li>Social Networks</li>
							<li>Location / Mapping</li>
							<li>Routing Algorithms</li>
							<li>Visual Hierachy</li>
							<li>File System Optimizations</li>
						</ul>
					</li><br/>
					<li>
						Some definitions:
						<ul class="font-sm">
							<li><u>Vertex</u>: a node</li>
							<li><u>Edge</u>: connection between nodes</li>
							<li><u>Weighted/Unweighted</u>: values assigned to distances between vertices</li>
							<li><u>Directed/Undirected</u>: directions assigned to distances between vertices</li>
						</ul>
					</li><br/>
					<li>
						There are two main ways to store a graph:<br/>
						<ul class="font-sm">
							<li>
								1) <u>Adjacency Matrix</u>
								<ul class="font-xsm">
								<li>Stores a graph of N nodes with a two dimensional N x N array</li><br/>
								<img src={require('../images/adj_matrix.png')} style={{width: "45vw"}} alt="Adjacency matrix illustration"></img><br/><br/>
								</ul>
							</li>
							<li>
								2) <u>Adjacency Graph</u>
								<ul class="font-xsm">
									<li>Represents a graph as an array of linked lists</li>
									<li>The index of the array represents a vertex and each element in its linked list represents the other vertices that form an edge with the vertex</li>
									<li>Efficient in terms of storage because we only need to store the values for the edges</li><br/>
									<img src={require('../images/adj_list.png')} style={{width: "45vw"}} alt="Adjacency list	 illustration"></img>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	)
}
