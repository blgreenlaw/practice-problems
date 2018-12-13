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
 if(arrayToRotate.length > 0 && stepsToRotateBy > 0){
  for(counter = 1; counter <= stepsToRotateBy; counter++){
  	tempElement = arrayToRotate.pop();
    console.log(tempElement);
    arrayToRotate.unshift(tempElement);
    console.log(arrayToRotate);
  }
  console.log(arrayToRotate);
  return arrayToRotate;
} else { 
  return "Must supply an array with at least 1 element and steps to rotate by must be greater than 0.";
  }
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
document.querySelector("#test3").innerHTML = "Test 3 Input: Array: [1,2,3,4,5] Steps:0, Output: " + arrayRotate([1,2,3,4,5], 0) + " Test 3: result should be: Must supply an array with at least 1 element and steps to rotate by must be greater than 0.  ";
//Test 4: result should be 
document.querySelector("#test4").innerHTML = "Test 4 Input: Array: [1,2,3,4,5] Steps: -1, Output: " + arrayRotate([1,2,3,4,5], -1) + " Test 4: result should be: Must supply an array with at least 1 element and steps to rotate by must be greater than 0.  ";
//Test 5: result should be 
document.querySelector("#test5").innerHTML = "Test 5 Input: Array: [] Steps: 3, Output: " + arrayRotate([], 3) + " Test 5: result should be: Must supply an array with at least 1 element and steps to rotate by must be greater than 0. ";
//Test 6: result should be [1,2,3,4,5]
document.querySelector("#test6").innerHTML = "Test 6 Input: Array: [1,2,3,4,5] Steps: 5, Output: " + arrayRotate([1,2,3,4,5], 5) + " Test 6: result should be [1,2,3,4,5]";


