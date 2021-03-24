//booleans and comparisons
console.log(true, false, "true", "false"); //they are different

//methods can return booleans
let email = 'akshaya_rajesh@hotmail.com';
let names = ['mario', 'luigi', 'toad']; 

let result = email.includes('@');
console.log(result);

result = names.includes('Dane');
console.log(result);

//comparison operators
age = 25;
console.log(age == 50);
console.log(age == 25);
console.log(age != 30);
console.log(age != 25);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal'); //s comes later in alphabets
console.log(name > 'Shaun'); //lower case letters are greater than uppercase letters
console.log(name > 'Crystal');

//loose comparison (different types can still be equal)
console.log(age == 25);
console.log(age == '25'); //returns true

//strict comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === '25'); //returns false
console.log(age !== 25);
console.log(age !== '25');