// 1. create a meal object for a snack
// print both the snacks description
// and calories to the console

const meal = {
  description: 'Snack',
  calories: 100
};

Object.keys(meal).map(key => console.log(meal[key]));

/*
   2. create a new constant named 
   updatedCalories, setting it to 150
   plus the calories used in the above
   meal object.
   Print the value of updatedCalories 
   to the console.
   
   Note: use the dot notation syntax as
   part of the expression
*/

const updatedCalories = meal.calories + 150;

console.log(updatedCalories)


// Completed exercise at 
// https://jsbin.com/cojacal/1/edit?js,console
