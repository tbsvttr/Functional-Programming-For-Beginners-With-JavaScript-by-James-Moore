// Count how many digits there are in the following 
// sentence, using functional composition

// NOTE: If you get stuck, you can get some hints from 
// the following jsbin: 
// https://jsbin.com/jokefus/2/edit?js,console
// my solution is here: https://jsbin.com/duxewec/1/edit?js,console

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const numbersInString = R.pipe(
    R.split(''),
    R.map(parseInt),
    R.filter(Number.isInteger),
    R.length,
  );


expect(numbersInString(sentence)).toBe(7); 

console.log('If you see this printed in the console, the test passed!');
