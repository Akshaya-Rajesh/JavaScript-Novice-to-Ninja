//Strings
console.log('Hello, World');

let email = 'akshaya_rajesh@hotmail.com';
console.log(email);

//String concatenation
let firstName = 'Akshaya';
let lastName = 'Rajesh';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let s1 = fullName.toLowerCase();
console.log(s1, fullName);

let s2 = email.indexOf('@');
console.log(s2);

let s3 = email.lastIndexOf('a');
console.log(s3);

let s4 = email.slice(2,5); // slice(starting pos, ending pos)
console.log(s4);

let s5 = email.substr(4,10); //substr(starting pos, no of chars)
console.log(s5);

let s6 = email.replace('a','s'); // find the 1st a and replace it with s
console.log(s6);

let s7 = email.replaceAll('a','s'); // replace all the occurences of a with s
console.log(s7);