let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// **Tasks:**

// 1. **Accessing Specific Value:**
//     - Write JavaScript code to fetch the first item in the grocery items list.
// 2. **Implementing `push` Method:**
//     - Write JavaScript code to add "Carrots" to the end of the grocery items list. Log the updated grocery items list.
// 3. **Implementing `pop` Method:**
//     - Write JavaScript code to remove the last item from the grocery items list. Log the updated grocery items list before and after the removal.
// 4. **Implementing `splice` Method:**
//     - Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" in their place. Log the updated grocery items list before and after the splice operation.

console.log(shoppingList[0]);
shoppingList.push("carrot");console.log(shoppingList[0]); // Access the first item in the grocery items list
shoppingList.push("Carrots"); // Add "Carrots" to the end of the grocery items list
console.log(shoppingList); // Log the updated grocery items list

console.log("Before pop operation: ", shoppingList); // Log the grocery items list before pop operation
shoppingList.pop(); // Remove the last item from the grocery items list
console.log("After pop operation: ", shoppingList); // Log the updated grocery items list after pop operation

console.log("Before splice operation: ", shoppingList); // Log the grocery items list before splice operation
shoppingList.splice(4, 2, "Cucumbers", "Bell Peppers"); // Remove "Tomatoes" and "Onions" and add "Cucumbers" and "Bell Peppers"
console.log("After splice operation: ", shoppingList); // Log the updated grocery items list after splice operation
console.log(shoppingList);



let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

// **Tasks:**

// 1. **Fetching Specific Value:**
//     - Write JavaScript code to fetch the student's name.
// 2. **Adding Value:**
//     - Write JavaScript code to add a new property **`phone`** with the value **`"123-456-7890"`** to the student object. Log the updated student object.
// 3. **Removing Value:**
//     - Write JavaScript code to remove the **`grade`** property from the student object. Log the updated student object before and after the removal.
// 4. **Modifying Value:**
//     - Write JavaScript code to modify the student's age to **`21`**. Log the updated student object.

console.log(student.name); // Fetch the student's name
student.phone = "123-456-7890";
console.log(student)
delete student.grade
console.log(student)
student.age = 21
console.log(student)


// ### Conditionals assignment

// - **Task 1: Understanding `if` Statements:**
//     - Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.
// - **Task 2: Implementing `else if` Statements:**
//     - Create a JavaScript program that evaluates a student's grade based on their score. The program should output "A" if the score is between 90 and 100, "B" if it's between 80 and 89, "C" if it's between 70 and 79, "D" if it's between 60 and 69, and "F" if it's below 60.
// - **Task 3: Exploring Truthy/Falsy Concepts:**
//     - Write a JavaScript function that takes a string as input and returns "Truthy" if the string is not empty, "Falsy" otherwise.

function checkPositiveOrNot(num){
    if(num>0){
        return "Positive"
    }if(num<0){
        return "Negative"
    }if(num==0){
        return "Zero"
    }
}

console.log(checkPositiveOrNot(0))

function checkGrade(score){
    if(score>=90 && score<=100){
        return "A"
    }else if(score>=80 && score<=89){
        return "B"
    }else if(score>=70 && score<=79){
        return "C"
    }else if(score>=60 && score<=69){
        return "D"
    }else{
        return "F"
    }
}

console.log(checkGrade(39))

function checkTruthyOrFalsy(str){
    if(str){
        return "Truthy"
    }else{
        return "Falsy"
    }
}

console.log(checkTruthyOrFalsy(""))