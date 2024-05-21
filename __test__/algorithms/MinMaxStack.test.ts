import { MinMaxStack } from "./../../src/algorithms/MinMaxStack";
/**
 * Test suite for the MinMaxStack class.
 */
describe("MinMaxStack", () => {
  let minMaxStack: MinMaxStack<number>;

  beforeEach(() => {
    minMaxStack = new MinMaxStack<number>();
  });

  // Test adding and removing elements
  test("push and pop elements", () => {
    minMaxStack.push(5);
    minMaxStack.push(3);
    minMaxStack.push(7);
    minMaxStack.push(2);

    expect(minMaxStack.pop()).toBe(2);
    expect(minMaxStack.pop()).toBe(7);
    expect(minMaxStack.pop()).toBe(3);
    expect(minMaxStack.pop()).toBe(5);
  });

  // Test getting minimum and maximum element
  test("getMin and getMax", () => {
    minMaxStack.push(5);
    minMaxStack.push(3);
    minMaxStack.push(7);
    minMaxStack.push(2);

    expect(minMaxStack.getMin()).toBe(2);
    expect(minMaxStack.getMax()).toBe(7);
  });

  // Test adding and removing elements after getting min and max
  test("push and pop elements after getting min and max", () => {
    minMaxStack.push(5);
    minMaxStack.push(3);
    minMaxStack.push(7);
    minMaxStack.push(2);

    minMaxStack.getMin();
    minMaxStack.getMax();

    minMaxStack.push(9);
    minMaxStack.push(1);

    expect(minMaxStack.getMin()).toBe(1);
    expect(minMaxStack.getMax()).toBe(9);
  });

  // Test getting minimum and maximum element after popping elements
  test("getMin and getMax after popping elements", () => {
    minMaxStack.push(5);
    minMaxStack.push(3);
    minMaxStack.push(7);
    minMaxStack.push(2);

    minMaxStack.pop();
    minMaxStack.pop();

    expect(minMaxStack.getMin()).toBe(3);
    expect(minMaxStack.getMax()).toBe(5);
  });

  // Test getting minimum and maximum element from an empty stack
  test("getMin and getMax on an empty stack", () => {
    expect(minMaxStack.getMin()).toBeUndefined();
    expect(minMaxStack.getMax()).toBeUndefined();
  });
});
