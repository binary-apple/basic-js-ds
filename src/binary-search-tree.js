const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(r = null) {
    this.Root = r;
  }

  root() {
    return this.Root;
  }

  add(data) {
    if (this.Root === null) {
      this.Root = new Node(data);
      return;
    } 
    let curr = this.Root;
    while (1) {
      if (data < curr.data) {
        if (curr.left === null) { curr.left = new Node(data); return; }
        else { curr = curr.left; continue; }
      }
      if (data > curr.data) {
        if (curr.right === null) { curr.right = new Node(data); return; }
        else { curr = curr.right; continue; }
      }
    }
  }

  has(data) {
    if (this.Root === null) {
      return false;
    }
    let curr = this.Root;
    while (1) {
      if (data == curr.data) { return true; }
      if (data < curr.data) {
        if (curr.left === null) { return false; }
        else { curr = curr.left; continue; }
      }
      if (data > curr.data) {
        if (curr.right === null) { return false; }
        else { curr = curr.right; continue; }
      }
    }
  }

  find(data) {
    if (this.Root === null) {
      return null;
    }
    let curr = this.Root;
    while (1) {
      if (data == curr.data) { return curr; }
      if (data < curr.data) {
        if (curr.left === null) { return null; }
        else { curr = curr.left; continue; }
      }
      if (data > curr.data) {
        if (curr.right === null) { return null; }
        else { curr = curr.right; continue; }
      }
    }
  }

  remove(data) {
    if (this.Root === null) {
      return null;
    }
    let curr = this.Root;
    let parent = null;
    while (1) {
      if (data == curr.data) { break; }
      if (data < curr.data) {
        if (curr.left === null) { return null; }
        else { parent = curr; curr = curr.left; continue; }
      }
      if (data > curr.data) {
        if (curr.right === null) { return null; }
        else { parent = curr; curr = curr.right; continue; }
      }
    }
    //no children
    if (parent === null && !(curr.left) && !(curr.right)) { this.Root = null; return; } 
    if (!(curr.left) && !(curr.right)) { 
      if (parent.left == curr) { parent.left = null; return; }
      if (parent.right == curr) { parent.right = null; return; }
    }
    //one child
    if (parent === null && curr.left && !(curr.right)) { this.Root = curr.left; return; }
    if (parent === null && !(curr.left) && curr.right) { this.Root = curr.right; return; }
    if (curr.left && !(curr.right)) {
      if (parent.left == curr) { parent.left = curr.left; return; }
      if (parent.right == curr) { parent.right = curr.left; return; }
    }
    if (!(curr.left) && curr.right) {
      if (parent.left == curr) { parent.left = curr.right; return; }
      if (parent.right == curr) { parent.right = curr.right; return; }
    }
    //two children
    if (curr.left && curr.right) {
      let tmp = new BinarySearchTree(curr.right);
      curr.data = tmp.min();
      tmp.remove(curr.data);
      curr.right = tmp.Root;
    }

  }

  min() {
    if (this.Root === null) {
      return null;
    }
    let curr = this.Root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    if (this.Root === null) {
      return null;
    }
    let curr = this.Root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree
};