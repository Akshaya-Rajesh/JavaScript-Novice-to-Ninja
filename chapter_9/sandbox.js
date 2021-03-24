//for loops

for(let i = 0; i < 5; i++){
    console.log('in loop:',i);
}
console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];
for(i = 0; i < names.length; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loops
i = 0;
while(i < 5){
    console.log('in loop:', i);
    i++;
}

i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

//do while loops
i = 2;
do{
   console.log('value of i is ',i);
   i++;
}while(i < 5);

//if statements
let age = 25;
if(age>20){
    console.log('You are over 20 years old');
}

if(names.length > 2){
    console.log("that's a lot of ninjas!");
}

//else-if statements
let password = 'pass_word';
if(password.length >= 12){
    console.log('Password is mighty strong');
}else if(password.length >= 8){
    console.log('Password is long enough');
}else{
    console.log('Password is weak');
}

//logical operators - OR || and AND &&
password = 'p@ssword12345';
if(password.length >= 12 && password.includes('@')){
    console.log('Password is mighty strong');
}else if(password.length >= 8 || password.includes('@') && password.length > 5){ //order : &&,||
    console.log('Password is long enough');
}else{
    console.log('Password is weak');
}

//logical NOT (!)
let user = false;
if(!user){
    console.log('You must be logged in to continue');
}

//break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for(i = 0; i < scores.length; i++){
    if(scores[i] == 0){
        continue;
    }
    console.log('your score: ',scores[i]);
    if(scores[i] == 100){
        console.log('congrats, you got the top score');
        break;
    }
}

//switch statements
const grade = 'E';
switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('You got a D!');
        break;
    case 'E':
        console.log('You got an E!');
        break; 
    default:
        console.log('Not a valid grade');       
}

//variables and block scope
age = 30;
// let age = 40 results in error
if(true){
    let age = 40; //let age = 40 doesn't show error . but local scope. you can also use const instead of let
    console.log('inside 1st code block: ',age );
    if(true){
        let age = 50;
        console.log('inside 2nd code block: ',age );
    }
}
console.log('outside code block: ',age ); //use of var in time of initialization doesnt give variable scope