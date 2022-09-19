import React from 'react'

export default function Graphs() {
  const implementation =
  `class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
          this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}`

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
									<img src={require('../images/adj_list.png')} style={{width: "45vw"}} alt="Adjacency list illustration"></img>
								</ul>
							</li><br/>
              <li>Differences between Adjacency Matrices and Adjacency Lists</li>
              <ul class="font-xsm">
                <li>
                  Big O<br/><br/>
                  <img src={require('../images/adj_compare.png')} style={{width: "40vw"}} alt="Adjacency comparison illustration"></img>
                </li>
                <li>Adjacency lists take up less space in sparse graphs in comparison to matrices</li>
                <li>Adjacency lists are also faster to iterate over all edges</li>
                <li>Adjacency matrices are faster to lookup a specific edge though</li>
                <li>Adjacency lists tend to be better for the real world since in most situations, there are more vertices and less connections</li>
              </ul>
						</ul>
					</li><br/>
					<li>Implementation steps:</li>
					<ul class="font-sm">
						<li>
							Add vertex (data point)
							<ul class="font-xsm">
								<li>Write a method that accepts the name of a vertex</li>
								<li>It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array</li>
								<img src={require('../images/addvertex.png')} style={{width: "20vw"}} alt="Adding a vertex illustration"></img>
							</ul>
						</li>
						<li>
							Add edge (connection between 2 vertices)
							<ul class="font-xsm">
								<li>The function should accept two vertices, you can call them vertex1 and vertex2</li>
								<li>The function should find in the adjacency list the key of vertex1 and push vertex2 to the array</li>
								<li>The function should find in the adjacency list the key of vertex2 and push vertex1 to the array</li>
								<img src={require('../images/addedge.png')} style={{width: "25vw"}} alt="Adding a edge illustration"></img>
							</ul>
						</li>
					</ul>
				</ul>
        <div class="font-l">JavaScript Implementation</div>
        <div class="Code">
          <pre>
            <code>
              {implementation}
            </code>
          </pre>
        </div>
			</div>
		</div>
	)
}
