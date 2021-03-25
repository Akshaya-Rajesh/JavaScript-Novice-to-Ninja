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

//combining strings and no.s
let like = 10;
let s8 = 'The blog has ' + like + ' likes';
console.log(s8);


//template strings
const title = 'Best reads of 2019';
const author = 'Akshaya';
const likes = 30;

//concatenation way
let s9 = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'; 
console.log(s9);

//template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

//creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);