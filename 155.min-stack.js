/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.data.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.data);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// * ----------- class version -----------
class MinStack {
  constructor() {
    this.stack = [];
  }

  push = x => this.stack.push(x);

  pop = () => this.stack.pop();

  top = () => this.stack[this.stack.length - 1];

  getMin = () => Math.min(...this.stack);
}
// * ----------- class version -----------

// @lc code=start
// * ----------- class version 2 -----------
class MinStack {
  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  push = x => {
    if (x < this.min) {
      this.min = x;
    }
    return this.stack.push(x);
  };

  pop = () => {
    const popped = this.stack.pop();
    if (popped === this.min) {
      this.min = Math.min(...this.stack);
    }
  };

  top = () => this.stack[this.stack.length - 1];

  getMin = () => this.min;
}
// * ----------- class version 2 -----------
// @lc code=end

// ? https://leetcode.com/problems/min-stack/discuss/740132/JavaScript-Clean-ES6-Class-Using-2-Arrays
