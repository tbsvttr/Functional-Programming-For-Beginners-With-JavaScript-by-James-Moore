const name = 'James';

function greet(salutation, name) {
  return `${salutation} ${name}!`
}

const greeting = greet('Good Day', name);

console.log(greeting); 

// I'm using the "greet" function on line 3 above, 
// but "greet" doesn't actually exist.
// You need to write the greet function so it returns
// 'Good Day James!'
