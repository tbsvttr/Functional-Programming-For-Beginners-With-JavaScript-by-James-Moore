// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array, 
// to studentFeedback (as shown in comments below)

const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

// Solution without closure.
function feedbackFinder(letterGrade) {
  if(letterGrade === 'a'){
    return 'Excellent Job';
  } else if (letterGrade === 'b'){
    return 'Nice Job'; 
  } else if (letterGrade === 'c'){
    return 'Well done'; 
  } else if (letterGrade === 'd'){
    return 'What happened'; 
  } else {
    return 'Not good'; 
  }
}

function letterGradeFinder(points) {
  if(points >= 90){
    return 'a';
  } else if (points >= 80){
    return 'b'; 
  } else if (points >= 70){
    return 'c'; 
  } else if (points >= 60){
    return 'd'; 
  } else {
    return 'f'; 
  }
}

const studentFeedbackWithOutClosure = studentGrades.map((studentGrade) => {
  return `${feedbackFinder(letterGradeFinder(studentGrade.grade))} ${studentGrade.name}, you got an ${letterGradeFinder(studentGrade.grade)}`
})

console.log(studentFeedbackWithOutClosure)


// Solution with closure.

const messages = {
  a: 'Excellent Job',
  b: 'Nice Job',
  c: 'Well done',
  d: 'What happened',
  f: 'Not good',
};

function letterGradeFinder(points){
  if(points >= 90){
    return 'a';
  } else if (points >= 80){
    return 'b'; 
  } else if (points >= 70){
    return 'c'; 
  } else if (points >= 60){
    return 'd'; 
  } else {
    return 'f'; 
  }
}

function feedbackGenerator(feedBackRules){
  return (student) => {
    const grade = letterGradeFinder(student.grade);
    const message = feedBackRules[grade];
    return `${message} ${student.name}, you got an ${grade}`;
  }
}

const studentFeedbackWithClosure = studentGrades.map(feedbackGenerator(messages));

console.log(studentFeedbackWithClosure);

/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
]; 
*/

// Solution found at:
// https://jsbin.com/vaqomiy/1/edit?js,console
