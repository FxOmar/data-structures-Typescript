export class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  setNextNode(next_node: Node<T> | null) {
    this.next = next_node;
  }

  getNextNode() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}
