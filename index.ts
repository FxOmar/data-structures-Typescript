import { Stack, ArrayBasedStack } from './stacks';
import { Queue, ArrayBasedQueue } from './queues';

const stack = new Stack<Array<{ x: number; y: number }>>();
const arrayBasedStack = new ArrayBasedStack<{ x: number; y: number }>();

arrayBasedStack.push({ x: 1, y: 2 });
arrayBasedStack.push({ x: 3, y: 4 });
arrayBasedStack.push({ x: 5, y: 6 });

stack.push([{ x: 1, y: 2 }]);
stack.push([{ x: 3, y: 4 }]);
stack.push([{ x: 5, y: 6 }]);

// Queues
const queue = new Queue<{ x: number; y: number }>();
const queueArray = new ArrayBasedQueue<{ x: number; y: number }>();

queue.enqueue({ x: 1, y: 2 });
queue.enqueue({ x: 5, y: 4 });
queue.enqueue({ x: 11, y: 5 });

queue.dequeue();

queueArray.enqueue({ x: 1, y: 2 });
queueArray.enqueue({ x: 5, y: 4 });
queueArray.enqueue({ x: 11, y: 5 });

queueArray.dequeue();

console.log(queueArray.peek());
console.log(queue.peek());
