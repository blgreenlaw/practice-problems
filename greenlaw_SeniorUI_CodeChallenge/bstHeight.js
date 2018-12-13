/**
 * Brianna Greenlaw 12/10/18
 * Code Challenge for Fidelity Senior UI position in Salt Lake City, UT
 * 
 * BST Height: given a binary search tree, return its height (max depth reached by the tree)
 * 	EX. given a BST with a single node, return 0.
 				This exmple is incorrect. The smallest height of a tree with at least one node (root node) is 1. So that is what the following function looks for.
 * 	EX. given a linear BST with only right side nodes 0->1->2-> null, where 2 is the tail, return 2 as max height
 */

function Node(data){
	this.data = data;
	this.left = null;
  this.right = null;
}

function BSTHeight(node){
var leftHeight = 0;
var rightHeight = 0;
	if(node === null){
  	return 0; //if there is no root node there is no tree.
	}
  leftHeight = BSTHeight(node.left);
  rightHeight = BSTHeight(node.right);
  
  return 1 + Math.max(leftHeight, rightHeight);
}


/*
 * Test Cases
 * to view the test cases please go to the following JSFiddle. 
 * https://jsfiddle.net/1b68eLdr/90294/
 */

var head = new Node(10);
head.left = new Node(5);
head.right = new Node(20);
head.right.right = new Node(25);

//Test 1: should be 3
document.querySelector("#test1").innerHTML = "Test 1: " + BSTHeight(head);

head.right.right.right = new Node(35);
head.right.right.right.right = new Node(45);

//Test 2: should be 5
document.querySelector("#test2").innerHTML = "Test 2: " + BSTHeight(head);

head.left.left = new Node(4);
head.left.left.left = new Node(1);
head.left.left.right = new Node(2);

//Test 3: should be 5
document.querySelector("#test3").innerHTML = "Test 3: " + BSTHeight(head);

head.left.left.right.left = new Node(1);
head.left.left.right.left.right = new Node(2);

//Test 4: should be 6
document.querySelector("#test4").innerHTML = "Test 4: " + BSTHeight(head);

head.left = null;
head.right = null;

//Test 5: should be 1
document.querySelector("#test5").innerHTML = "Test 5: " + BSTHeight(head);

head = null;

//Test 6: should be 0
document.querySelector("#test6").innerHTML = "Test 6: " + BSTHeight(head);

