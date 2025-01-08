import { Node } from './node';

export class Stack<T> {
  constructor(public top: Node<T> | null = null, public size: number = 0) {
    this.top = top;
    this.size = size;
  }

  isEmpty() {
    return this.top === null;
  }

  push(value: T) {
    const newNode = new Node(value);

    if (this.top) {
      newNode.setNextNode(this.top);
    }

    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    const topNode = this.top;

    if (topNode) {
      this.top = topNode.getNextNode();
      this.size--;
    }
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.top?.getValue();
  }
}
