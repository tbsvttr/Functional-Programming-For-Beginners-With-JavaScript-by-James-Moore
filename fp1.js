const calories = 180;

const calories2 = '180';

// This adds up, because `calories` is a number.
console.log(calories + 1);

// This concatenates a '1' at the end, because `calories2` is a string and JavaScript is doing Type Coercion here.
console.log(calories2 + 1);
