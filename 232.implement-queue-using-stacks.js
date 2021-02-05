/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

/**
 * Initialize your data structure here.
 */
const MyQueue_function = function () {};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// @lc code=start
// * class version
class MyQueue {
  constructor() {
    this.stack = [];
  }

  push = x => this.stack.push(x);

  pop = () => this.stack.shift(); // Removes the element from the front of the queue and returns it.

  peek = () => this.stack[0];

  empty = () => this.stack.length === 0;
}
// @lc code=end
