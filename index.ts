import { Stack, ArrayBasedStack } from './stacks';

const stack = new Stack<Array<{ x: number; y: number }>>();
const arrayBasedStack = new ArrayBasedStack<{ x: number; y: number }>();

arrayBasedStack.push({ x: 1, y: 2 });
arrayBasedStack.push({ x: 3, y: 4 });
arrayBasedStack.push({ x: 5, y: 6 });

stack.push([{ x: 1, y: 2 }]);
stack.push([{ x: 3, y: 4 }]);
stack.push([{ x: 5, y: 6 }]);

console.log(stack.peek()); // [{ x: 5, y: 6 }]
console.log(arrayBasedStack.peek()); // { x: 3, y: 4 }
