//type conversion

let score = 100;
console.log(score + 1); //returns 101

score = '100';
console.log(typeof score);
console.log(score + 1); //returns 1001

score = Number(score);
console.log(typeof score);
console.log(score + 1); //returns 101

let result = Number('hello');
console.log(result); // returns Nan

result = String(50);
console.log(result, typeof result); // returns 5 string

result = Boolean(100);
console.log(result, typeof result); // returns true "boolean". all no.s except 0 returns true

result = Boolean(0);
console.log(result, typeof result); // returns false "boolean"  

result = Boolean(-20);
console.log(result, typeof result); // returns true "boolean"

result = Boolean('0');
console.log(result, typeof result); // returns true "boolean". all strings except empty string('') returns true

result = Boolean('');
console.log(result, typeof result); // returns false "boolean".