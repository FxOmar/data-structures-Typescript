import { Stack } from './stacks';

const stack = new Stack<Array<{ x: number; y: number }>>();

stack.push([{ x: 1, y: 2 }]);
stack.push([{ x: 3, y: 4 }]);
stack.push([{ x: 5, y: 6 }]);

console.log(stack.peek()); // [{ x: 5, y: 6 }]
