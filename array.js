var regno=[1,2,3,4,5]
console.log("Registration numbers are: " + regno);
console.log(regno[0])
console.log(regno.length)
console.log("Array in reverse order: " + regno.reverse());
console.log(regno.push(6))
console.log("After adding new registration number: " + regno);
console.log(regno.sort())
console.log("Sorted registration numbers: " + regno);
console.log("Removing last registration number: " + regno.pop());
console.log("After removing last registration number: " + regno);
console.log("Index of registration number 3 is: " + regno.indexOf(3));
console.log("Is registration number 4 present? " + regno.includes(4));
console.log("Sliced array from index 1 to 3: " + regno.slice(1,4));
console.log("Joining array elements: " + regno.join("-"));
console.log("Array to string: " + regno.toString());
console.log("Concatenating with another array: " + regno.concat([7,8,9]));
console.log(regno.pop())