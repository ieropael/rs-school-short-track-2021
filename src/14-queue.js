const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    let count = 0;
    function getSize(current) {
      if (current.next) {
        getSize(current.next);
      }
      count++;
    }
    getSize(this.head);
    return count;
  }

  enqueue(element) {
    const list = new ListNode(element);
    if (!this.head) {
      this.head = list;
      this.tail = this.head;
    } else {
      this.tail.next = list;
      this.tail = this.tail.next;
    }
    return this.head;
  }

  dequeue() {
    const deleted = this.head.value;
    this.head = this.head.next;
    return deleted;
  }
}

module.exports = Queue;
