let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
console.log(ninjas.length);

ninjas[1]= 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

//array methods
let r1 = ninjas.join('-');
console.log(r1);

let r2 = ninjas.indexOf('chun-li');
console.log(r2);

let r3 = ninjas.concat(['huan', 'crystal']);
console.log(r3);

let r4 = ninjas.push('Dane'); //return the length of the new array  : alter the original one --> destructive method
console.log(r4);
console.log(ninjas);

let r5 = ninjas.pop(); //return the deleted item
console.log(r5);
console.log(ninjas);