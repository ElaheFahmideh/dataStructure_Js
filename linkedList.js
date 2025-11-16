class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newElement = { value, next: null };

    if (this.tail) this.tail.next = newElement;
    this.tail = newElement;

    if (!this.head) this.head = newElement;
  }

  prepend(value) {
    const newElement = { value, next: this.head };
    this.head = newElement;
    if (!this.tail) this.tail = newElement;
  }

  delete(value) {
    if (!this.head) return;
    let currentElement = this.head;

    while (this.head && this.head.value === value) this.head = this.head.next;

    while (currentElement.next) {
      if (currentElement.next.value === value)
        currentElement.next = currentElement.next.next;
      else currentElement = currentElement.next;
    }

    while (this.tail === value) this.tail === currentElement;
  }

  toArray() {
    let elements = [];
    let currentElement = this.head;

    while (currentElement) {
      elements.push(currentElement);
      currentElement = currentElement.next;
    }

    return elements;
  }
}

const list = new LinkedList();

list.append("1");
list.append("1");
list.append("2");
list.append("2");
list.append("3");
list.prepend("first value");
list.prepend("first value");

list.delete("1");
list.delete("first value");

console.log(list.toArray());
