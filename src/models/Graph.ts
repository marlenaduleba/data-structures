/**
 * Class representing a graph.
 */
export class Graph {
  private adjacencyList: { [key: string]: string[] } = {};

  /**
   * Adds a vertex to the graph.
   * @param {string} vertex - The name of the vertex to add.
   */
  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  /**
   * Adds an edge between two vertices in the graph.
   * @param {string} vertex1 - The first vertex.
   * @param {string} vertex2 - The second vertex.
   */
  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /**
   * Performs a depth-first search (DFS) starting from a given vertex.
   * @param {string} start - The starting vertex.
   * @returns {string[]} - The vertices visited during the DFS, in the order they were visited.
   */
  DFS(start: string): string[] {
    const stack = [start];
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop() as string;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  /**
   * Performs a breadth-first search (BFS) starting from a given vertex.
   * @param {string} start - The starting vertex.
   * @returns {string[]} - The vertices visited during the BFS, in the order they were visited.
   */
  BFS(start: string): string[] {
    const queue = [start];
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift() as string;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
