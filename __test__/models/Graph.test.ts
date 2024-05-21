import { Graph } from "./../../src/models/Graph";

/**
 * Test suite for the Graph class.
 */
describe("Graph", () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  // Test for adding a single vertex
  test("should add a single vertex", () => {
    graph.addVertex("A");
    expect(graph["adjacencyList"]["A"]).toEqual([]);
  });

  // Test for adding multiple vertices
  test("should add multiple vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    expect(graph["adjacencyList"]["A"]).toEqual([]);
    expect(graph["adjacencyList"]["B"]).toEqual([]);
  });

  // Test for adding an edge
  test("should add an edge between two vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    expect(graph["adjacencyList"]["A"]).toEqual(["B"]);
    expect(graph["adjacencyList"]["B"]).toEqual(["A"]);
  });

  // Test for depth-first search (DFS)
  test("should perform DFS correctly", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");

    const result = graph.DFS("A");
    expect(result).toEqual(["A", "C", "B", "D"]);
  });

  // Test for breadth-first search (BFS)
  test("should perform BFS correctly", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");

    const result = graph.BFS("A");
    expect(result).toEqual(["A", "B", "C", "D"]);
  });
});
