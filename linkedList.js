class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(arr) {
    this.head = this.initialize(arr);
  }

  initialize(arr) {
    const length = arr.length;
    let previousNode = new Node(arr[0]);
    const head = previousNode;
    for (let i = 1; i < length; i++) {
      const currentNode = new Node(arr[i]);
      previousNode.next = currentNode;
      previousNode = currentNode;
    }
    return head;
  }
}
