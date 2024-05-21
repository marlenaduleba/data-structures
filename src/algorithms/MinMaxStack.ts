
/**
 * Represents a stack data structure that supports finding the minimum and maximum elements in constant time (O(1)).
 * @typeparam T The type of elements stored in the stack.
 */
export class MinMaxStack<T> {
    private stack: T[] = [];
    private minStack: T[] = [];
    private maxStack: T[] = [];
  
      /**
   * Pushes an element onto the stack.
   * @param element The element to push onto the stack.
   */
    push(element: T): void {
      this.stack.push(element);
  
      // Update the minStack with the new minimum element
      if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(element);
      }
  
      // Update the maxStack with the new maximum element
      if (this.maxStack.length === 0 || element >= this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.push(element);
      }
    }
  
     /**
   * Removes and returns the top element from the stack.
   * @returns The popped element from the stack, or undefined if the stack is empty.
   */
    pop(): T | undefined {
      const poppedElement = this.stack.pop();
      
       // If the popped element is the top element in minStack, remove it
      if (poppedElement !== undefined) {
        if (poppedElement === this.minStack[this.minStack.length - 1]) {
          this.minStack.pop();
        }
  
         // If the popped element is the top element in maxStack, remove it
        if (poppedElement === this.maxStack[this.maxStack.length - 1]) {
          this.maxStack.pop();
        }
      }
  
      return poppedElement;
    }
  
     /**
   * Returns the minimum element in the stack.
   * @returns The minimum element in the stack, or undefined if the stack is empty.
   */
    getMin(): T | undefined {
      return this.minStack[this.minStack.length - 1];
    }
  
     /**
   * Returns the maximum element in the stack.
   * @returns The maximum element in the stack, or undefined if the stack is empty.
   */
    getMax(): T | undefined {
      return this.maxStack[this.maxStack.length - 1];
    }
  }
  