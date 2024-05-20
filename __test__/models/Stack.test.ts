import { Stack } from "./../../src/models/Stack";


/**
 * Test suite for the Stack class.
 */
describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  
  test("should initialize as empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("should push elements onto the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(2);
  });

  test("should pop elements from the stack", () => {
    stack.push(1);
    stack.push(2);
    const popped = stack.pop();
    expect(popped).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  test("should return null when popping from an empty stack", () => {
    const popped = stack.pop();
    expect(popped).toBeNull();
  });

  test("should return null when peeking into an empty stack", () => {
    const peeked = stack.peek();
    expect(peeked).toBeNull();
  });

  test("should peek the top element without removing it", () => {
    stack.push(1);
    stack.push(2);
    const peeked = stack.peek();
    expect(peeked).toBe(2);
    expect(stack.peek()).toBe(2);
  });
});
