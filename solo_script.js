
var objectAtticus = {
    name: "Atticus",
    employeeNumber: "2405",
    baseSalary: "47000",
    reviewScore: 3
};

var objectJem = {
    name: "Jem",
    employeeNumber: "62347",
    baseSalary: "63500",
    reviewScore: 4
};

var objectBoo = {
    name: "Boo",
    employeeNumber: "11435",
    baseSalary: "54000",
    reviewScore: 3
};

var objectScout = {
    name: "Scout",
    employeeNumber: "6243",
    baseSalary: "74750",
    reviewScore: 5
};

var array = [objectAtticus, objectJem, objectBoo, objectScout];

//Create variables used to write to the DOM
var newEl, newText, position;

//Capture the position of insertion into the DOM
position = document.getElementById('content');

// Loop the array, extracting each array and writing information to the DOM
// Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode("Name: " + array[i].name + " | Bonus: " + array[i].bonus + " | Income: $" +  array[i].adjustedIncome + " | Raise: $" + array[i].basePercent);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}






function calculateSTI(object1){
  var newObject = {};

  newObject.name = object1.name;

  var employeeNumber = object1.employeeNumber;
  var baseSalary = object1.baseSalary;
  var reviewScore = object1.reviewScore;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject.bonus = bonus;
  newObject.adjustedIncome = Math.round(baseSalary * (1.0 + bonus));
  newObject.basePercent  = Math.round(baseSalary * bonus);
  
  console.log(newObject.name + "  " + newObject.bonus + " " + newObject.adjustedIncome  + " " + newObject.basePercent );
  return newObject;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:         
      basePercent = .04;
      break;
    case 4:
      basePercent = .06;
      break;
    case 5:
      basePercent = .10;
      break;
  }       //removed -1
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}