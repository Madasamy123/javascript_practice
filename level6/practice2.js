class Stack {
    constructor() {
      this.stack = []; // Initialize an empty array to store stack elements
    }
  
    // Add an element to the stack
    push(element) {
      this.stack.push(element);
    }
  
    // Remove and return the top element of the stack
    pop() {
      return this.stack.pop();
    }
  
    // Return the top element without removing it
    peek() {
      if (this.stack.length === 0) {
        return undefined;
      }
      return this.stack[this.stack.length - 1];
    }
  
    // Return the sum of all elements in the stack
    sum() {
      return this.stack.reduce((total, num) => total + num, 0);
    }
  }
  
  // Example usage
  const myStack = new Stack();
  
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);
  
  console.log("Top element (peek):", myStack.peek()); // Output: 30
  console.log("Sum of elements:", myStack.sum());     // Output: 60
  
  console.log("Removed element (pop):", myStack.pop()); // Output: 30
  console.log("New top element (peek):", myStack.peek()); // Output: 20
  console.log("New sum of elements:", myStack.sum());     // Output: 30
  