/**
 * Brianna Greenlaw 12/10/18
 * Code Challenge for Fidelity Senior UI position in Salt Lake City, UT
 * 
 * Factorial: given a number n , print out the factorial of n.
 * 	if n = 0, n factorial is 1, n! is not defined for negative numbers
 * 	EX. given n=3, return 6 (3! = 3*2*1)
 */

function factorial(n){
  	var tempNum = 0;
	var factorialProduct = 1;
	var counter;
	
	if(n >= 0){
		for(counter = n; counter >= 1; counter--){
			tempNum = counter;
			factorialProduct *= tempNum;
		}
		
		//the following line is the recursive version of this problem, which has worse runtime than the above method.
		//factorialProduct = n * factorial(n - 1);
	} else{
		//nothing defined
    factorialProduct = "Not defined for negative numbers.";
	}
	
	return factorialProduct; 
}




/*
 * Test Cases
 * To view test cases in action, view the following JSFiddle. 
 * https://jsfiddle.net/1b68eLdr/90293/
*/

//Test 1: result should be 24
document.querySelector("#test1").innerHTML = "Test 1 Input: 4, Output: " + factorial(4);
//Test 2: result should be 40320
document.querySelector("#test2").innerHTML = "Test 2 Input: 8, Output: " + factorial(8);
//Test 3: result should be  around 7.156945704 E+118
document.querySelector("#test3").innerHTML = "Test 3 Input: 80, Output: " + factorial(80);
//Test 4: result should be 1
document.querySelector("#test4").innerHTML = "Test 4 Input: 1, Output: " + factorial(1);
//Test 5: result should be 1
document.querySelector("#test5").innerHTML = "Test 5 Input: 0, Output: " + factorial(0);
//Test 6: result should be "Not defined for negative numbers."
document.querySelector("#test6").innerHTML = "Test 6 Input: -8, Output: " + factorial(-8);





