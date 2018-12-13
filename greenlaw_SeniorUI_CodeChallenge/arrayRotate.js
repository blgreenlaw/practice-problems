/**
 * Brianna Greenlaw 12/10/18
 * Code Challenge for Fidelity Senior UI position in Salt Lake City, UT
 * 
 * Array Rotate: rotate a given array to the right by n steps
 * 	EX. Given [1, 2, 3] and n=1, return [3, 1, 2]
 * 
 */
function arrayRotate(arrayToRotate, stepsToRotateBy){
	var counter;
  var tempElement;
  if(!Array.isArray(arrayToRotate)){
  	return "Must supply an array.";
  }
  if(arrayToRotate.length <= 0){
  	return "Must supply an array with at least one element.";
  }
 if(stepsToRotateBy <= 0){
 	return "Steps to rotate must be greater than 0."
 }
  for(counter = 1; counter <= stepsToRotateBy; counter++){
  	tempElement = arrayToRotate.pop();
    arrayToRotate.unshift(tempElement);
  }
  return arrayToRotate;
 
}
/*
 * Test Cases
 * 
 * To view test cases in action, view the following JSFiddle. https://jsfiddle.net/blgreenlaw/1b68eLdr/90423/
*/

//Test 1: result should be [3,4,5,1,2]
document.querySelector("#test1").innerHTML = "Test 1 Input: Array: [1,2,3,4,5] Steps:3, Output: " + arrayRotate([1,2,3,4,5], 3) + " Test 1: result should be [3,4,5,1,2]";
//Test 2: result should be [4,5,6,7,8,9,10,1,2,3]
document.querySelector("#test2").innerHTML = "Test 2 Input: Array: [1,2,3,4,5,6,7,8,9,10] Steps:, Output: " + arrayRotate([1,2,3,4,5,6,7,8,9,10], 7) + " Test 2: result should be [4,5,6,7,8,9,10,1,2,3]";
//Test 3: result should be  
document.querySelector("#test3").innerHTML = "Test 3 Input: Array: [1,2,3,4,5] Steps:0, Output: " + arrayRotate([1,2,3,4,5], 0) + " Test 3: Steps to rotate by must be greater than 0.  ";
//Test 4: result should be 
document.querySelector("#test4").innerHTML = "Test 4 Input: Array: [1,2,3,4,5] Steps: -1, Output: " + arrayRotate([1,2,3,4,5], -1) + " Test 4: Steps to rotate by must be greater than 0.  ";
//Test 5: result should be 
document.querySelector("#test5").innerHTML = "Test 5 Input: Array: [] Steps: 3, Output: " + arrayRotate([], 3) + " Test 5: result should be: Must supply an array with at least one element. ";
//Test 6: result should be 
document.querySelector("#test6").innerHTML = "Test 6 Input: Array: 'hello world' Steps: 5, Output: " + arrayRotate("hello world", 5) + " Test 6: Must supply an array.";
//Test 7: result should be 
document.querySelector("#test7").innerHTML = "Test 7 Input: Array: null Steps: 5, Output: " + arrayRotate(null, 5) + " Test 7: Must supply an array.";


