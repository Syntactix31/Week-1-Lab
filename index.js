"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6
const errorElement = document.getElementById("error-messages");
const errorHandling = document.getElementById("error-handling-list");

const broken = [
  { id: 1, name: "Billy", age: 19 },
  { id: 2, age: 45 },
  { id: 3 },
  { id: 4, name: "Mr. Cheez", age: 65 },
  { id: 5, name: "Blawg", age: 0 },
  { id: 6, name: "", age: 67 },
];

//      needs fixing


// Testing if it works (Exercise 6)
const brokenList = document.getElementById("broken-array-list");
const brokenErrors = document.getElementById("broken-array-errors");

// namesList(broken, brokenList, brokenErrors);

namesList(broken, errorHandling);
ageList(broken, 66, brokenList);






// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
users.forEach(
  users => {
  console.log(users.name)
}
);

let names = document.getElementById("names-list");

users.forEach(user => {
  let listItem = document.createElement("li");
  listItem.textContent = user.name;
  names.append(listItem);
});


// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

users.forEach(
  users => {
  if (users.age < 40) {
      console.log(users.name);
  }

}
);

let ages = document.getElementById("young-characters-list");
// console.log(ages);     Used this for debugging
users.forEach(users => {
  if ((users.age) < 40) {
    const li = document.createElement("li");
    li.textContent = users.name;
    ages.append(li);
  }

});


// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

function namesList(arrayName, listElement, errorDiv = errorElement) {
  listElement.innerHTML = "";
  errorDiv.innerHTML = "";

  arrayName.forEach(object => {
    if (!object.name) {
      let errorMessage = `Error!!!!!! \n The object: ${JSON.stringify(object, null, 2)} \n is missing a "name" property!!!!` 
      console.error(errorMessage); 
      const errorInfo = document.createElement("li");
      errorInfo.textContent = errorMessage;
      errorDiv.append(errorInfo);
    } else {
    const item = document.createElement("li");
    item.textContent = object.name;
    listElement.append(item);
    }
  });

}

const DW = [
  {name: "The Doctor", age: 2001 },
  {name: "Amy Pond", age: 21 },
  {name: "Rory Williams", age: 23 },
  {name: "Clara Oswald", age: 31 },
  {name: "Dalek", age: 1001 },
  {name: "Cyberman", age: -0 },
  {name: "TARDIS", age: 9999991 },
  {name: "Weeping Angels", age: 33 },
  {name: "The Silents", age: -0 },
  {name: "Rose Tyler", age: 19 },
];

let functionList = document.getElementById("function-list")
namesList(DW, functionList);



// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"



// Test code to see if it works properly
/*DW.forEach(
  DW => {
  if (DW.age < 30) {
      console.log(DW.name);
  }

}
);*/


function ageList(arrayName, threshold, errorDiv = errorElement) {
  const ageFilter = document.getElementById("age-filter-list");
  ageFilter.innerHTML = "";
  errorDiv.innerHTML = "";

  arrayName.forEach(object => {
    
    if (!object.name) {
      let errorMessage = `Error!!!!!! \n The object: ${JSON.stringify(object, null, 2)} \n is missing a "name" property!!!!` 
      console.error(errorMessage); 
      const errorInfo = document.createElement("li");
      errorInfo.textContent = errorMessage;
      errorDiv.append(errorInfo);
    } else {
      if (object.age < threshold && object.age >= 1) {
        const item = document.createElement("li");
        item.textContent = object.name;
        ageFilter.append(item);
      }  
    }


  });

}

let functionList2 = document.getElementById("function-list")
ageList(DW, 30);



// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

//  Added to top of script file





// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"













/*  NOTES: ageList prints out the errors as list elements but doesn't show the ones that successfully passed

nameslist does not show the objects that don't have a name

error messages working good in console

*/