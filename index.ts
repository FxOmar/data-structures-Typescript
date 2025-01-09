import { Stack, ArrayBasedStack } from './stacks';
import { Queue } from './queues';

const stack = new Stack<Array<{ x: number; y: number }>>();
const arrayBasedStack = new ArrayBasedStack<{ x: number; y: number }>();

arrayBasedStack.push({ x: 1, y: 2 });
arrayBasedStack.push({ x: 3, y: 4 });
arrayBasedStack.push({ x: 5, y: 6 });

stack.push([{ x: 1, y: 2 }]);
stack.push([{ x: 3, y: 4 }]);
stack.push([{ x: 5, y: 6 }]);

// Queues
const queue = new Queue<string>();

queue.enqueue('Hello');
queue.enqueue('world');
queue.enqueue('!');
queue.enqueue('new year');

queue.dequeue();

console.log(queue.peek());
console.log(queue);
