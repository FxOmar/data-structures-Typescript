import { Node } from './node';

export class Queue<T> {
  public size: number;

  constructor(
    public front: Node<T> | null = null,
    public rear: Node<T> | null = null
  ) {
    this.front = front;
    this.rear = rear;
    this.size = 0;
  }

  isEmpty() {
    return !this.front && !this.rear;
  }

  enqueue(value: T) {
    const newNode = new Node<T>(value);

    if (!this.front && !this.rear) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear?.setNextNode(newNode);
      this.rear = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty!');
    }

    const frontNode = this.front;

    if (frontNode) {
      this.front = frontNode.getNextNode();
      this.size--;
    }
  }

  peek() {
    return this.rear?.getValue();
  }
}

export class ArrayBasedQueue<T> {
  public queue: Array<T>;

  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(value: T) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    this.queue.shift();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }
}
