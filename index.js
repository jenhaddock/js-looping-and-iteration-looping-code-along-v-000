// Code your solutions in this file
function printBadges(employees){
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }

  return employees;
}

function tailsNeverFails(){
  if (Math.random() >= 0.5){
    return true}
  else {
    return `You got ${i} tails in a row!`;
  };
}

let i = 0;
while (tailsNeverFails() === true) {
  i++;
}


