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

  find(value) {
    if (!this.head) return;
    let currentElement = this.head;

    while (currentElement) {
      if (currentElement.value === value) return currentElement;
      currentElement = currentElement.next;
    }
    return;
  }

  insertAfter(value, afterValue) {
    const existingElement = this.find(afterValue);

    if (existingElement) {
      const newElement = { value, next: existingElement.next };
      existingElement.next = newElement;
    }
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
list.append("2");
list.append("3");
list.append("4");
list.prepend("first value");
list.delete("4");
list.insertAfter("4", "3");

console.log(list.find("2"));
console.log(list.toArray());
